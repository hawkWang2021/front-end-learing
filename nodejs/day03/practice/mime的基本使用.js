// 参考资料
// 1.https://www.runoob.com/http/http-content-type.html
// 2.https://www.jianshu.com/p/84476bddba87
// 3.https://www.npmjs.com/package/mime

// !发送数据，必须指定Content-Type的文件类型，不同资源对应的Content-Type是不一样的。

const mime = require('mime');
console.log(mime.getType('index.html')); // text/html
