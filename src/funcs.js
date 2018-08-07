
const fs = require('fs');
const shell = require('node-powershell');

const { exec } = require('child_process');

export const detectOS = () => {
  let platform = process.platform;
  let os = '';
  console.log('detected OS: ' + platform);
  if(platform === 'linux' || platform === 'darwin') {
    os = 'unix';
  } else if(platform === 'win32') {
    os = 'windows';
  } else {
    throw console.error('unsupported OS');
  }
  return os;
}

export const printWindows = (file, printer)  => {
    let finalPath = 'C:\\Windows\\System32\\mspaint.exe /pt ' + file;
    if(printer != null) {
      finalPath +=  + ' \'' +  printer +'\'';
    }
    exec( finalPath, (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        console.log("stdout: " + stdout);
        console.log("stderr: " + stderr);
        return;
      }
    });
    return true;
}

export const printUnix = (file, printer) => {
  // let finalPath = 'C:\\Windows\\System32\\mspaint.exe /pt ' + file;
  // if(printer != null) {
  //   finalPath +=  + ' \'' +  printer +'\'';
  // }
  exec( finalPath, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);
      return;
    }
  });
  return true;
}
