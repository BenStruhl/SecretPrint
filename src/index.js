"use strict";

import { detectOS, printFile } from "./funcs";

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
    printFile(file, printer, true);   
   } else if(os === 'windows') {
    printFile(file, printer, false);
   } else {
    throw new console.error("OS given is not supported");
   }
}