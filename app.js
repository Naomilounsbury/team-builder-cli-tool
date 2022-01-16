//destructuring inquirer because I'm only using prompt and so i don't need all that other stuff with inquirer, might add validation later if I feel like it
const {prompt} = require("inquirer");
const fs = require("fs");
const TeamManager = require("./TeamManager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const {writeFile} = require("./utils")
let employeeArray = [];
//prompt general manager questions to create a manager 
//the last question will be "would you like to add another team member"
//this question will be a choice between engineer and intern or none
//then once those questions are answered in the promise I'll make a switch case startment and for every case 
//if the case is "engineer", run a function called add engineer, define these functions in the same file
//these functions will prompt questions depending on whether an engineer or an intern is chosen addEngineer addIntern
//if they choose none thenrun another function called createHtml and it creates the Html
//in the function that builds the html i will reference template.js



const generic = [
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
    },

    {
        type: 'number',
        name: 'employeeId',
        message: 'Please enter their employee ID',
    },
]


function addMember() {

    prompt(
        [{
        type: "list",
        name: "add",
        message: "Would you like to add another team member or finish and create your team?",
        choices: ["Engineer", "Intern", "Finish"],
        },
    ]).then((data)=>{
        switch (data.add) {
            case "Engineer":
                engineer()
                break;
            case "Intern":
                intern()
                break;
            
            case "Finish":
                writeFile(employeeArray)
                console.log("goodbye")
        }
    })

}
function createTeamManager() {
    //theres a promise that is immediately returned before it even starts
    // the function will be called and in order to get the value from this function, it has to be returned 
    //but not at the end like a normal function, no that would be too easy, its getting returned immediately
    //spread generic back in
    console.log("Let's start by creating a team manager.")
    prompt([...generic,

        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their office phone number?',
           
        },

    ]).then(managerData => {
        //destructuring managerdata for funsies
        const {name, employeeId, email, officeNumber} = managerData
        console.log("managerData", managerData)
        const newTeamManager = new TeamManager(name, employeeId, email, officeNumber);
        employeeArray.push(newTeamManager);
        addMember();

    })

}
function engineer() {
    prompt([...generic, 
        {
        type: 'input',
        name: 'github',
        message: 'What is their GitHub username?',

    }]).then((engineerData)=>{
        const{name, employeeId, email, github} = engineerData
        const newEngineer = new Engineer(name, employeeId, email, github);
        employeeArray.push(newEngineer)
        addMember()
    })

}
function intern(){
    prompt([...generic,
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of their school?',

        },
    ]).then((internData)=>{
        const {name, employeeId, email, school} = internData
        const newIntern = new Intern(name, employeeId, email, school);
        employeeArray.push(newIntern);
        addMember()
    })

}

function init(){
    createTeamManager()   
}

init()