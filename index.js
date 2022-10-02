const inquirer = require('inquirer')
const fs = require('fs')

const { generateMarkdown, licences } = require('./generateMarkdown')

const questions = [{
    type: 'input',
    name: 'githubusername',
    message: 'What is your GitHub username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
},
{
    type: 'input',
    name: 'title',
    message: "What is your project's name?"
},
{
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project'
},
{
    type: 'list',
    name: 'licence',
    message: 'What kind of licence should your project have?',
    choices: licences.map(lic => lic.name),
    default: "MIT"
},
{
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?'
},
{
    type: 'input',
    name: 'tests',
    message: 'What command should be run to run tests?'
},
{
    type: 'input',
    name: 'repoinfo',
    message: 'What does the user need to know about using the repo?'
},
{
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?'
}
]

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}
function init() {

    inquirer.prompt(questions)
        .then(answers => {
            writeToFile('README.md', generateMarkdown(answers, licences)
            )
        })
}

init()