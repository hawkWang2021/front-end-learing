const http = require('http');

// 创建一个 Web 服务器实例
const server = http.createServer();
// 使用服务器实例的 .on 方法, 为服务器绑定一个 request 事件
server.on('request', (req, res) => {
	// 如果有客户端发送请求,则调用这个事件处理函数
	console.log('Somebody visit our web server');
});
