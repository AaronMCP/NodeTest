var fs = require('fs');

/**
 * 适合小文件
 * 拷贝单个文件的内容到另一个单文件中 
 * 会覆盖目标文件的内容
 * @param {*} src 拷贝的单个源文件路径
 * @param {*} dst 拷贝的单个目标文件路径
 */
function copy(src, dst) {
  fs.writeFileSync(dst, fs.readFileSync(src));
}

/**
 * 适合大文件
 * 拷贝单个文件的内容到另一个单文件中
 * 会覆盖目标文件的内容
 * @param {*} src 拷贝的单个源文件路径
 * @param {*} dst 拷贝的单个目标文件路径
 */
function copyBigFile(src, dst) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) {
  copy(argv[0], argv[1]);
}

main(process.argv.slice(2));