// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
  if (license === 'None'){ //verifies if there is a license selected
    licenseBadge = ''; // If "None" is selected then it returns an empty string 
  } else{ //otherwise it will return the badge image
    licenseBadge = `[![license](https://img.shields.io/badge/license-${license}-blue)]`;
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  if (license === 'None'){ //verifies if there is a license selected
    licenseLink = ''; // If "None" is selected then it returns an empty string
  } else{ //otherwise it will return the link for the license information
    licenseLink = `(https://opensource.org/licenses/${license})`;
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let LicenseSection;
  
  if (license === 'None'){ //verifies if there is a license selected
    LicenseSection = ''; // If "None" is selected then it returns an empty string
  } else{ //otherwise it will return the license section for the ReadMe
    LicenseSection = `## Licensing:\n\n\r${renderLicenseBadge(license)}${renderLicenseLink(license)}
    `;
}
return LicenseSection;
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  //returns a string with the markdown format usind the data from the parameter 'data'
  return `# ${data.title}
  ${renderLicenseSection(data.license)}

  ## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:
${data.license}

## Contributing:
${data.contribution}

## Tests:
${data.tests}

## Questions:
- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

export default generateMarkdown;
