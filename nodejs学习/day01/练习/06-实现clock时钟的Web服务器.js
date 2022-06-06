// 1.导入需要的模块
const fs = require('fs');
const path = require('path');
const http = require('http');
// 2.创建基本的 Web 服务器
const server = http.createServer();
server.on('request', (req, res) => {
	// 3.将资源的请求 url 地址映射为文件的存放路径
	let url = req.url;
	// 5.优化资源的请求路径
	let fPath = '';
	if (url === '/') {
		fPath = path.join(__dirname, './clock/index.html');
	} else {
		fPath = path.join(__dirname, './clock', url);
	}
	// 4.读取文件内容并相应给客户端
	let content = '';
	fs.readFile(fPath, 'utf8', (err, data) => {
		if (err) {
			content = '<h1>404 Not found!</h1>';
			return res.end(content);
		}
		content = data;
		res.end(content);
	});
});
server.listen('80', () => {
	console.log('服务器已启动 ==> http://127.0.0.1');
});
