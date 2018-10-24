import { printer } from "../src/printer";

var path = require("path");
var expect = require('chai').expect;
var secretPrint = require("../src/index");

describe('secretPrint', function() {
    it('should not error out when printing a file to a specific printer', function() {
        secretPrint(path.resolve("../SecretPrint/resources/crab.png"), "SecretPrintTest")
        // if(printer.jobs.length != 0)
        //     expect(printer.jobs[0].name).to.equal("crab.png");
    });
});