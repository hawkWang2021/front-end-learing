const express = require('express');
const app = express();

// 导入解析表单数据的中间件 body-parser
const bodyParser = require('body-parser');
// 使用 app.use() 注册中间件
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user/add', function (req, res) {
	// 这里的 req.body 就是 POST 请求的数据
	// 如果没有 body-parser 中间件,则 req.body 为 {}
	// express 内置的 urlencoded 是根据 body-parser 进一步封装的
	console.log(req.body);
	res.send('Got a POST request');
});

app.listen(80, function () {
	console.log('server running at http://127.0.0.1');
});
