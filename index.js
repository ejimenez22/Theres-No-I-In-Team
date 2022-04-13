const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateHTML = require('./src/generateHTML')

const employees = [];

function managerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Manager name?',
            name: `mgrName`
        },
        {
            type: 'input',
            message: 'What is the Manager ID?',
            name: `mgrId`
        },
        {
            type: 'input',
            message: 'What is the Manager Email?',
            name: `mgrEmail`
        },
        {
            type: 'input',
            message: 'What is the Manager office Number?',
            name: `mgrOffice`
        }
    ]).then(response => {
        const newMgr = new Manager(response.mgrName, response.mgrId, response.mgrEmail, response.mgrOffice);
        employees.push(newMgr)
        mainMenu()
    })
}

function mainMenu () {
    inquirer.prompt([
        {
            type: 'checkbox',
            message: 'Would you like to add more?',
            name: `choice`,
            choices: ["Engineer", "Intern", "I am done"]
        }
    ]).then(response => {
        if (response.choice == "Engineer") {
            engineerQuestions()
        } else if (response.choice == "Intern") {
            internQuestions()
        } else {
            createHTML(generateHTML(response))
        }
    })
}

function engineerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your github link?',
            name: `engGithub`
        },      
        {
            type: 'input',
            message: 'What is the employees name?',
            name: `engName`
        },
        {
            type: 'input',
            message: 'What is the employees id number?',
            name: `engId`
        },
        {
            type: 'input',
            message: "What is the employees email?",
            name: `engEmail`
        }
    ]).then (response => {
       const newEngin = new Engineer(response.engName, response.engId, response.engEmail, response.engGithub)
       employees.push(newEngin)
       mainMenu()
    })
}

function internQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please add employees school',
            name: `intSchool`
        },
        {
            type: 'input',
            message: 'What is the employees name?',
            name: `intName`
        },
        {
            type: 'input',
            message: 'What is the employees id number?',
            name: `intId`
        },
        {
            type: 'input',
            message: "What is the employees email?",
            name: `intEmail`
        }
    ]).then (response => {
        const newIntern = new Intern(response.intName, response.intId, response.intEmail, response.intSchool)
        employees.push(newIntern)
        mainMenu()
    })
}

const createHTML = response => {
    fs.writeFile('./dist/index.html', response, err => {
        if (err) {
            console.log('Error!')
        } else {
            console.log('Your Portfolio is ready!')
        }
    })
}

managerQuestions()
