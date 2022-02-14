function generateMarkdown(answers) {
  let licenseOption = `${answers.license}`;
  let badge;
  if (
    licenseOption ===
    "GNU AGPLv3 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  ) {
    badge =
      "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  }

  if (
    licenseOption ===
    "GNU GPLv3 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  ) {
    badge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }

  if (
    licenseOption ===
    "GNU LGPLv3 [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  ) {
    badge =
      "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  }

  if (
    licenseOption ===
    "Mozilla Public License 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  ) {
    badge =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  if (
    licenseOption ===
    "Apache License 2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  ) {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (
    licenseOption ===
    "MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  ) {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (
    licenseOption ===
    "Boost Software License 1.0 [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  ) {
    badge =
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
  if (
    licenseOption ===
    "The Unlicense [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  ) {
    badge =
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
  if (licenseOption === "Other") {
    badge = "";
  }

  return ` 

  ${badge}
  ## ${answers.title}
  ## Description 
  ${answers.description}
  
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  5. [Tests](#Tests)
  6. [Contributing](#Contributing)
  7. [Questions](#Questions)
  
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License

  This project operates under the following license:
  
  ${answers.license}
  ## Tests
  ${answers.tests}
  ## Contributing
  ${answers.contributing}
  ## Questions

  If you have any questions, or additional feedback, please feel free to reach out on my 
GitHub Account: (https://github.com/${answers.github}) or send me an email at ${answers.email}.
  
`;
}

module.exports = generateMarkdown;
