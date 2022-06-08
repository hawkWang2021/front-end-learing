// 1.导入需要的模块
const fs = require('fs');
const path = require('path');
const http = require('http');
const mime = require('mime');
// 2.创建基本的 Web 服务器
const server = http.createServer();
server.on('request', (req, res) => {
	// 3.将资源的请求 url 地址映射为文件的存放路径
	let url = req.url;
	// 5.优化资源的请求路径
	let fPath = '';
	if (url === '/') {
		fPath = path.join(__dirname, '../clock/index.html');
	} else {
		fPath = path.join(__dirname, '../clock', url);
	}
	// 4.读取文件内容并相应给客户端
	let content = '';
	// BUG:未识别 .css 文件,需要添加 nodejs 读取文件后缀的逻辑，把对应的 Content-Type 设置成自动获取的，不能写死
	// 可以使用 mime 包设定 mime 类型
	fs.readFile(fPath, 'utf8', (err, data) => {
		// 需要动态设置 mime 类型,不能写死
		// 方法一: 使用 path 包,有缺陷
		// res.setHeader(
		// 	'Content-Type',
		// 	`text/${path.extname(fPath).replace('.', '')}; charSet=utf-8`
		// );
		// console.log(path.extname(fPath).replace('.', ''));
		// 方法二: 使用 mime 包
		res.setHeader('Content-Type', `${mime.getType(fPath)}; charSet=utf-8`);

		if (err) {
			res.setHeader('Content-Type', `text/html; charSet=utf-8`);
			content = `<h1>404 Not found! ${err.message}</h1>`;
			return res.end(content);
		}
		content = data;
		res.end(content);
	});
});
// 启动服务器
server.listen(80, () => {
	console.log('服务器已启动 ==> http://127.0.0.1');
});
