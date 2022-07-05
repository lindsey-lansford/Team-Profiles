//manager prompts
const managerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the team manager's name.",
        validate: answer => {
            if (!answer) {
                return "The manager's name is required. \nPlease enter the name of the team manager.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the team manager's ID number.",
        validate: answer => {
            if (!answer) {
                return "The manager's ID is required. \nPlease enter the ID number of the team manager.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the team manager's email address.",
        validate: answer => {
            if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(answer)) {
                return true;
            } else {
                return "The manager's email address is required. \nPlease enter the email address of the team manager.";
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the team manager's office number.",
        validate: answer => {
            if (!answer) {
                return "The office number is required. \nPlease enter the office number of the team manager.";
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
        validate: answer => {
            if (!answer) {
                return"The engineer's name is required. \nPlease enter the name of the engineer.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the engineer's ID number.",
        validate: answer => {
            if (!answer) {
                return "The engineer's ID is required. \nPlease enter the ID number of the engineer.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the engineer's email address.",
        validate: answer => {
            if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(answer)) {
                return true;
            } else {
                return "The engineer's email address is required. \nPlease enter the email address of the team engineer.";
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the engineer's GitHub username.",
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
        validate: answer => {
            if (!answer) {
                return "The intern's name is required. \nPlease enter the name of the intern.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the intern's ID number.",
        validate: answer => {
            if (!answer) {
                return "The intern's ID is required. \nPlease enter the ID number of the intern.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the intern's email address.",
        validate: answer => {
            if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(answer)) {
                return true;
            } else {
                return "The intern's email address is required. \nPlease enter the email address of the team intern.";
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the name of the school that the intern attended.",
        validate: answer => {
            if (!answer) {
                return "The intern's school name is required. \nPlease enter the school's name hat the intern attended.";
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