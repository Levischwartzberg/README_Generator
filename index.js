const inquirer = require("inquirer");
const fs = require("fs");
const license = require("./generateLicense");

const questions = [
    {
        type: 'input',
        message: 'Welcome to this README generator application. Enter in the title of your project to get started.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter in a description for your project. You can always edit the file later.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter the installation instructions for this project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter in the usage information for this project (e.g. how the project is expected to be used).',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter in any contribution guidlines.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter in any test instructions.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter in any credits to collaborators, or other resources you may have used.',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Choose the type of license badge for the project.',
        name: 'license',
        choices: ["None", "Gnu", "MIT", "Mozilla", "Apache", "Boost"]
    },
    {
        type: 'input',
        message: 'Enter in your Github username.',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter in your email address',
        name: 'email',
    },
]

const generateREADME = (response) => {
    let READMEtext = 
`# ${response.title}

## Description
${response.description}

## Table of Contents
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
- [Contribute](#how-to-contribute)
- [Tests](#tests)
## License
This project is licensed with ${license.renderLicenseText(response.license)} <br>
${license.renderLicenseBadge(response.license)} <br>
${license.renderLicenseLink(response.license)}
## Installation
${response.installation}
## Usage
${response.usage}
## Credits
${response.credits}
## Questions
[<img src="https://img.shields.io/badge/LeviSchwartzberg-Developer-green">](https://shields.io/) <br>
Feel free to reach out via email with any questions. <br>
Find me on Github: ${response.github} <br>
Email: ${response.email}
## How to Contribute
${response.contribution}
## Tests
${response.tests}
`
    return READMEtext
}

inquirer
    .prompt(questions)
    .then( (response) =>
        {
        newHtml = generateREADME(response);
        fs.writeFile('README.md', newHtml, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
    }
    )

