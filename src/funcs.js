const { exec } = require("child_process");

/** 
 * returns the detected OS of the system. if the platform is linux,
 * the returned value will be "unix". else if its windows, it will return
 * a likewise value. Else it will throw an Unsupported OS error 
 */

export const detectOS = () => {
  let platform = process.platform;
  let os = "";
  if(platform === "linux" || platform === "darwin") {
    os = "unix";
  } else if(platform === "win32") {
    os = "windows";
  } else {
    throw new Error("Unsupported OS Error: Use MacOS, Windows, or Linux");
  }
  return os;
}

/** 
 * Prints a file silently to a given printer, 
 * if a printer is not given it will print to 
 * the default printer. determines which kind of
 * script to run off of the value of isUnix.
 *  
 * @param {string} file
 * @param {string} printer
 * @param {boolean} isUnix
 */

export const printFile = (file, printer, isUnix)  => {
  let finalPath = "";
  if(!isUnix) {
    finalPath = "C:\\Windows\\System32\\mspaint.exe /pt " + "\"" + file +"\"";
    if(printer != null) {
      finalPath = finalPath  + " \"" +  printer +"\"";
    }
  } else { 
    finalPath = "lpr " + "\"" + file + "\"";
    if(printer != null) {
      finalPath =  finalPath +  " -P \"" + printer + "\"";
    }
  } 
    exec( finalPath, (err, stdout, stderr) => {
      if (err) {
        // node couldn"t execute the command
        console.log("stdout: " + stdout);
        console.log("stderr: " + stderr);
        throw new error()
      }
    });
  
}