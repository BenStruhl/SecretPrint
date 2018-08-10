import { detectOS, printFile } from "../src/funcs"

const expect = require('chai').expect;

describe('funcs', function() {
    it('should have detected the right OS of the platform', function() {
        expect(detectOS()).to.satisfy(function(str) { 
            return str === 'unix' ||
            str === 'windows';
        });
    });
    it('should not error out on printing a document that exists to a specific printer', function() {
        let isWindows = detectOS() === 'windows' ? true :  false;
        expect(printFile('..\\SecretPrint\\resources\\crab.png', 'test', isWindows))
    })
});