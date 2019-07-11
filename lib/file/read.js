// 读取文件

// fs.read(fd, buffer, offset, length, position, callback)
// 参数说明 
// fd - 通过 fs.open() 方法返回的文件描述符。
// buffer - 数据写入的缓冲区。
// offset - 缓冲区写入的写入偏移量。
// length - 要从文件中读取的字节数。
// position - 文件读取的起始位置， 如果 position 的值为 null， 则会从当前文件指针的位置读取。
// callback - 回调函数， 有三个参数err, bytesRead, buffer， err 为错误信息， bytesRead 表示读取的字节数， buffer 为缓冲区对象。

// 截取文件
// fs.ftruncate(fd, len, callback)
// 参数说明 
// fd - 通过 fs.open() 方法返回的文件描述符。
// len - 文件内容截取的长度。
// callback - 回调函数，参数err。

// 关闭文件
// fs.close(fd, callback)
// 参数说明
// fd - 通过 fs.open() 方法返回的文件描述符。
// callback - 回调函数,参数err。

const fs = require('fs');
const buf = new Buffer.alloc(1024);

console.log('准备打开已存在的文件！');
fs.open('./lib/file/file.txt', 'r+', function(err, fd) {
  if(err) console.error(err);
  console.log('文件打开成功');
  console.log('准备读取文件');

  fs.ftruncate(fd, 10, function(err) {
    if (err) console.error(err);
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes, buffer) {
      if (err) console.error(err);
      console.log(bytes + ' 字节被读取');
      console.log('缓冲区对象为：' + buffer);
      //仅输出读取的字节
      if (bytes > 0) console.log(buf.slice(0, bytes).toString());

      // 关闭文件
      fs.close(fd, function (err) {
        if (err) console.error(err);
        console.log('文件关闭成功');
      });
    });
  });
  
});