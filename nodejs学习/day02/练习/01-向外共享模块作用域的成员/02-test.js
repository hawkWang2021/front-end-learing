// MARK:使用 require() 方法导入模块时,导入的结果,永远以 module.exports 指向的对象为准
// 1.导入模块 m1
const m1 = require('./01-m1');
console.log(m1); // { nickname: '小黑', sayHi: [Function: sayHi] }
