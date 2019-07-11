// 获取文件信息
var fs = require('fs');
fs.stat('./lib/file/file.txt', function(err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log(stats);
  // 是否文件
  console.log(stats.isFile());
  // 是否目录
  console.log(stats.isDirectory());
  // 是否块设备
  console.log(stats.isBlockDevice());
  // 是否字符设备
  console.log(stats.isCharacterDevice());
  // 是否软链接
  console.log(stats.isSymbolicLink());
  // 是否FIFO FIFO是UNIX中国呢一种特殊类型的命令管道。
  console.log(stats.isFIFO());
  // 是否Socket
  console.log(stats.isSocket());
});