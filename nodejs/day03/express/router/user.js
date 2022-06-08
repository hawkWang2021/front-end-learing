// #Express路由的格式:
// app.METHOD(PATH,HANDLER)

// 1.导入 express
const express = require('express');

// 2.创建路由对象
let router = express.Router();

// 3.挂载获取用户列表的路由
router.get('/user/list', (req, res) => {
	res.send('GET user list.');
});

// 4.挂载添加用户的路由
router.post('/user/add', (req, res) => {
	res.send('Add new user.');
});

// 5.向外导出路由对象
module.exports = router;
