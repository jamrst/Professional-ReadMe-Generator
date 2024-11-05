// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js'

// TODO: Create an array of questions for user input
const questions = [];


inquirer.prompt([
    {
        //prommpts for the information of the project and assigns it to the attributes of the response parameter
        type: 'input',
        message: 'What is the Title of your project?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Please share a Description for your project: ',
        name: 'description',
    },

    {
        type: 'input',
        message: 'What are Instalations Instructions: ',
        name: 'installation',
    },

    {
        type: 'input',
        message: 'Please share the Usage Information: ',
        name: 'usage',
    },    

    {
        type: 'input',
        message: 'Please share the Contribution Guidelines: ',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please share the Test Instructions: ',
        name: 'tests',
    },

    {
        type: 'list',
        message: 'Please choose the License you are using: ',
        choices: ['ISC','Apache', 'GPL', 'GPL', 'MIT', 'BSD', 'None' ],
        name: 'license',
    },

    {
        type: 'input',
        message: 'Please enter your GitHub name: ',
        name: 'github',
    },

    {
        type: 'input',
        message: 'Please enter your email: ',
        name: 'email',
      },
    
  ])
  .then((response) =>{
    //the response parameter is passed to the generateMarkdown funtion from the generateMarkdown.js module tu be used as the data for the data for the Markdown string. 
    const readmeGen = generateMarkdown(response);
    //calls the writeToFile function to generate the '.md' file appending the string from the generateMarkdown function.
    writeToFile('proReadMe.md', readmeGen);
  }

  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
      );
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
