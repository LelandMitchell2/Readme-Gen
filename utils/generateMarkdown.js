// this file will generate the markdown for the README file based on the user's responses to the inquirer prompts

// this function will return the license badge based on the user's selection
function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "Apache":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "GPL":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case "BSD":
            return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        default:
            return "";
    }
}

// this function will return the license link based on the user's selection
function renderLicenseLink(license) {
    switch (license) {
        case "MIT":
            return "https://opensource.org/licenses/MIT";
        case "Apache":
            return "https://opensource.org/licenses/Apache-2.0";
        case "GPL":
            return "https://www.gnu.org/licenses/gpl-3.0";
        case "BSD":
            return "https://opensource.org/licenses/BSD-3-Clause";
        default:
            return "";
    }
}

// this function will return the license section of the README based on the user's selection
function renderLicenseSection(license) { 
    return `## License
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}`;
}

// this function will generate the markdown for the README file
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about this project, please contact me:
  
  * GitHub: [${data.github}](https://github.com/${data.github})
  * Email: ${data.email}

`;
}

export default generateMarkdown;
