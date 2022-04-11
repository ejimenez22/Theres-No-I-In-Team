const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
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
        },
        {
            type: 'input',
            message: 'What is the employees name?',
            name: `emName`
        },
        {
            type: 'input',
            message: 'What is the employees id number?',
            name: `emId`
        },
        {
            type: 'input',
            message: "What is the employees email?",
            name: `emEmail`
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
            name: `engGithub`
        }
    ]).then (response => {
       const newEngin = new Engineer(response.emName, response.emId, response.emEmail, response.engGithub)
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
        }
    ]).then (response => {
        const newIntern = new Intern(response.emName, response.emId, response.emEmail, response.intSchool)
        employees.push(newIntern)
        mainMenu()
    })
}

managerQuestions();