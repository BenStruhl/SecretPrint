import { detectOS, printFile } from '../src/funcs'

const expect = require('chai').expect;
const assert = require('chai').assert;

describe('funcs', function() {
    it('should have detected the right OS of the platform', function() {
        expect(detectOS()).to.satisfy(function(str) { 
            if(process.platform === 'linux' || process.platform === 'darwin') {
                return str === 'unix';
            }  else if(process.platform  === 'win32') {
                return str === 'windows';
            } else {
                throw new Error('Unsupported OS Error: Use MacOS, Windows, or Linux');
            }
        });
    });
    it('should throw an error for an unsupported OS', function() {
        if(process.platform != 'linux' && process.platform != 'darwin' && process.platform != 'win32') {
          assert.throw(detectOS, 'Unsupported OS Error: Use MacOS, Windows, or Linux');
        }
    });
    it('should not error out on printing a document that exists to a specific printer');
});