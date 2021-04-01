// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == "None") {
        return "";
    } 
    else if (license == "Gnu") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    else if (license == "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    else if (license == "Mozilla") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
    else if (license == "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else if (license == "Boost") {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license == "None") {
        return "";
    } 
    else if (license == "Gnu") {
        return "https://choosealicense.com/licenses/gpl-3.0/";
    }
    else if (license == "MIT") {
        return "https://choosealicense.com/licenses/mit/";
    }
    else if (license == "Mozilla") {
        return "https://choosealicense.com/licenses/mpl-2.0/";
    }
    else if (license == "Apache") {
        return "https://choosealicense.com/licenses/apache-2.0/";
    }
    else if (license == "Boost") {
        return "https://choosealicense.com/licenses/bsl-1.0/";
    }
}

module.exports = {
    renderLicenseBadge,
    renderLicenseLink,
  };