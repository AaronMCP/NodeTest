// 写入文件
var fs = require('fs');

console.log('准备写入文件');

fs.writeFile('./lib/file/write.txt', '最佳歌手的感言要慢慢念。', function(err) {
  if(err) {
    console.error(err);
  }

  console.log('数据写入成功！');

  console.log('读取写入数据');
  fs.readFile('./lib/file/write.txt', function(err, data) {
    if(err) console.error(err);
    console.log('异步读取的数据：' + data.toString());
  });
});