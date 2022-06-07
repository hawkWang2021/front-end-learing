// 1.导入 express
const express = require('express');

// 2.创建 web 服务器
const app = express();

// 4.监听客户端的 GET 和 POST 请求
// * GET请求
// @ 参数1: 客户端请求的 URL 地址
// @ 参数2: 请求对应的处理函数
// @ req:请求对象(包含了与请求相关的属性与方法)
// @ res:响应对象(包含了与响应相关的属性与方法)
app.get('/', (req, res) => {
	res.send('请求成功!');
	// req.query 默认是一个空对象
	// 客户端使用 ?name=zs&age=20 这种查询字符串形式,
	// 发送到服务器的参数可以通过 req.query 对象访问到, 例如:
	// req.query.name
	// req.query.age

	res.send(req.query);
});
app.get('/user', (req, res) => {
	// 向客户端发送 JSON 对象
	// res.send({
	// 	name: 'zs',
	// 	age: 20,
	// 	gender: '男',
	// });
});
// # 获取  URL 中的动态参数
// URL 地址中,可以通富哦 :参数名 的形式,匹配动态参数值
app.get('/user/:id', (req, res) => {
	// req.params 默认是一个空对象
	//  里面存放着通过 :动态匹配到的参数值
	res.send(req.params);
});
// * POST请求
// @ 参数1: 客户端请求的 URL 地址
// @ 参数2: 请求对应的处理函数
// @ req:请求对象(包含了与请求相关的属性与方法)
// @ res:响应对象(包含了与响应相关的属性与方法)

// BUG:解决Cannot set headers after they are sent to the client的方法
// !原因：客户端发出一次请求，服务器给出两次及以上响应
// ?解决方案：清理多余次数响应；每次响应后立马return掉函数
app.post('/user', (req, res) => {
	// 向客户端发送文本内容
	res.send(req.query); // res.send()只能写一个
	console.log(req.query);
});

// 3.使用 app.listen(端口号,启动成功后的回调函数),启动服务器
app.listen(80, () => {
	console.log('服务器已经运行 ==> http://127.0.0.1');
});
