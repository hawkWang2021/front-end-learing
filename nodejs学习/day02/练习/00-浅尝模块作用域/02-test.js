const custom = require('./01-custom');
// 在 02-test.js 模块中,无法访问到 01-custom.js 模块中的私有成员
console.log('custom: ', custom); // {}

// module 对象
console.log(module);
