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
// 定义 id, nickname, email 的验证规则
const id = joi.number().integer().min(1);
const nickname = joi.string().required();
const email = joi.string().email().required();
// 更新用户信息的验证规则对象
exports.update_userinfo_schema = {
	body: {
		id,
		username,
		nickname,
		email,
	},
};
// 验证重置密码的验证规则对象
exports.update_password_schema = {
	body: {
		id: joi.required(),
		// 使用 password 的验证规则,验证 req.body.oldPwd 的值
		oldPwd: password,
		// 使用 joi.not(joi.ref('oldPwd')).concat(password) 规则，验证 req.body.newPwd 的值
		// 解读：
		// 1. joi.ref('oldPwd') 表示 newPwd 的值必须和 oldPwd 的值保持一致
		// 2. joi.not(joi.ref('oldPwd')) 表示 newPwd 的值不能等于 oldPwd 的值
		// 3. .concat() 用于合并 joi.not(joi.ref('oldPwd')) 和 password 这两条验证规则
		newPwd: joi.not(joi.ref('oldPwd')).concat(password),
	},
};
