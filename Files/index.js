const inquirer = require('inquirer');
const fs = require('fs').promises;

async function generateREADME() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install this project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this project?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contribute to this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How do you run tests for this project?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None']
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ]);

    const { title, description, installation, usage, contributing, tests, license, githubUsername, email } = answers;

    const markdownContent = `
# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under the ${license} license.

## Contributing
${contributing}

## Tests
${tests}

## Questions
For additional questions, contact [@${githubUsername}](https://github.com/${githubUsername}) or email: ${email}
    `;

    try {
        await fs.writeFile('README.md', markdownContent);
        console.log('README.md generated successfully.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Invoke the function to generate README.md
generateREADME();
