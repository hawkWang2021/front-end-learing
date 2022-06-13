const joi = require('@hapi/joi');

// 定义 分类名称 和 分类别名 的验证规则
const name = joi.string().required();
const alias = joi.string().alphanum().required();

//添加分类的验证规则对象
exports.add_cate_schema = {
	body: {
		name,
		alias,
	},
};
// 定义 id 的验证规则
const id = joi.number().integer().min(1);
// 删除分类的验证规则对象
exports.delete_cate_schema = {
	params: {
		id,
	},
};
// 根据 Id 获取分类的验证规则对象
exports.get_cate_schema = {
	params: {
		id,
	},
};
// 根据 Id 更新分类的验证规则对象
exports.update_cate_schema = {
	body: {
		Id: id,
		name,
		alias,
	},
};
