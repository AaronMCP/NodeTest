var fs = require('fs');
var zlib = require('zlib');

//压缩input.txt文件为input.txt.gz
fs.createReadStream('./lib/stream/input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('./lib/stream/input.txt.gz'));

console.log(__dirname, __filename);
console.log('文件压缩完成');