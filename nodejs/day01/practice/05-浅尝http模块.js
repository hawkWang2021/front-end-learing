const http = require('http');

// 创建一个 Web 服务器实例
const server = http.createServer();
// 使用服务器实例的 .on 方法, 为服务器绑定一个 request 事件
server.on('request', (req, res) => {
	// 如果有客户端发送请求,则调用这个事件处理函数
	// res 是请求对象, 包含了与客户端相框的数据和属性
	// 例如: req.url 是客户端请求的 URL 地址
	// 1. 获取请求的 url 地址
	const url = req.url;
	// 2. 设置默认的内容为 404 Not found
	let content = `<h1>404 Not found!</h1>`;
	if (url === '/' || url === '/index.html') {
		// 3.用户请求首页
		content = `<h1>首页</h1>
		<p>The only thing that matters is what you choose to be now.你当下所做的选择才最为重要。</p>`;
	} else if (url === '/about.html') {
		// 4.用户请求关于页面
		content = `<h1>关于页面</h1>`;
	}
	// req.method 是客户端的请求类型
	//// console.log('Somebody visit our web server');
	//// const str = `阿巴阿巴阿巴your request url is ${req.url},and request method is ${req.method}`;
	//// console.log(str);
	// 5. 为防止出现中文乱码的问题,应设置响应头 Content-Type 的值为 text/html; charSet=utf-8
	res.setHeader('Content-Type', 'text/html; charSet=utf-8');
	// 6. 向客户端发送指定的内容,并结束这次请求的处理过程
	//// res.end(str);
	res.end(content);
});
// 启动服务器
server.listen(80, () => {
	console.log('http server running at http://127.0.0.1');
});
