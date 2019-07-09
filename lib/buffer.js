var bin = new Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
var str = bin.toString('utf-8');

var binStr = new Buffer.from('hello', 'utf-8');
// console.log(str, binStr);

var copyBuffer = new Buffer.alloc(bin.length)
var copyBin = bin.copy(copyBuffer);
// console.log(bin, copyBin);

var buf = Buffer.from('runoob', 'ascii');
// console.log(buf)
// console.log(buf.toString('utf-8'));
// console.log(buf.toString('base64'));

const buf2 = Buffer.alloc(256);
len = buf2.write('alan');
// console.log("写入字节数 : " + len); //输出为4

const buf3 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf3);
console.log(json)
const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});

// 输出: <Buffer 01 02 03 04 05>
// console.log(copy);

// var buffer1 = Buffer.from(('my name '));
// var buffer2 = Buffer.from(('is alan'));
// var buffer3 = Buffer.concat([buffer1, buffer2]);
// var buffer4 = Buffer.concat([buffer1,buffer2], 2);
// console.log("buffer3 内容: " + buffer3.toString());
// console.log("buffer4 内容: " + buffer4.toString());


var buffer1 = Buffer.from('ABCDE');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);
console.log(result)
if (result < 0) {
  console.log(buffer1 + " 在 " + buffer2 + "之前");
} else if (result == 0) {
  console.log(buffer1 + " 与 " + buffer2 + "相同");
} else {
  console.log(buffer1 + " 在 " + buffer2 + "之后");
}

var buf11 = Buffer.from('abcdefghijkl');
var buf22 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
buf22.copy(buf11, 2);
console.log(buf11.toString()); //输出abALANghijkl

// buf22.copy(buf11);
// console.log(buf11.toString()); //输出ALANefghijkl