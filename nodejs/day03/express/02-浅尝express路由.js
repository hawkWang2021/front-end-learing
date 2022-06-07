// # Express路由的格式:
// app.METHOD(PATH,HANDLER)

// 1.在 Express 中最简单的使用路由方式:直接把路由挂载在 app 上
const express = require('express');
// 创建 Web 服务器,命名为 app
const app = express();

// 挂载路由
app.get('/', (req, res) => {
	res.send('GET Request');
});
app.post('/', (req, res) => {
	res.send('POST Request');
});

//! 2.为了方便对路由进行模块化管理, Express 不建议将路由直接挂载到 app 上,而是推荐将路由抽离为单独的模块

// 导入路由模块
const userRouter = require('./router/user');

// 使用 app.use() 注册路由模块
// app.use(router);

// 使用 app.use() 注册路由模块,并添加同意的访问前缀 /api

app.use('/api', userRouter);

// 启动 Web 服务器
app.listen(80, () => {
	console.log(`server running at http://127.0.0.1`);
});
