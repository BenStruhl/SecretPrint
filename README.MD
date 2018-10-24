SecretPrint
=========

[![GitHub license](https://img.shields.io/github/license/BenStruhl/SecretPrint.svg)](https://github.com/BenStruhl/SecretPrint/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/BenStruhl/SecretPrint.svg)](https://github.com/BenStruhl/SecretPrint/stargazers)


A small javascript library for printing files silently without a prompt. 

## Installation 

    'npm install secretprint'

## Usage 
require the package and then call it by giving it a file to print and optionally a specific printer. if you do not provide the package with a specific printer, it will print to your default printer. 

    const SecretPrint = require("secretprint")
    SecretPrint("file to print", "name of specific printer (optional)") 

## Tests
run the command below to run all the tests. More will be added in the future to ensure that the file that was sent to be printed was the same file printed by the printer.   

    'npm test'

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.