const fs = require("fs")
// writing files 
//we'll need to export writefile to app.js, when a user clicks finish we want them to write the file 
//filecontent is actually my employeeArray 
const writeFile = fileContent => {
    // the new promise is there to check to see if its actually done
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', generateHtml(fileContent), err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


// copying file
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};
//TODO: a function for the default html crap
//TODO: a function that returns the employee in html that returns the role with all of its html stuff
//TODO: in generate html I will want to loop through my employee array using a map 
function basicHtml() {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Portfolio Demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
</head>
<body> 
<div class="container">
<div class="row">
<h1 class="col-12 bg-success text-center">Team</h1>
<div class = "row row-cols-3"
<div class="card-group">

`
}
function createPeople(employeeArray) {
    //map is going to return an array with all the strings that were created for every employee
    //the map needs to return stuff but the function also needs to return stuff
    return employeeArray.map((employee) => {
        //mapping the employee data and can change the variable to employee in all the other things
        const role = employee.getRole()
        //employeeDetails is only here to define which employee is there for the switch statement so I know which to grab
        let employeeDetails = ""
        switch (role) {
            case "Engineer":
                employeeDetails = `<p class="card-text">Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>`
                break;
            case "Intern":
                employeeDetails = `<p class="card-text">School: ${employee.getSchool()}</p>`
                break;
            case "Team Manager":
                employeeDetails = `<p class="card-text">Phone Number: ${employee.getOfficeNumber()}</p>`
                break
        }
        return `


<div class="card border-success mb-3" style="max-width: 15rem;">
<div class="card-body">
<h3 class="card-title bg-success">${employee.getRole()}</h3>
<p class="card-text">Name: ${employee.getName()}</p>
<p class="card-text">Employee ID: ${employee.getId()}</p>
<p class="card-link">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
${employeeDetails}
</div>

</div>

`}).join("")
}
function finishHtml() {
    return `
    </div>
    </div>
    </div>
    </body>
    </html`
}

function generateHtml(employeeArray) {

    console.log("Let's make an html")

    return `${basicHtml()}
    ${createPeople(employeeArray)}
    ${finishHtml()}`

}
module.exports = { writeFile }


