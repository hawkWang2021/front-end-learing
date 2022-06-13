// 导入 express 模块
const express = require('express');
// 创建路由对象
const router = express.Router();
// 导入文章分类的路由处理函数模块
const artcateHandler = require('../router_handler/artcate');
// 获取文章分类列表的路由模块
router.get('/cates', artcateHandler.getArticleCates);

// 向外暴露路由模块
module.exports = router;
