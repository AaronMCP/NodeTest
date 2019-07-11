// os模块提供了一些基本的系统操作函数

var os = require('os');

// 操作系统的默认临时文件夹
console.log(os.tmpdir());

// CPU 的字节序，可能的是 "BE" 或 "LE"
console.log(os.endianness());

// 操作系统的主机名。
console.log(os.hostname());

// 操作系统名
console.log(os.type());

// 编译时的操作系统名
console.log(os.platform());

// 操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。
console.log(os.arch());

// 操作系统的发行版本。
console.log(os.release());

// 操作系统运行的时间，以秒为单位。
console.log(os.uptime());

// 一个包含 1、5、15 分钟平均负载的数组。
console.log(os.loadavg());

// 系统内存总量，单位为字节
console.log(os.totalmem());

// 操作系统空闲内存量，单位是字节。
console.log(os.freemem());

// 一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。
console.log(os.cpus());

// 网络接口列表
console.log(os.networkInterfaces());

// 定义了操作系统的行尾符的常量。
console.log(os.EOL)