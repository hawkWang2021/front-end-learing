// 初始化 路由 模块
const express = require('express');
// 创建路由对象
const router = express.Router();
// 初始化 路由处理函数 模块
const routerHandler = require('../router_handler/userinfo');
// 导入验证数据合法性的中间件
const expressJoi = require('@escook/express-joi');
// 导入验证数据合法性的规则对象
const {
	update_userinfo_schema,
	update_password_schema,
	update_avatar_schema,
} = require('../schema/user');
// 获取用户的基本信息路由模块
router.get('/userinfo', routerHandler.getUserInfo);
// 更新用户的基本信息路由模块
router.post(
	'/userinfo',
	expressJoi(update_userinfo_schema),
	routerHandler.updateUserInfo
);
// 重置密码的路由模块
router.post(
	'/updatepwd',
	expressJoi(update_password_schema),
	routerHandler.updatePassword
);
// 更新用户头像的路由模块
router.post(
	'/update/avatar',
	expressJoi(update_avatar_schema),
	routerHandler.updateAvatar
);
// 向外暴露路由模块
module.exports = router;
