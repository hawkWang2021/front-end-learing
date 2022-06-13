// 导入 express 模块
const express = require('express');
// 创建路由对象
const router = express.Router();
// 导入验证数据合法性的中间件
const expressJoi = require('@escook/express-joi');
// 导入验证数据合法性的规则对象
const {
	add_cate_schema,
	delete_cate_schema,
	get_cate_schema,
	update_cate_schema,
} = require('../schema/artcate');
// 导入文章分类的路由处理函数模块
const artcateHandler = require('../router_handler/artcate');
// 获取文章分类列表的路由模块
router.get('/cates', artcateHandler.getArticleCates);
// 添加文章分类的路由模块
router.post(
	'/addcates',
	expressJoi(add_cate_schema),
	artcateHandler.addArticleCates
);
// 删除文章分类的路由模块
router.get(
	'/deletecate/:id',
	expressJoi(delete_cate_schema),
	artcateHandler.deleteCateById
);
// 根据 id 获取文章分类数据的路由模块
router.get(
	'/cates/:id',
	expressJoi(get_cate_schema),
	artcateHandler.getArtCateById
);
// 根据 id 更新文章分类数据的路由模块
router.post(
	'/updatecate',
	expressJoi(update_cate_schema),
	artcateHandler.updateCateById
);
// 向外暴露路由模块
module.exports = router;
