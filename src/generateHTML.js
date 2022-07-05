//function iterates the teamArray use input by using an if/else statement. Then, that object is pushed into a new array that is returned below inside the template literal. The .join('') removes the ','s in the array.
const generateHTML = (teamArray) => {
    let html = [];
    for (let i = 0; i < teamArray.length; i++) {
        
        if (teamArray[i].getRole() === 'Manager') {
            html.push(managerCard(teamArray[i].name, 'Manager', teamArray[i].id, teamArray[i].email, teamArray[i].officeNumber))
            
        } else if (teamArray[i].getRole() === 'Engineer') {
            html.push(engineerCard(teamArray[i].name, 'Engineer', teamArray[i].id, teamArray[i].email, teamArray[i].github))

        } else {
            html.push(internCard(teamArray[i].name, 'Intern', teamArray[i].id, teamArray[i].email, teamArray[i].school))
        }
    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <script src="https://kit.fontawesome.com/64c90fc5f5.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1 class="title">My Team</h1>
        </header>
        <main>
            <section id="employee-cards"> ${html.join('')}
            </section>
        </main>
    </body>
    </html>`
};

//manager function/string template
const managerCard = (name, role, id, email, officeNumber) => {
    return `<div class="card">
    <div class="card-header">
        <h4 class="card-title" id="name">${name}</h4>
        <h5 class="card-subtitle" id="role">${role}</h5>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id="id">ID: ${id}</li>
            <li class="list-group-item" id="email">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item" id="office-number">Office Number: ${officeNumber}</li>
        </ul>
    </div>
</div>`
};

//engineer function/string template
const engineerCard = (name, role, id, email, github) => {
    return `<div class="card">
    <div class="card-header">
        <h4 class="card-title" id="name">${name}</h4>
        <h5 class="card-subtitle" id="role">${role}</h5>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
        </ul>
    </div>
</div>`
};

//intern function/string template
const internCard = (name, role, id, email, school) => {
    return `<div class="card">
    <div class="card-header">
        <h4 class="card-title" id="name">${name}</h4>
        <h5 class="card-subtitle" id="role">${role}</h5>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id="id">ID: ${id}</li>
            <li class="list-group-item" id="email">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item" id="school">School: ${school}</li>
        </ul>
    </div>
</div>`
};


module.exports = generateHTML;