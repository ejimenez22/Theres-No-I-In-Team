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
    choices: ['Manager', 'Engineer', 'Intern']
}]

function init() {
    inquirer.prompt(employeeQuestions)
    .then(function(data) {
        writeToFile("index.html", generateHTML(data));
    })
}

init()