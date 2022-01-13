const Employee = require("../Employee.js")

describe("employee", ()=>{
    //things to test: name email employee id
    test("an employee must have a name", ()=>{
        //here I have to instanciate the class
        const employee = new Employee("Shirley", 1, "shirley@company.com")
        //for every test I want an expect
        expect(employee.getName()).toEqual("Shirley")
        expect(employee.getEmail()).toEqual("shirley@company.com")
        expect(employee.getId()).toEqual(1)
    
    })

})
