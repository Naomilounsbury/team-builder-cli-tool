//destructuring inquirer because I'm only using prompt and so i don't need all that other stuff with inquirer, might add validation later if I feel like it
const {prompt} = require("inquirer");
const TeamManager = require("./lib/TeamManager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const {writeFile} = require("./src/utils");
// this array is to store the data collected
let employeeArray = [];
//here is my array with the generic questions
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
//made an addmember function to be run at the end of each creation of a person
// I got my switch statement to run each of the functions engineer or intern on the choice of engineer or intern
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
  //for the team manager all I need are to spread in the generic questions and the office number question
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
        const newTeamManager = new TeamManager(name, employeeId, email, officeNumber);
        //pushing it up to my array at the top
        employeeArray.push(newTeamManager);
        //running add member to see if they want to add another member 
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