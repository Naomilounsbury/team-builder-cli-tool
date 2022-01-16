const Intern = require("../lib/Intern.js")

describe("Intern", ()=>{
    //things to test: name email employee id office number
    test("an intern must not only have a name id and email but also a school", ()=>{
        //here I have to instanciate the class
        const intern = new Intern("Shirley", 1, "shirley@company.com", "San Francisco State")
        //for every test I want an expect
        expect(intern.getName()).toEqual("Shirley")
        expect(intern.getEmail()).toEqual("shirley@company.com")
        expect(intern.getId()).toEqual(1)
        expect(intern.getSchool()).toEqual("San Francisco State")

    
    })
})