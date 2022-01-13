const Engineer = require("../Engineer.js")

describe("engineer", ()=>{
    //things to test: name email employee id office number
    test("an engineer must not only have a name id and email but also a github", ()=>{
        //here I have to instanciate the class
        const engineer = new Engineer("Shirley", "1", "shirley@company.com", "shirleylee")
        //for every test I want an expect
        expect(engineer.name).toEqual("Shirley")
        expect(engineer.email).toEqual("shirley@company.com")
        expect(engineer.id).toEqual(1)
        expect(engineer.github).toEqual("shirleylee")
    })
})