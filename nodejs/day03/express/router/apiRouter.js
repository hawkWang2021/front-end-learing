const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/get', (req, res) => {
	// 接收请求
	const query = req.query;
	// 把数据响应给客户端
	res.send({
		status: 0,
		msg: 'GET请求成功',
		data: query,
	});
});
apiRouter.post('/post', (req, res) => {
	// 接收请求
	const body = req.body;
	// 把数据响应给客户端
	console.log(body);
	res.send({
		status: 0,
		msg: 'POST请求成功',
		data: body,
	});
});
module.exports = apiRouter;
