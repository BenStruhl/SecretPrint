"use strict";

import { detectOS, printUnix, printWindows } from "funcs";

/** 
 * Prints a file silently to a given printer, 
 * if a printer is not given it will print to 
 * the default printer 
 * @param {string} file
 * @param {string} printer
 */
module.exports = function print(file, printer) {
   var os =  detectOS();
   if (os === 'unix') {
    printUnix(file, printer);   
   } else if(os === 'windows') {
    printWindows(file, printer);
   } else {
    throw new console.error("OS given is not supported");
   }
}