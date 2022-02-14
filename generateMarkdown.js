function generateMarkdown(answers) {

  
  return `
  ## Title
  ${answers.title}
  ## Description 
  ${answers.description}
  
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  5. [Tests](#Tests)
  6. [Contributing](#Contributing)
  7. [Questions] (#Questions)
  
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  ${answers.license}
  ## Tests
  ${answers.tests}
  ## Contributing
  ${answers.contributing}
  ## Questions

  If you have any questions, or additional feedback, please feel free to reach out on my 
[GitHub Account: https://github.com/${answers.github}](https://github.com/${answers.github}) or send me an email at [email](mailto:${answers.email}): ${answers.email}.
  
`;
}

module.exports = generateMarkdown;
