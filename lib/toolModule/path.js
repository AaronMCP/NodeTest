// path模块 提供了一些用于处理文件路径的小工具

var path = require('path');

// 格式化路径
console.log('格式化路径：' + path.normalize('./lib//toolModule'));

// 连接路径
console.log('连接路径：' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'))

// 转换为绝对路径
console.log('绝对路径 : ' + path.resolve('main.js'));

// 路径中文件的后缀名
console.log('获取后缀名: ' + path.extname('main.js'));