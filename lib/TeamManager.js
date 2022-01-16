const Employee = require("./Employee")

class TeamManager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = parseInt(officeNumber)       
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return "Team Manager"
    }

}
module.exports = TeamManager