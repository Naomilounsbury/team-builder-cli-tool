const TeamManager = require("../TeamManager.js")

describe("team manager", ()=>{
    //things to test: name email employee id office number
    test("a team manager must not only have a name id and email but also an office number", ()=>{
        //here I have to instanciate the class
        const manager = new TeamManager("Shirley", 1, "shirley@company.com", "7732574")
        //for every test I want an expect
        expect(manager.getName()).toEqual("Shirley")
        expect(manager.getEmail()).toEqual("shirley@company.com")
        expect(manager.getId()).toEqual(1)
        expect(manager.getOfficeNumber()).toEqual(7732574)

    
    })
})