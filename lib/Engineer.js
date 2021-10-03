const Employee = require('./Employee');

// sub class Engineer
class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email)
        this.gitHub = gitHub;
        this.type = 'Engineer';
    };
    getGithub(){
        return this.gitHub;
    };
};

module.exports = Engineer;