// 导入模块
const express = require('express');
const cors = require('cors');
const apiRouter = require('./router/apiRouter');
// 创建 express 实例
const app = express();
// 引入中间件
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/my', apiRouter);
app.listen(80, () => {
	console.log('服务器启动成功！ http://127.0.0.1');
});
