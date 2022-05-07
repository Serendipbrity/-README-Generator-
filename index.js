// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const promptUser = () => { 
    return inquirer.prompt ([
    {
    type: 'input',
    // title captures the users input
    name: 'title',
    message: 'What is the name of your project? (Required)',
    // function to validate if user gave an input
    validate: nameInput => {
        // if user gave input, return true and move on
        if (nameInput) {
            return true;
            // if user gave no input, return false and prompt for input
        } else {
            console.log('Please enter a project name! (Required)');
            return false;
        }
      }
    },{
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Provide a project description: (Required)');
                return false;
            }
        }
    },{
        type: 'input',
        name: 'installation',
        message: 'Provide instruction for installation: (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation instructions (Required)');
                return false;
            }
        }
    },{
        type: 'input',
        name: 'usage',
        message: 'What are the uses for this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Provide uses for project (Required)');
                return false;
            }
        }
    },{
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute?',
    },{
        type: 'input',
        name: 'test',
        message: 'What are the test instructions? (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Provide test instructions. (Required)");
                return false;
            }
        }
    },{
        type: 'input',
        name: 'username',
        message: 'Enter your github username (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Enter github username (Required)');
                return false;
            }
        }
    },{
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Provide an email (Required)');
                return false;
            }
        }
    },{
        type: 'list',
        name: 'license',
        message: 'Which license is used?',
        choices:['MIT','APACHE 2.0','GPL 3.0','BSD 3']
        // validate: chosen => {
        //     if (chosen[0]) {
                
        //     }
        // }
        }
    
])};


promptUser() 
    .then(promptAnswers => {
        // 
        fs.writeFileSync('README.md', generateMarkdown(promptAnswers));
    })



