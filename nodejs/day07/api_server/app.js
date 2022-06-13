// 导入 express 模块
const express = require('express');
// 导入模块
const joi = require('@hapi/joi');
// 导入配置文件
const config = require('./config');
// 导入解析 token 的中间件
const expressJWT = require('express-jwt');
// 创建 express 的服务器实例
const app = express();
// 导入 cors 中间件,用于解决跨域问题
const cors = require('cors');
// 将 cors 注册为全局中间件
app.use(cors());
// 配置解析表单数据的中间件，注意：这个中间件，只能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }));
// BUG:在使用postman测试获取用户信息的接口时，登录的token字段错误，错误中间件捕捉不到错误信息，不能返回一个身份认证失败的对象，而是报错：res.cc is not a function
// 拍错思路：cc 函数是挂载在一个全局中间件上的一个处理错误信息的函数，找不到这个函数，首先想到的是这个函数定义错误，但是别的接口，可以利用res.cc() 正常返回错误信息，说明函数本身定义的没有问题；然后想到了 cc 函数挂载的全局中间件可能是位置错误，导致 cc 函数还未挂载到 res 上，已经发生了错误，当错误中间件捕捉到错误后，在 res 上访问不到 res.cc 函数,经调试解决;
// DONE:把响应数据的中间件放到 expressJWT 中间件的前面，这样就可以在中间件中捕捉到错误信息，返回错误信息，而不是报错
// 托管静态资源到 public 目录下
app.use('/uploads', express.static('./uploads'));
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
// 挂载expressJWT中间件,使用 .unless 方法，指定不需要验证 token 的路由
// 一定要在路由之前配置解析 Token 的中间件
app.use(
	expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] })
);

// 导入并注册用户路由模块
const userRouter = require('./router/user');
app.use('/api', userRouter);
// 导入并使用用户信息路由模块
const userInfoRouter = require('./router/userinfo');
// 导入并使用文章分类信息路由模块
const artCateRouter = require('./router/artcate');
// 导入并使用文章信息路由模块
const articleRouter = require('./router/article');
// 为文章分类路由模块挂载路由
app.use('/my/article', artCateRouter);
// 为文章路由模块挂载路由
app.use('/my/article', articleRouter);
// 以 /my 开头的接口，都需要验证 token
app.use('/my', userInfoRouter);
// 定义全局错误级别的中间件
app.use((err, req, res, next) => {
	// 捕获数据验证错误
	if (err instanceof joi.ValidationError) {
		return res.cc(err);
	}
	// 捕获身份认证失败的错误
	if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！');
	// 未知错误
	res.cc(err);
});

// 调用 app.listen() ,指定端口号并启动 web 服务器
app.listen(80, () => {
	console.log('api server running at http://127.0.0.1');
});
