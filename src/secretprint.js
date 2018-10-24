"use strict";

var funcs = require("funcs")

/** 
 * Prints a file silently to a given printer, 
 * if a printer is not given it will print to 
 * the default printer 
 * @param {string} file
 * @param {string} printer
 */
module.exports = function print(file, printer) {
   var os =  funcs.detectOS();
   if (os === "unix") {
    funcs.printFile(file, printer, true);   
   } else if(os === "windows") {
    funcs.printFile(file, printer, false);
   } else {
    throw new console.error("OS given is not supported");
   }
}