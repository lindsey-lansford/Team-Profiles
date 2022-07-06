const Employee = require('../lib/Employee');

describe('Employee', () => {
    // Test for all use cases when initializing a new Employee object
    describe('Initialization', () => {
        it('should create an object with a name, id and email, if provided valid arguments', () => {
            const employee = new Employee('Lindsey', 789, 'lindsey@test.com');
            // Verify that the new object has the correct properties
            expect(employee.name).toEqual('Lindsey');
            expect(employee.id).toEqual(789);
            expect(employee.email).toEqual('lindsey@test.com');
        });
        //testing the methods that are being called with in the new Object
        it('should return the employee name when I run getName()', () => {
            const employee = new Employee('Lindsey', 879, 'lindsey@test.com');
            // Verify that the new object will return the 'name' value when the getName() method is called
            expect(employee.getName()).toEqual('Lindsey');
        });

        it('should return the employee id when I run getId()', () => {
            const employee = new Employee('Lindsey', 879, 'lindsey@test.com');
            // Verify that the new object will return the 'id' value when the getId() method is called
            expect(employee.getId()).toEqual(879);
        });

        it('should return the employee email address when I run getEmail()', () => {
            const employee = new Employee('Lindsey', 879, 'lindsey@test.com');
            // Verify that the new object will return the 'email' value when the getEmail() method is called
            expect(employee.getEmail()).toEqual('lindsey@test.com');
        });

        it('should return the Employee when I run getRole()', () => {
            const employee = new Employee('Lindsey', 879, 'lindsey@test.com');
            // Verify that the new object will return 'Employee' when the getRole() method is called
            expect(employee.getRole()).toEqual('Employee');
        });
    });
    
});