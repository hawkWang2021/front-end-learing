const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/userinfo', (req, res) => {
	// 把数据响应给客户端
	res.send({
		status: 0,
		message: '获取用户基本信息成功！',
		data: {
			id: 1,
			username: 'admin',
			nickname: '管理员',
			email: 'admin@itcast.cn',
			user_pic: '一张图',
		},
	});
});
apiRouter.post('/userinfo', (req, res) => {
	// 接收请求
	const body = req.body;
	console.log(body);
	// 把数据响应给客户端
	res.send({
		status: 0,
		message: '修改用户信息成功！',
	});
});
module.exports = apiRouter;
