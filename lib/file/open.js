// 打开文件
var fs = require('fs');

fs.open('./lib/file/file.t', 'r', null, (err, data)=> {
  if (err) {
    return console.error(err);
  }
  console.log('文件打开成功！');
})