const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;

// const test = new Manager('ben', '5' ,'test@email.com', '999/999/5555')
// console.log(test)
// console.log(test.getRole())