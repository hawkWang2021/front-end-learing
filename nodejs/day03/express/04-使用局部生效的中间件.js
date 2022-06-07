const express = require('express');
const app = express();
// #不使用 app.use() 定义的中间件,即局部生效的中间件
const mw1 = function (req, res, next) {
	console.log('这是局部中间件函数');
	next();
};
const mw2 = function (req, res, next) {
	console.log('这也是局部中间件函数');
	next();
};
// mw1 这个中间件只在"当前路由中生效"
app.get('/', mw1, function (req, res) {
	res.send('Home page');
});
// # mw1 这个中间件不会影响下面的路由 ↓↓↓↓↓
app.get('/user', (req, res) => {
	res.send('User page');
});
// !定义多个局部中间件
// 两种写法都可
// app.get('/goHome', mw1, mw2, (req, res) => {
// 	res.send('Home page');
// });
app.get('/goHome', [mw1, mw2], (req, res) => {
	res.send('Home page');
});
// 启动 Web 服务器
app.listen(80, () => {
	console.log(`server running at http://127.0.0.1`);
});
