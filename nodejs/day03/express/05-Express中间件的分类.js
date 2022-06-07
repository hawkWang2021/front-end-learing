//# 中间件的分类
//* 1. 应用级别的中间件
// 通过 app.use(), app.get(), app.post() 等方法定义的中间件
//* 2. 路由级别的中间件
// 绑定到 express.Router() 实例上的中间件
//* 3. 错误级别的中间件
// 通过 app.use(function (err, req, res, next) {...}) 定义的中间件
const express = require('express');
const app = express();
app.get('/', function (req, res) {
	// 抛出一个错误
	throw new Error('服务器内部错误');
});
// 错误级别的中间件
app.use(function (err, req, res, next) {
	console.log('发生了错误:' + err.message);
	// 返回错误给客户端
	res.send(`Error! ${err.message}`);
});
app.listen(80, () => {
	console.log(`server running at http://127.0.0.1`);
});
// *4. Express 内置的中间件
