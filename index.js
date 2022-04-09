const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Inter = require('./lib/Intern')
const Manager = require('./lib/Manager')

const employeeQuestions = [{
    type: 'input',
    name: 'name',
    message: "What is your employees name?"
},
{
    type: 'input',
    name: 'id',
    message: 'What is your employee ID?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your employees email?'
}, 
{
    type: 'checkbox',
    name: 'role',
    message: 'What is your employees role?',
    choices: ['Manager', 'Engineer', 'Intern'], 
    validate: managerInput => {
        if ('Manager') {
            return managerQ
        } else {
           return employeeData
        }
    }
}]

const managerQ = [{
    type: 'input',
    name: 'office',
    message: 'Please enter your office number.'
},
{
    type: 'confirm',
    name: 'add',
    message: 'Would you like to add another employee?',
    default: false,
    validate: confirmation => {
        if (confirmation === true) {
            return {
                type: 'checkbox',
                name: 'role',
                message: 'What is your employees role?',
                choices: ['Manager', 'Engineer', 'Intern'],
                validate: engineerInput => {
                    if ('Engineer') {
                        return engineerQ()
                    } else {
                        return employeeData
                    }
                }
            }
            
        } else {
            return employeeData
        }
    }
}]

function init() {
    inquirer.prompt(employeeQuestions)
    .then(function(data) {
        writeToFile("index.html", generateHTML(data));
    })
}

init()