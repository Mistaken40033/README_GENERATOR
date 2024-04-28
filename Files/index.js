const inquirer = require('inquirer');
const fs = require('fs');

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
            message: 'Enter a description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Instructions on how to install:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this project used for?'
        },
        // Add more prompts for license, contributing guidelines, tests, etc.
    ]);

    const { title, description, installation, usage /*, other answers */ } = answers;

    // Generate Markdown content based on user input
    const markdownContent = `
# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
// Add license badge and explanation of license

## Questions
For additional questions, contact [GitHub](https://github.com/mistaken40033) or email: ericab40033@hotmail.com
    `;

    // Write the generated Markdown content to README.md file
    fs.writeFileSync('README.md', markdownContent);

    console.log('README.md generated successfully.');
}

// Invoke the function to generate README.md
generateREADME().catch(error => {
    console.error('An error occurred:', error);
});
