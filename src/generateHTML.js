const generateHTML = (teamArray) => {
    // console.log(teamArray)
    for (let i = 0; i < teamArray.length; i++) { 
        console.log(teamArray[i].getRole())
    }
}

const managerCard = (manager) => {
    for (let i = 0; i < manager.length; i++) { 
        console.log(manager[i].getRole())
    }
}

const engineerCard = (engineer) => {
    for (let i = 0; i < engineer.length; i++) { 
        console.log(engineer[i].getRole())
    }
}

const internCard = (intern) => {
    for (let i = 0; i < intern.length; i++) { 
        console.log(intern[i].getRole())
    }
}




module.exports = generateHTML;