const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should extend off Employee class and create an object with a GitHub username, if provided valid arguments', () => {
        const engineer = new Engineer('Emily', 64, 'engineer@test.com', 'emily-smith');
        // Verify that the new object has the extended properties + new property
        expect(engineer.github).toEqual('emily-smith');
    });

    it('should throw an error if provided zero arguments', () => {
        const engineer = new Engineer('Emily', 64, 'engineer@test.com', '');
        // Verify an error when the entry is not valid
        expect(engineer.github).toThrowError();
    });

    it('should return the github value when the getGithub() method is called', () => {
        const engineer = new Engineer('Emily', 64, 'engineer@test.com', 'emily-smith');
        //Verify the github property is returned when the getGithub() method is called
        expect(engineer.getGithub()).toEqual('emily-smith');
    });

    it('should override the parent class, and return Engineer when the getRole() method is called', () => {
        const engineer = new Engineer('Emily', 64, 'engineer@test.com', 'emily-smith');
        //Verify the role property is returned when the getRole() method is called
        expect(engineer.getRole()).toEqual('Engineer');
    });
});