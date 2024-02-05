const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');
const licenseChoice = require("./utils/licenseChoice").licenseChoice;
const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about?',
    },
    {
        type: 'input',
        name: 'userStory',
        message: 'Please input your user story:',
    },
    {
        type: 'input',
        name: 'visuals',
        message: 'Please input a link to your visuals:',
    },
    {
        type: 'input',
        name: 'visualsLabel',
        message: 'Please input a label to name those visuals:',
    },    
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project / any tech required?',
    },
    {
        type: 'input',
        message: 'How shall this project be used?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which license are you using for this project?',
        name: 'license',
        choices: ['MIT', 'Mozilla', 'Apache', 'GNU AGPLv3', 'Creative Commons'],
    },
    {
        type: "input",
        message: "What have you done to test this project?",
        name: "test",
    },
    {
        type: "input",
        message: "Please type your acknowledgements here:",
        name: "acknowledgements",
    },
    {
        type: "input",
        message: "Please type a link to your acknowledgements here:",
        name: "acknowledgementsLink",
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "userEmail",
    }
])};

// function to initialize program
// function to write README file

const init = async () => {

    console.log('hi');
    try {
        const answers = await promptUser();
        answers.licenseChoice = licenseChoice(answers.license);
        const markdown = generateMarkdown(answers);  
        await writeFileAsync('./output/READme.md', markdown);
        console.log('Success! Markdown file generated.');
    } catch (err) {
        console.log('Error generating Markdown file: ', err);
    }
    
};


  
  // function call to initialize program
  init();
