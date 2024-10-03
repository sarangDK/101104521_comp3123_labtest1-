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
  console.log(fileName);
  i++;

}