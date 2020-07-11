const Employee = require("../testMater/Employee.test");

class Engineer extends Employee {
// set values to our keywords 
    constructor (name, id, email, gitHub) {
    // call the parent using the super keyword
        super(name, id, email);
        this.gitHub = gitHub;
    } 
    getofficeNumber() {
        return this.gitHub;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;