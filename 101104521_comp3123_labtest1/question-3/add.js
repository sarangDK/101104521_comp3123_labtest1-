// lab test 1 - question 3 - add.js


const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'logs');


if(!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
else {
  throw new Error('Same directory already exists');
}

let i = 0;
while(i < 10) {
  let fileName = `log${i}.txt`;
  let filePath = path.join(logDir, fileName);
  fs.writeFileSync(filePath, fileName);

  let texts = `this is the text of ${fileName}`;
  fs.writeFileSync(filePath, texts);

  console.log(fileName);
  i++;

}