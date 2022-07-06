//manager prompts
const managerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the team manager's name.",
        // validate if the entry is 1 character or more
        validate: answer => {
            if (!answer) {
                return "The manager's name is required. \nPlease enter the team manager's name.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the team manager's ID number.",
        // validate if the entry is a numeric value or 1+ characters
        validate: answer => {
            if (isNaN(answer) || answer < 1) {
                return "The manager's ID# is required and must be a numeric value. \nPlease enter the team manager's ID number.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the team manager's email address.",
        // validate if the entry mirrors an email address
        validate: answer => {
            if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(answer)) {
                return true;
            } else {
                return "The team manager's email address is required. \nPlease enter the team manager's email address.";
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the team manager's office number.",
        // validate if the entry is a numeric value or 1+ characters
        validate: answer => {
            if (isNaN(answer) || answer < 1) {
                return "The office number is required and must be a numeric value. \nPlease enter the team manager's office number.";
            } else {
                return true;
            }
        }
    }
];

//engineer prompts
const engineerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the engineer's name.",
        // validate if the entry is 1 character or more
        validate: answer => {
            if (!answer) {
                return "The engineer's name is required. \nPlease enter the engineer's name.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the engineer's ID number.",
        // validate if the entry is a numeric value or 1+ characters
        validate: answer => {
            if (isNaN(answer) || answer < 1) {
                return "The engineer's ID# is required and must be a numeric value. \nPlease enter the engineer's ID number.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the engineer's email address.",
                // validate if the entry mirrors an email address
        validate: answer => {
            if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(answer)) {
                return true;
            } else {
                return "The engineer's email address is required. \nPlease enter the engineer's email address.";
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the engineer's GitHub username.",
        // validate if the entry is 1 character or more
        validate: answer => {
            if (!answer) {
                return "The engineer's GitHub username is required. \nPlease enter the engineer's GitHub username.";
            } else {
                return true;
            }
        }
    }
];

//intern prompts
const internPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the intern's name.",
        // validate if the entry is 1 character or more
        validate: answer => {
            if (!answer) {
                return "The intern's name is required. \nPlease enter the intern's name.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the intern's ID number.",
        // validate if the entry is a numeric value or 1+ characters
        validate: answer => {
            if (isNaN(answer) || answer < 1) {
                return "The intern's ID# is required and must be a numeric value. \nPlease enter the intern's ID number.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the intern's email address.",
        // validate if the entry mirrors an email address
        validate: answer => {
            if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(answer)) {
                return true;
            } else {
                return "The intern's email address is required. \nPlease enter the intern's email address.";
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the name of the school that the intern attended.",
        // validate if the entry is 1 character or more
        validate: answer => {
            if (!answer) {
                return "The intern's school name is required. \nPlease enter the school's name that the intern attended.";
            } else {
                return true;
            }
        }
    }
];


module.exports = {
    managerPrompts,
    engineerPrompts,
    internPrompts
};