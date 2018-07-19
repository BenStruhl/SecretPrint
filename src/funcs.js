
const fs = require('fs');
const shell = require('node-powershell');

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

}


