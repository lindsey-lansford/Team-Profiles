//file that builds the html template with all the user input
const generateHTML = require('./src/generateHTML');

//team prompts
const { managerPrompts, engineerPrompts, internPrompts } = require('./lib/prompts');

//modules needed for app
const fs = require('fs');
const inquirer = require('inquirer');

//team sub classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//holds the user input to build the html template
const teamArray = [];

//function that initiates the build/manager prompts and sends the manager input into the teamArray, and then initiates the addEmployee function/prompts
const initTeamBuild = () => {
    inquirer.prompt(managerPrompts)
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            addEmployee();
        })
};

//addEmployee function will complete the rest of the prompts and push that user input into the teamArray with an if else statement, or it will generateHTML build.
const addEmployee = () => {
    inquirer.prompt({
        type: 'list',
        name: 'addMore',
        message: "Would you like to add more employees to your team?",
        choices: [
            { name: 'No, my team is finished.', value: 'finished' },
            { name: 'Yes, add an engineer.', value: 'engineer' },
            { name: 'Yes, add an intern.', value: 'intern' },
        ],
        default: 'finished'
    }).then(answers => {
        if (answers.addMore === 'engineer') {
            inquirer.prompt(engineerPrompts)
                .then(engineerInput => {
                    const { name, id, email, github } = engineerInput;
                    const engineer = new Engineer(name, id, email, github);

                    teamArray.push(engineer);
                    addEmployee();
                })
        } else if (answers.addMore === 'intern') {
            inquirer.prompt(internPrompts)
                .then(internInput => {
                    const { name, id, email, school } = internInput;
                    const intern = new Intern(name, id, email, school);

                    teamArray.push(intern);
                    addEmployee();
            })
        } else {
            console.log('Thank you! Your team information has been received.');
            let finalOutput = generateHTML(teamArray);
            createHTML(finalOutput);
        }
    })
};

//function called to initialize app
initTeamBuild();

//function will take the finalOutput and write the html file.
const createHTML = (template) => {
    fs.writeFile('./dist/template.html', template, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Your Team profile was successfully created!');
        }
    })
};
