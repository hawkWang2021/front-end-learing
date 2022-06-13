const express = require('express');
const router = express.Router();
// 导入解析 formData 格式表单数据的包
const multer = require('multer');
// 导入处理路径的核心模块
const path = require('path');
// 创建 multer 实例对象，通过 dest 属性指定文件的存放路径
const upload = multer({
	dest: path.join(__dirname, '../uploads'),
});
// 导入验证数据合法性的中间件
const expressJoi = require('@escook/express-joi');
// 导入验证数据合法性的规则对象
const { add_article_schema } = require('../schema/article');
// 导入发布新文章的路由处理函数模块
const articleHandler = require('../router_handler/article');
// 发布新文章的路由模块
// upload.single() 是一个局部生效的中间件，用来解析 FormData 格式的表单数据
// 将文章类型的数据，解析并挂载在 res.file 属性中
// 将文本类型的数据，解析并挂载在 res.body 属性中
// 注意：在当前的路由中，先后使用了两个中间件：
//       先使用 multer 解析表单数据
//       再使用 expressJoi 对解析的表单数据进行验证
router.post(
	'/add',
	upload.single('cover_img'),
	expressJoi(add_article_schema),
	articleHandler.addArticle
);
// TODO:根据 Id 删除文章的路由模块
router.get('/delete/:id', (req, res) => {
	res.send('ok');
});
// 获取文章列表的路由模块
router.get('/list', articleHandler.getArticleList);
module.exports = router;
