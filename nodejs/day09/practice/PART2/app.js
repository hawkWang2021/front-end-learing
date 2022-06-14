// 使用 ES6 的默认导入语法
import express from 'express';
const app = express();
import userRouter from './router/user_router.js';
// 挂载用户路由模块
app.use('/api', userRouter);
app.listen(80, () => {
	console.log('server running at http://127.0.0.1');
});
