const inquirer = require("inquirer");
const fs = require("fs")
const { Employee } = require("./Employee");

const confirm = [
    // TODO: will need a lot of if statements
    // first if statement is if they actually want to do this 
    // second if statement(if they choose "yes" is going through the generic employee questions )
    //last will be a switch depending if they choose "team manager" "engineer" or "intern" to complete the last question
    {
        type: "confirm",
        name: "prompt",
        message: "Do you want to enter your team manager's information?",

    },
]
const generic = [{
    type: "list",
    name: "title",
    message: "What is the employee's title?",
    choices: ["Team Manager", "Engineer", "Intern", "Finish"]
},
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
    type: 'input',
    name: 'Employee ID',
    message: 'Please enter their employee ID',
},
]
//if the employee is a team mananger will need an office number 






//if the employee is an engineer then will need github and 

//if the employee is an intern then they need their school

function init() {
    inquirer.prompt(confirm, generic)
        .then((data) => {
            console.log(data)
            switch (data.title) {
                case "Team Manager":
                    return [{
                        type: 'input',
                        name: 'office number',
                        message: 'What is their office phone number?',
                    }]
                case "Engineer":
                    return [{
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



            //if the employee is an engineer then will need github and 


            // writeToFile('index.html', Employee({ ...data }))

        })
}

init()