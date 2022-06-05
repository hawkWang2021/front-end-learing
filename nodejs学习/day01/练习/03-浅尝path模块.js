// 引入 path 模块
const path = require('path');
// # 注意 ../ 会抵消前面一层的路径
const pathStr = path.join('/a', '/b/c', '../', './d', 'e');
console.log(pathStr); // \a\b\d\e

const pathStr2 = path.join(__dirname, './files/1.txt');
console.log(pathStr2); // d:\codeBinWph\前端代码库\就业班代码库\8.nodejs\day01\练习\files\1.txt

// ! 若涉及到路径拼接的操作,都要使用 path.join()方法 😭

// path.basename() 的使用

const fPath = '/a/b/c/index.html'; // 文件的存放路径

let fullName = path.basename(fPath);
console.log('fullName: ', fullName);

let nameWithoutExt = path.basename(fPath, '.html');
console.log('nameWithoutExt: ', nameWithoutExt);

// path.extname() 的使用, extension ==> 扩展名

const fPath2 = '/a/b/c/index.html';

const fext = path.extname(fPath2);
console.log('fext: ', fext);
