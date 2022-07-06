const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should extend off Employee class and create an object with a school name, if provided valid arguments', () => {
        const intern = new Intern('Lindsey', 789, 'lindsey@test.com', 'TCU');
        // Verify that the new object has the extended properties + new property
        expect(intern.school).toEqual('TCU');
    });

    it('should return the school value when the getSchool() method is called', () => {
        const intern = new Intern('Lindsey', 789, 'lindsey@test.com', 'TCU');
        //Verify the school property is returned when the getSchool() method is called
        expect(intern.getSchool()).toEqual('TCU');
    });

    it('should override the parent class, and return Intern when the getRole() method is called', () => {
        const intern = new Intern('Lindsey', 789, 'lindsey@test.com', 'TCU');
        //Verify the role property is returned when the getRole() method is called
        expect(intern.getRole()).toEqual('Intern');
    });
});