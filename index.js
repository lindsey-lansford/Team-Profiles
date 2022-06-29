//file that builds the html team profile
const generateHTML = require('./src/generateHTML.js');

//node modules
const fs = require('fs');
const inquirer = require('inquirer');

//team classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//team array-->coming from user input
const teamArray = [];

//manager prompts & add function
const addManager = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the name of the team manager.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the ID of the team manager.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the email address of the team manager.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the office phone number of the team manager.",
        },
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);
        
        teamArray.push(manager);
        // console.log(manager);
        addEmployee();
    })
}


//employee prompts & add function
const addEmployee = () => {
    console.log(`
        ================================
        Adding employees to the team-->
        ================================
    `);
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please select one of the following roles for your new employee.",
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID number.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's GitHub username.",
            when: (input) => input.role === 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the school's name that the Intern attended.",
            when: (input) => input.role === 'Intern',
        },
        {
            type: 'confirm',
            name: 'confirmAddMore',
            message: "Would you like to add more employees to your team?",
            default: false,
        },
    ])
        .then(employeeInput => {
            let { role, name, id, email, github, school, confirmAddMore } = employeeInput;
            // console.log(employeeInput)
            let employee;
            
            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
                // console.log(employee);

            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
                // console.log(employee);
            }
            teamArray.push(employee);
            
            if (confirmAddMore) {
                addEmployee(teamArray);
            } else {
                // console.log(teamArray);
                generateHTML(teamArray);
            }
        });
};

const writeTeamProfile = data => {
    fs.writeFile('./examples/index.html', data, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('success!')
        }
    })
};

addManager()