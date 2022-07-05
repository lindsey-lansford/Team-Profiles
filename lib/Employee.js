//Employee class--will use this class to extend the other roles.
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee'
    }

    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
};
// const test = new Employee('ben', '5' ,'test@email.com')
// console.log(test)
// console.log(test.getRole())

module.exports = Employee;

