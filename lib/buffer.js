var bin = new Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
var str = bin.toString('utf-8');

var binStr = new Buffer.from('hello', 'utf-8');
console.log(str, binStr);

var copyBuffer = new Buffer.alloc(bin.length)
var copyBin = bin.copy(copyBuffer);
console.log(bin, copyBin);