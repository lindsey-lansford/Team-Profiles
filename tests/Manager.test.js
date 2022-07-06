const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should extend off Employee class and create an object with an office number, if provided valid arguments', () => {
        const manager = new Manager('Lindsey', 789, 'lindsey@test.com', 123);
        // Verify that the new object has the extended properties + new property
        expect(manager.officeNumber).toEqual(123);
    });

    it('should return the office number when the getOfficeNumber() method is called', () => {
        const manager = new Manager('Lindsey', 789, 'lindsey@test.com', 123);
        //Verify the office number property is returned when the getOfficeNumber() method is called
        expect(manager.getOfficeNumber()).toEqual(123);
    });

    it('should override the parent class, and return Manager when the getRole() method is called', () => {
        const manager = new Manager('Lindsey', 789, 'lindsey@test.com', 123);
        //Verify the role property is returned when the getRole() method is called
        expect(manager.getRole()).toEqual('Manager');
    });
});