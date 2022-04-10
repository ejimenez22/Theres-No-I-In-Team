const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Inter = require('./lib/Intern')
const Manager = require('./lib/Manager')

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
        console.log(newMgr.getRole())
        employees.push(newMgr)
        mainMenu()
    })
}

function mainMenu () {
    inquirer.prompt([
        {
            type: 'list',
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
            createHTML()
        }
    })
}

function engineerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your github link?',
            name: 'github'
        }
    ]).then (response => {
        if (response == 'githubInput')
            return mainMenu()
    })
}

function internQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please add employees school',
            name: 'school'
        }
    ]).then (response => {
        if (response == 'schoolInput')
            return mainMenu()
    })
}

managerQuestions();