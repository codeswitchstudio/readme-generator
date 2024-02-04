const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');
const license = require("./utils/license").license;
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
        message: 'Please input your user story',
    },
    {
        type: 'input',
        name: 'visuals',
        message: 'Please input a link to your visuals',
    },
    {
        type: 'input',
        name: 'visualsLabel',
        message: 'Please input a label to name those visuals',
    },    
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project and mention if there is any tech required?',
    },
    {
        type: 'input',
        message: 'What is your project used for?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which license are you using for this project?',
        name: 'license',
        choices: ['GNU AGPLv3', 'Mozilla', 'Apache', 'MIT', 'Creative Commons'],
    },
    {
        type: "input",
        message: "What have you done to test this project?",
        name: "test",
    },
    {
        type: "input",
        message: "Please type your acknowledgements here",
        name: "acknowledgements",
    },
    {
        type: "input",
        message: "Please type your acknowledgements here",
        name: "acknowledgementsLink",
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    }
])};


// function to write README file
// function writeToFile(fileName, data) {

// }


// function to initialize program
// function init() {}

  // function call to initialize program
//   init();

// const filePath = './output/READme.md';

const init = async () => {
    console.log('hi');
    try {
        const answers = await promptUser();
        const markdown = generateMarkdown(answers);  // Fix here, change 'data' to 'answers'
        await writeFileAsync('./output/created-READme.md' , markdown);  // Fix here, change 'readMeData' to 'markdown'
        console.log('You have successfully generated a Markdown file!');
    } catch (err) {
        console.log('Error generating Markdown file: ', err);
    }
};


  
  // function call to initialize program
  init();

