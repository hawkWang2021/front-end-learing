// 导入 express 模块
const express = require('express');
// 创建 express 实例
const app = express();
// 引入中间件
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// 引入路由
const apiRouter = require('./router/apiRouter');
app.use('/api', apiRouter);
// 启动服务器
app.listen(80, () => {
	console.log('服务器启动成功 http://127.0.0.1');
});
