// 导入 express 对象
const express = require('express');
// 导入 session 中间件
const session = require('express-session');
// 创建 express 对象
const app = express();
// // 导入 cors 模块
// const cors = require('cors');
// // 配置 cors
// app.use(cors());
// 创建 session 中间件
app.use(
	session({
		secret: 'keyboard cat', // 对 session id 相关的cookie进行签名
		resave: false, // 是否每次都重新保存 session
		saveUninitialized: true, // 是否保存未初始化的 session
	})
);
// 托管静态页面
app.use(express.static('./pages'));
// 使用中间件
app.use(express.urlencoded({ extended: false })); // 使用 express.urlencoded 解析请求体
// 向 session 中写入数据
app.post('/api/login', (req, res) => {
	// //console.log(req.body);
	// 判断用户提交的登陆信息是否正确
	if (req.body.username !== 'admin' || req.body.password !== 'admin') {
		return res.send({
			status: 1,
			message: '用户名或密码错误',
		});
	}
	req.session.user = req.body; // 将用户信息存储到 session 中
	req.session.islogin = true; // 将登陆状态存储到 session 中

	res.send({
		status: 0,
		message: '登陆成功',
	});
});
// 向 session 中读取数据
// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
	// 判断用户是否登陆
	if (!req.session.islogin) {
		return res.send({
			status: 1,
			message: 'fail',
		});
	}
	res.send({
		status: 0,
		message: 'success',
		username: req.session.user.username,
	});
});
// 退出登录的接口
app.post('/api/logout', (req, res) => {
	req.session.destroy();
	res.send({
		status: 0,
		message: '退出登录成功',
	});
});
// 启动服务器
app.listen(80, () => {
	console.log('服务器启动成功 ==> http://127.0.0.1');
});
