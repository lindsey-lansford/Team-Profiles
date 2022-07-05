//manager prompts
const managerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the name of the team manager.",
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
        message: "Please enter the ID number of the team manager.",
        validate: answer => {
            if (!answer) {
                return "The manager's ID is required. \nPlease enter the ID number of the team manager.";
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the email address of the team manager.",
        validate: answer => {
            if (!answer) {
                return "The manager's email address is required. \nPlease enter the email address of the team manager.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the office phone number of the team manager.",
        validate: answer => {
            if (!answer) {
                return "The office phone number is required. \nPlease enter the office phone number of the team manager."
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
        message: "Please enter the name of the engineer.",
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
        message: "Please enter the ID number of the engineer.",
        validate: answer => {
            if (!answer) {
                return "The engineer's ID is required. \nPlease enter the ID number of the engineer.";
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the email address of the engineer.",
        validate: answer => {
            if (!answer) {
                return "The engineer's email address is required. \nPlease enter the email address of the team engineer.";
            } else {
                return true;
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
        message: "Please enter the name of the intern.",
        validate: answer => {
            if (!answer) {
                return"The intern's name is required. \nPlease enter the name of the intern.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the ID number of the intern.",
        validate: answer => {
            if (!answer) {
                return "The intern's ID is required. \nPlease enter the ID number of the intern.";
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the email address of the intern.",
        validate: answer => {
            if (!answer) {
                return "The intern's email address is required. \nPlease enter the email address of the team intern.";
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the school's name that the intern attended.",
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