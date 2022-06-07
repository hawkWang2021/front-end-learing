const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
	// req 是请求对象
	let url = req.url;
	let method = req.method;
	let str = `你请求的 url 是 ${url},你请求的 method 是${method}`;
	// res 是响应对象
	res.setHeader('Content-Type', 'text/html; charSet=utf-8');
	res.end(str);
});
server.listen(80, () => {
	console.log(`服务器已运行 ==> http://127.0.0.1`);
});
