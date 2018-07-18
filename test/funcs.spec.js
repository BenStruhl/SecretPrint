import { detectOS } from "../src/funcs"

const expect = require('chai').expect;

describe('funcs', function() {
    it('should have detected the right OS of the platform', function() {
        expect(detectOS()).to.satisfy(function(str) { 
            return str === 'Linux' ||
            str === 'Windows' ||
            str === 'Mac OS';
        });
    });

});