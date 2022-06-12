// 引入 express 模块
const express = require('express');
// 创建路由对象
const router = express.Router();

// 导入用户路由处理函数模块
const userHandler = require('../router_handler/user');
// 1.导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi');
// 2.导入用户注册和登录表单的验证规则对象
const { reg_login_schema } = require('../schema/user'); // 这里 require('../schema/user') 返回的是一个对象，里有一个 reg_login_schema 属性，这个属性是一个对象，reg_login_schema 里有一个 body 属性，这个属性是一个对象,body 里有一个 username 和 password 属性，这两个属性是 joi 的验证规则对象，这两个属性是必填项。所以 reg_login_schema 需要解构赋值。

// 注册新用户
// 3.在注册新用户的路由中，声明局部中间件，对当前请求中携带的数据进行验证
// 3.1 数据验证通过后，会把这次请求流转给后面的路由处理函数
// 3.2 数据验证失败后，终止后续代码的执行，并抛出一个全局的 ERROR 异常,被全局异常处理器捕获
router.post('/reguser', expressJoi(reg_login_schema), userHandler.regUser);
// 登录
router.post('/login', expressJoi(reg_login_schema), userHandler.login);
module.exports = router;
