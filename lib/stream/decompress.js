var fs = require('fs');
var zlib = require('zlib');

//解压input.txt.gz为 input.txt
fs.createReadStream('./lib/stream/input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('./lib/stream/input2.txt'));
console.log('文件解压完成');