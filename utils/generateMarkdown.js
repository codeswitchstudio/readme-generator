// function to generate markdown for README
function generateMarkdown(data) {
  return `   
#  ${data.title}

${data.licenseChoice}

## Contents

1. [Description](#description) 
2. [Installation](#installation)
2. [Usage Information](#usage%20information)
3. [License](#license)
4. [Contribution Guidelines](#contribution%20guidelines)
5. [Tests](#tests)
6. [Authors and Acknowledgments](#authors%20and%20acknowledgment)
7. [Questions](#questions)

---
## Description 

${data.description}

---

## User Story

${data.userStory}

---

## Screenshots

![${data.visualsLabel}](${data.visuals})

---

## Installation

  ${data.installation}

---

## Usage Information

  ${data.usage}

---

## License
  This application is covered by the following license:

  ${data.license}

---

## Contribution Guidelines

To contribute to this application, please follow these steps:
1. **Fork the Repository**: Click on the "Fork" button at the top right of the repository page to create your own copy.
2. **Create a Feature Branch**: Switch to a new branch for your feature 
(git checkout -b 'your feature branch name')
3. **Commit your new feature**:  (git commit -m 'describe feature')
4. **Push your branch** (git push)
5. **Create a new Pull Request**

---

## Tests

  ${data.test}

---

## Authors and Acknowledgments

  ${data.acknowledgements}
  ${data.acknowledgementsLink}

---

## Questions
  For any further questions please contact:
* GitHub : (https://github.com/${data.userName})
* GitHub Email: (${data.userEmail})
  
  
`;
}

module.exports = generateMarkdown;