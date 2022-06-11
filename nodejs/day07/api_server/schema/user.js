const joi = require('@hapi/joi');

// string() 值必须是字符串
// alphanum() 值必须是字母或数字
// min(length) 最小长度
// max(length) 最大长度
// required() 值是必填项，不能为 undefined
// pattern(regex) 值必须匹配指定的正则表达式

// 用户名的验证规则
const username = joi.string().alphanum().min(1).max(10).required();
const password = joi
	.string()
	.pattern(/^[\S]{6,12}$/)
	.required();
// 注册和登录表单的验证规则对象
exports.reg_login_schema = {
	body: {
		username,
		password,
	},
};
