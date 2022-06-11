// 导入 express 模块
const express = require('express');
const joi = require('@hapi/joi');
// 创建 express 的服务器实例
const app = express();
// 导入 cors 中间件
const cors = require('cors');
// 将 cors 注册为全局中间件
app.use(cors());
// 导入解析表单的中间件
app.use(express.urlencoded({ extended: false }));
// ?响应数据的中间件
app.use((req, res, next) => {
	// status 默认值为 1，表示失败的情况
	// err 的值，可能是一个错误对象，也可能是一个错误的描述字符串
	res.cc = function (err, status = 1) {
		res.send({
			status,
			message: err instanceof Error ? err.message : err,
		});
	};
	next();
});

// 导入并注册用户路由模块
const userRouter = require('./router/user');
app.use('/api', userRouter);
// 定义错误级别的中间件
app.use((err, req, res, next) => {
	if (err instanceof joi.ValidationError) {
		return res.cc(err);
	}
	// 未知错误
	res.cc(err);
});

// 调用 app.listen() ,指定端口号并启动 web 服务器
app.listen(80, () => {
	console.log('api server is running at http://127.0.0.1');
});
