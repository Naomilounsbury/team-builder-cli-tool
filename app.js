const inquirer = require("inquirer");
const fs = require("fs");
const TeamManager = require("./TeamManager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
let employeeArray = [];
// //prompt general manager questions to create a manager 
// //the last question will be "would you like to add another team member"
// //this question will be a choice between engineer and intern or none
// //then once those questions are answered in the promise I'll make a switch case startment and for every case 
// //if the case is "engineer", run a function called add engineer, define these functions in the same file
// //these functions will prompt questions depending on whether an engineer or an intern is chosen addEngineer addIntern
// //if they choose none thenrun another function called createHtml and it creates the Html
// //in the function that builds the html i will reference template.js


// // const confirm = [
// //     // TODO: will need a lot of if statements
// //     // first if statement is if they actually want to do this 
// //     // second if statement(if they choose "yes" is going through the generic employee questions )
// //     //last will be a switch depending if they choose "team manager" "engineer" or "intern" to complete the last question
// //     {
// //         type: "confirm",
// //         name: "start",
// //         message: "Do you want to enter your team manager's information?",

// //     },
// // ]
// // const generic = [
// //     {
// //         type: 'input',
// //         name: 'name',
// //         message: "What is the employee's name?",
// //     },
// //     {
// //         type: 'input',
// //         name: 'email',
// //         message: 'What is their email address?',
// //     },

// //     {
// //         type: 'number',
// //         name: 'employeeId',
// //         message: 'Please enter their employee ID',
// //     },
// // ]
// //if the employee is a team mananger will need an office number 


// const addMember = [

//     {
//         type: "list",
//         name: "add",
//         message: "Would you like to add another team member or finish and create your team?",
//         choices: ["Engineer", "Intern", "Finish"],
//     }
// ]
// function createTeamManager() {
//     //theres a promise that is immediately returned before it even starts
//     // the function will be called and in order to get the value from this function, it has to be returned 
//     //but not at the end like a normal function, no that would be too easy, its getting returned immediately
//     //spread generic back in
//     inquirer.prompt([

//         {
//             type: 'input',
//             name: 'office number',
//             message: 'What is their office phone number?',
//             validate: answer => {
//                 if (answer !== "") {
//                     return true
//                 } else {
//                     return "please put a response"
//                 }
// //             }
// //         },

// //     ]).then(managerData => {
// //         console.log("managerData", managerData)
// //         const newTeamManager = new TeamManager(managerData)

// //     })

// // }
// // function engineer() {
// //     inquirer.prompt([...generic, {
// //         type: 'input',
// //         name: 'github',
// //         message: 'What is their GitHub username?',

// //     }])

// // }

// // employeetype is not defined but when you define a function you also define any paramenters the function uses
// //this makes no sense because how do you know what will be passed in 
// //when we call createnextemployee employeetype will magically appear
// function createNextEmployee(employeeType) {
//     console.log("creating", employeeType)
//     switch (employeeType) {
//         case "Engineer":
//             return engineer


//         case "Intern":
//             return inquirer.prompt([...generic, {
//                 type: 'input',
//                 name: 'school',
//                 message: 'What is the name of their school?',

//             }])
//         case "Finish":
//             console.log("goodbye")
// //     }
// }



//if the employee is an engineer then will need github and 

//if the employee is an intern then they need their school

function init() {
    function createTeamManager() {
        //theres a promise that is immediately returned before it even starts
        // the function will be called and in order to get the value from this function, it has to be returned 
        //but not at the end like a normal function, no that would be too easy, its getting returned immediately
        //spread generic back in
        inquirer.prompt([

            {
                type: "confirm",
                name: "start",
                message: "Do you want to enter your team manager's information?",

            },

        ]).then((data) => {
            console.log(data)
            //this is an early return, I dont want to go through doin all these checks if I can retrun the function and get out of it quicker
            if (!data.start) {
                console.log("end")
                return
            } else {

                inquirer.prompt([
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
                    {
                        type: 'input',
                        name: 'office number',
                        message: 'What is their office phone number?',
                        validate: answer => {
                            if (answer !== "") {
                                return true
                            } else {
                                return "please put a response"
                            }
                        },
                    },

                ]).then(managerData => {
                    console.log("managerData", managerData)
                    const newTeamManager = new TeamManager(managerData)
                    createTeam()

                })
            }
        })
    }
    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "add",
                message: "Would you like to add another team member or finish and create your team?",
                choices: ["Engineer", "Intern", "Finish"],
            }

        ]).then((choiceData) => {
            if (choiceData.add === "Engineer"){
                inquirer.prompt([
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
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is their GitHub username?',

                    }

                ]).then((engineerData)=>{
                    const newEngineer = new Engineer(engineerData)
                })

            }
            if(choiceData==="Intern"){
                inquirer.prompt([
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
                    {
                        type: 'input',
                        name: 'school',
                        message: 'What is the name of their school?',
        
                    },

                ]).then((internData) => {
                    const newIntern = new Intern(internData)
                })
            }
           
            // }
            // //  if(choiceData.add === "Finish"){
            // //     return finishAndBuild

        })

    }
    
    function finishAndBuild() {

    }
    createTeamManager()
}





//     inquirer.prompt(confirm)
//         .then((data) => {
//             console.log(data)
//             //this is an early return, I dont want to go through doin all these checks if I can retrun the function and get out of it quicker
//             if (!data.start) {
//                 console.log("end")
//                 return
//             }

//             else {

//                 console.log("start")
//                 //first we want the team manager so were going to call that here but I don't
//                 //understand why it won't go through team manager first every single time because teammanager is called before the switch statement
//                 createTeamManager()

//                 // const otherEmployees = createNextEmployee(teamManager.add)
//                 console.log(otherEmployees)

//             }
//             //if the employee is an engineer then will need github and 
//             // writeToFile('index.html', Employee({ ...data }))

//         })
// }

init()