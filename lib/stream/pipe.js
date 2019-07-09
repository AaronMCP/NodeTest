// 管道流

var fs = require('fs');

//创建一个可读流
var readStream = fs.createReadStream('./lib/stream/input-pipe.txt');

//创建一个可写流
var writeStream = fs.createWriteStream('./lib/stream/output-pipe.txt');

//管道读写操作
//读取input-pipe.txt文件的内容，并将内容写入到output-pipe.txt中。
readStream.pipe(writeStream);

console.log('程序执行完毕');