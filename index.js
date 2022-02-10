const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const createReadMe = require("./generateMarkdown");

const generateFile = util.promisify(fs.writeFile);

// .then((answers) => {
//     writeToFile(answers);
//     console.log(answers);
//   });

// const writeToFile = (answers) => {
//   generateFile ("README.md", createReadMe(answers));
// };
// };

const prompt = () => {
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
          "GNU AGPLv3 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
          "GNU GPLv3 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
          "GNU LGPLv3 [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
          "Mozilla Public License 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
          "Apache License 2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
          "MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
          "Boost Software License 1.0 [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
          "The Unlicense [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
          "Other",
        ],
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
      writeToFile(answers);
      console.log(answers);
    });

  const writeToFile = (answers) => {
    generateFile("README.md", createReadMe(answers));
  };
};

prompt();
