// function to generate markdown for README
function generateMarkdown(data) {
  return `   
#  ${data.title}
  
## Contents

1. [Description](#description) 
- [User Story](#user%20story)
- [Screenshots](#screenshots)
2. [Installation](#installation)
2. [Usage Information] (#usage)
3. [License](#license)
4. [Contribution Guidelines](#contributing)
5. [Authors and Acknowledgments](#acknowledgments)
5. [Tests](#test)
6. [Questions](#questions)

---
## Description

${data.description}

---

## User Story

${data.userStory}

---

## Screenshots:

![${data.visualsLabel}](${data.visuals})

---

## Installation:
  ${data.installation}

---

## Usage:
  ${data.installation}

---

## License
  This application is covered by the following license:

  ${data.license}
  

---

## Contributing to the Application

To contribute to this application, please follow these steps:
1. **Fork the Repository**: Click on the "Fork" button at the top right of the repository page to create your own copy.
2. **Create a Feature Branch**: Switch to a new branch for your feature 
(git checkout -b 'your feature branch name')
3. **Commit your new feature**:  (git commit -m 'describe feature')
4. **Push your branch** (git push)
5. **Create a new Pull Request**

---

## Tests:

  ${data.test}

---

## Authors and Acknowledgments

  ${data.acknowledgements}
  ${data.acknowledgementsLink}

---

## Questions
  For any further questions please contact:
* GitHub Username: <${data.userName}>
* GitHub Email: <${data.userEmail}>
  
  
`;
}

module.exports = generateMarkdown;