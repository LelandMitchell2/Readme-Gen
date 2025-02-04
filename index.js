// these are the dependencies that are required for this file to run
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// this is the array of questions that will be asked to the user
const questions = ["What is the title of your project?", "What is the description of your project?", "What are the installation instructions for your project?", "What is the usage information for your project?", "What are the contribution guidelines for your project?", "What are the test instructions for your project?", "What license would you like to use for your project?", "What is your GitHub username?", "What is your email address?"];

// this is the inquirer prompt that will ask the user the questions and then write the answers to the README file using the generateMarkdown function from the generateMarkdown.js file in the utils folder
inquirer.prompt([
    {
        type: "input",
        message: questions[0],
        name: "title"
    },
    {
        type: "input",
        message: questions[1],
        name: "description"
    },
    {
        type: "input",
        message: questions[2],
        name: "installation"
    },
    {
        type: "input",
        message: questions[3],
        name: "usage"
    },
    {
        type: "input",
        message: questions[4],
        name: "contribution"
    },
    {
        type: "input",
        message: questions[5],
        name: "test"
    },
    {
        type: "list",
        message: questions[6],
        name: "license",
        choices: ["MIT", "Apache", "GPL", "BSD"]
    },
    {
        type: "input",
        message: questions[7],
        name: "github"
    },
    {
        type: "input",
        message: questions[8],
        name: "email"
    }
])
    .then((response) => {
        console.log(response);
        fs.writeFileSync("README1.md", generateMarkdown(response));
    });

// this is the function that initializes the app
function init() {}

// Function call to initialize app
init();
