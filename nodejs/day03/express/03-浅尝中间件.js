// ! 中间件函数:The middleware function
const express = require('express');
const app = express();
// next 函数是实现多个中间件连续调用的关键,它表示把流转关系转交个下一个中间件或路由
// # 注意 next() 要在中间件函数中调用,否则会报错
// # 中间件函数的参数:
// # 1.req:请求对象
// # 2.res:响应对象
// # 3.next:控制转交流的函数
const mw = function (req, res, next) {
	// 获取到请求到达服务器的时间戳
	const time = +new Date();
	// 为 req 对象,挂载自定义属性,从而把时间共享给构面的所有路由
	req.startTime = time;
	next();
};

// 全局生效的中间件
app.use(mw);

// # 定义多个全局中间件
app.use(function (req, res, next) {
	console.log('调用第1个中间件函数');
	next();
});
app.use(function (req, res, next) {
	console.log('调用第2个中间件函数');
	next();
});
app.get('/', (req, res) => {
	// # 请求这个路由,会依次触发上述两个全局中间件
	res.send('阿巴阿巴阿巴' + req.startTime);
});

// 启动 Web 服务器
app.listen(80, () => {
	console.log(`server running at http://127.0.0.1`);
});
