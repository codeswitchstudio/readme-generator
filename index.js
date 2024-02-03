const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');
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
        name: 'Table of Contents',
        message: 'What are the sections of your project?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        message: 'What is your project used for?',
        name: 'Usage',
        
    },
    {
        type: 'list',
        message: 'Which license are you using for this project?',
        name: 'license',
        choices: ['MIT', 'Creative Commons', 'Mozilla', 'Apache', 'GNU' ],
    },
    {
        type: 'input',
        message: 'Any guidelines for contributing to this project?',
        name: 'contribution', 
    },
    {
        type: "input",
        message: "What have you done to test this project?",
        name: "test",
    },
    {
        type: "input",
        message: "What have you done to test this project?",
        name: "test",
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
}

// const writeFileAsync = util.promisify(fs.writeFile);

// function to initialize program
// function init() {
// }



// const filePath = './output/READme.md';

// const init = async () => {
//     console.log('hi');
//     try {
//       const answers = await promptUser();
//       const markdown = generateMarkdown(answers);
//       await writeFileAsync('READme.md', md);
//       console.log('You have successfully generated a Markdown file!');
//     } catch (err) {
//       console.log('Error generating Markdown file: ', err);
//     }
//   };

//   promptUser()
//   .then((answers) => writeFileAsync('./output/READme.md', generateMarkdown(data)))
//   .then(() => console.log('Successfully wrote a Markdown file!'))
//   .catch((err) => console.error('Error writing Markdown file:', err));


// function call to initialize program
init();


