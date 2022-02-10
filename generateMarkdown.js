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
  4. [Features](#Features)
  5. [Tests](#Tests)
  6. [Contributing](#Contributing)
  
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  ${answers.license}
  ## Features
  ${answers.features}
  ## Tests
  ${answers.tests}
  ## Contributing
  ${answers.contributing}
  
`;
}

module.exports = generateMarkdown;
