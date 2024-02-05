// function to generate markdown for README
function generateMarkdown(data) {
  return `   
#  ${data.title}

${data.licenseChoice}

## Contents

1. [Description](#description) 
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Acknowledgements](#acknowledgements)
8. [Questions](#questions)

---
## Description 

${data.description}

---

 + User Story

${data.userStory}

---

 + Screenshots

![${data.visualsLabel}](${data.visuals})

---

## Installation

  ${data.installation}

---

## Usage

  ${data.usage}

---

## License
  This application is covered by the following license:

  ${data.license}

---

## Contributing

To contribute to this application, please follow these guidelines:
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

## Acknowledgements

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