// lab test 1 - question 3 - remove.js


const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'logs');


 
 try 
 {
  if (fs.existsSync(logDir)) {
    fs.readdirSync(logDir).forEach(file => {
      fs.unlinkSync(path.join(logDir, file));
      console.log(`delete files...${file}`);
  });
  fs.rmdirSync(logDir);
  }
 }

 catch(err)
 {
    console.error('Error: ' , err);
 }