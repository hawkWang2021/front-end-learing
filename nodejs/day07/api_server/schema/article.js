// 导入定义验证规则的模块
const joi = require('@hapi/joi');
// 实现思路:通过 express-joi 自动验证 req.body 中的文本数据；通过 if 判断手动验证 req.file 中的文件数据；
// 定义标题，分类Id，内容，发布状态的验证规则
const title = joi.string().required();
const cate_id = joi.number().integer().min(1).required();
const content = joi.string().required().allow('');
const state = joi.string().valid('已发布', '草稿').required();
// 验证发布新文章的验证规则对象
exports.add_article_schema = {
	body: {
		title,
		cate_id,
		content,
		state,
	},
};
// 定义 id 的验证规则
const id = joi.number().integer().min(1).required();
// 验证删除文章的验证规则对象
exports.delete_article_schema = {
	params: {
		id,
	},
};
