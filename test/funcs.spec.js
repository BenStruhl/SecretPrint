import { detectOS, printFile } from "../src/funcs";
import { printer } from "../src/printer";

const expect = require("chai").expect;
const assert = require("chai").assert;
const path = require("path");

/** 
 * Checks if a async function returns properly. If so
 * it returns the done function so that mocha know it 
 * returned properly. If not it returns done with an 
 * error.
 * @param {Done} done
 * @param {Function} f
 */
let check = ( done, f ) => {
    try {
      f();
      done();
    } catch( e ) {
      done( e );
    }
  }

describe("funcs", function() {
    it("should have detected the right OS of the platform", function() {
        expect(detectOS()).to.satisfy(function(str) { 
            if(process.platform === "linux" || process.platform === "darwin") {
                return str === "unix";
            }  else if(process.platform  === "win32") {
                return str === "windows";
            } else {
                throw new Error("Unsupported OS Error: Use MacOS, Windows, or Linux");
            }
        });
    });
    it("should throw an error for an unsupported OS", function() {
        if(process.platform != "linux" && process.platform != "darwin" && process.platform != "win32") {
          assert.throw(detectOS, "Unsupported OS Error: Use MacOS, Windows, or Linux");
        }
    });
    it("should not error out on printing a document that exists to a specific printer", function( done ) {
        let detectedOS = detectOS();
        let isUnix = (detectedOS === "unix");
        let absolutePath = path.resolve("../SecretPrint/resources/crab.png");
        printFile(absolutePath, "StruhlsTestPrinter", isUnix);
        setTimeout( function () {
            check(done, function() {
                if(printer.jobs.length != 0)
                    expect(printer.jobs[0].name).to.equal("crab.png");
            });
        }, 100);
    });
});