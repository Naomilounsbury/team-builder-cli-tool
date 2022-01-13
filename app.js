const inquirer = require("inquirer");
const fs = require("fs")
const { Employee } = require("./Employee");
//prompt general manager questions to create a manager 
//the last question will be "would you like to add another team member"
//this question will be a choice between engineer and intern or none
//then once those questions are answered in the promise I'll make a switch case startment and for every case 
//if the case is "engineer", run a function called add engineer, define these functions in the same file
//these functions will prompt questions depending on whether an engineer or an intern is chosen addEngineer addIntern
//if they choose none thenrun another function called createHtml and it creates the Html
//in the function that builds the html i will reference template.js


const confirm = [
    // TODO: will need a lot of if statements
    // first if statement is if they actually want to do this 
    // second if statement(if they choose "yes" is going through the generic employee questions )
    //last will be a switch depending if they choose "team manager" "engineer" or "intern" to complete the last question
    {
        type: "confirm",
        name: "start",
        message: "Do you want to enter your team manager's information?",

    },
]
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
    name: 'Employee ID',
    message: 'Please enter their employee ID',
},
]
//if the employee is a team mananger will need an office number 


const addMember = [
    {
        type:"list",
        name: "add",
        message: "Which team member would you like to add?",
        choices: ["Engineer", "Intern"],
    }
]
function createTeamManager(){
    let managerData = inquirer.prompt([...generic,
        
            {
                type: 'input',
                name: 'office number',
                message: 'What is their office phone number?',
            },...addMember
        ]).then((data)=>{
            return data
            // managerData = data
            // nextEmployee = data.add
        })
        return managerData
}
// employeetype is not defined but when you define a function you also define any paramenters the function uses
//this makes no sense because how do you know what will be passed in 
//when we call createnextemployee employeetype will magically appear
function createNextEmployee(employeeType){
    console.log("creating", employeeType)
    switch (employeeType) {
        case "Engineer":
            return [...generic, {
                type: 'input',
                name: 'github',
                message: 'What is their GitHub username?',

            }]
        case "Intern":
            return [{
                type: 'input',
                name: 'school',
                message: 'What is the name of their school?',

            }]
        case "Finish":
            return [{
                type: "confirm",
                name: "finish",
                message: "Do you want to finish building the team?",
            }]
    }
}



//if the employee is an engineer then will need github and 

//if the employee is an intern then they need their school

function init() {
    inquirer.prompt(confirm)
        .then((data) => {
            console.log(data)
            //this is an early return, I dont want to go through doin all these checks if I can retrun the function and get out of it quicker
            if(!data.start) {
                console.log("end")
                return
            } 

            else{
                console.log("start")
                //first we want the team manager so were going to call that here but I don't
                //understand why it won't go through team manager first every single time because teammanager is called before the switch statement
                const teamManager = createTeamManager()
                const otherEmployees = createNextEmployee(teamManager.add)
                console.log(otherEmployees)

        }



            //if the employee is an engineer then will need github and 


            // writeToFile('index.html', Employee({ ...data }))

        })
}

init()