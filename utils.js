const fs = require("fs")
// writing files 
//we'll need to export writefile to app.js, when a user clicks finish we want them to write the file 
//filecontent is actually my employeeArray 
const writeFile = fileContent => {
    // the new promise is there to check to see if its actually done
    return new Promise((resolve, reject) => {
      fs.writeFile('./index.html', generateHtml(fileContent), err => {
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


function generateHtml(employeeArray){
    console.log(employeeArray[0].getRole())
    console.log("let's make an html")
    return `<p>${employeeArray[0].getRole()}</p>`

}
module.exports = {writeFile}