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
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
        <title>Team Profile Generator</title>
        <style>
            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
        </style>
    </head>

    <body>
        <div class="container-lg">
            <div class="row g-4 mb-4 justify-content-center align-items-center">
                <div class="col-md-5 text-center text-md-start">
                    <h1 class="display-2 text-center">My Team</h1>
                </div>
            </div>
        </div>

        <div class="container-lg">
            <div class="row row-cols-1 row-cols-md-3 g-4 align-items-center justify-content-center">
                    ${html.join('')}
            </div>
        </div>
    </body>
    </html>`
};

//manager function/string template
const managerCard = (name, role, id, email, officeNumber) => {
    return `
                <div class="col-8 col-lg-4 col-xl-3">
                    <div class="card h-100">
                        <div class="card-header text-center">
                            <h3 class="card-title">${name}</h3>
                            <h4 class="lead card-subtitle">${role}</h4>
                            <i class="bi bi-cup"></i>
                        </div>
                        <div class="card-body text-center py-4">
                            <ul class="list-group">
                                <li class="list-group-item"><i class="bi bi-fingerprint"></i> <span class="fw-bold">ID: </span>${id}</li>
                                <li class="list-group-item"><i class="bi bi-envelope"></i> <span class="fw-bold">Email: </span><a href="mailto:${email}">${email}</a></li>
                                <li class="list-group-item"><i class="bi bi-building"></i> <span class="fw-bold">Office Number: </span>${officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
};

//engineer function/string template
const engineerCard = (name, role, id, email, github) => {
    return `
                <div class="col-8 col-lg-4 col-xl-3">
                    <div class="card h-100">
                        <div class="card-header text-center">
                            <h3 class="card-title">${name}</h3>
                            <h4 class="lead card-subtitle">${role}</h4>
                            <i class="bi bi-gear"></i>
                        </div>
                        <div class="card-body text-center py-4">
                            <ul class="list-group">
                                <li class="list-group-item"><i class="bi bi-fingerprint"></i> <span class="fw-bold">ID: </span>${id}</li>
                                <li class="list-group-item"><i class="bi bi-envelope"></i> <span class="fw-bold">Email: </span><a href="mailto:${email}">${email}</a></li>
                                <li class="list-group-item"><i class="bi bi-github"></i> <span class="fw-bold">GitHub: </span><a href="https://github.com/${github}" target="_blank">${github}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>`
};

//intern function/string template
const internCard = (name, role, id, email, school) => {
    return `
                <div class="col-8 col-lg-4 col-xl-3">
                    <div class="card h-100">
                        <div class="card-header text-center">
                            <h3 class="card-title">${name}</h3>
                            <h4 class="lead card-subtitle">${role}</h4>
                            <i class="bi bi-battery-full"></i>
                        </div>
                        <div class="card-body text-center py-4">
                            <ul class="list-group">
                                <li class="list-group-item"><i class="bi bi-fingerprint"></i> <span class="fw-bold">ID: </span>${id}</li>
                                <li class="list-group-item"><i class="bi bi-envelope"></i> <span class="fw-bold">Email: </span><a href="mailto:${email}">${email}</a></li>
                                <li class="list-group-item"><i class="bi bi-mortarboard"></i> <span class="fw-bold">School: </span>${school}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
};


module.exports = generateHTML;