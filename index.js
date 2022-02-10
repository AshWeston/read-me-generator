const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a short description of your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this application?",
    },
    {
      type: "list",
      name: "license",
      message: "What is the license for this project?",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
        "Other",
      ],
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this application?",
    },
    {
      type: "input",
      name: "features",
      message: "List the features of your project.",
    },
    {
      type: "input",
      name: "tests",
      message: "Give test instructions for your application.",
    },
    {
      type: "input",
      name: "contributing",
      message: "How can users contribute to this project?",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  });
