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
  7. [Questions] (#Questions)
  
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
  ## Questions

  If you have any further questions about this project, please feel free to reach out on 
[GitHub Account](https://github.com/${answers.github}) or on my [email](mailto:${answers.email}).
  
`;
}

module.exports = generateMarkdown;
