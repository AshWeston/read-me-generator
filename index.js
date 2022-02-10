const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.',
    }
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    }
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',
    }
    {
        type: 'list',
        name: 'license',
        message: 'What is the license for this project?',
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3","Mozilla Public License 2.0","Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense", "Other"
        ]
    }
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  });
