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

        it('should throw an error if provided zero arguments', () => {
            // Wrap the object initialization in a callback function that Jest will run
            const employee = () => new Employee('Lindsey', '123', 'lindsey@test.com');
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to be a numberic value");
            // Verify that the correct error was thrown when the callback is executed
            expect(employee).toThrow(err);
        });

        it("should throw an error if not provided an id", () => {
            const employee = () => new Employee('Lindsey', 'lindsey@test.com');
            const err = new Error("Expected parameter 'id' to be entered");

            expect(employee).toThrow(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const employee = () => new Employee(Lindsey, 25, 'lindsey@test.com');
            const err = new Error("Expected parameter 'name' to be a string");

            expect(employee).toThrow(err);
        });

        it("should throw an error if 'email' does not mirror the characters used in an email address", () => {
            const employee = () => new Employee('Lindsey', 25, 'lindseytest.com');
            const err = new Error("Expected parameter 'email' to mirror the characters in an email address.");

            expect(employee).toThrow(err);
        });
    });
    
});