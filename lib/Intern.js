const Intern = require("./Employee");

class Intern extends Employee {
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
        return "Intern";
    }
}

module.exports = Intern;