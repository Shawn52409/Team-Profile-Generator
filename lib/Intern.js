const Employee = require('./Employee');

// sub class Intern
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
        this.type = 'Intern';
    };
    getsSchool(){
        return this.school;
    };
};

module.exports = Intern;