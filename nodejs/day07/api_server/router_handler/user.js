// 导入模块
const db = require('../db/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // 用于生成 Token 字符串的秘钥
const config = require('../config');
exports.regUser = (req, res) => {
	// 接收表单数据
	const userinfo = req.body;
	// 判断数据是否合法
	// if (!userinfo.username || !userinfo.password) {
	// 	return res.send({
	// 		status: 1,
	// 		message: '用户名或密码不能为空',
	// 	});
	// }
	// 定义 查询用户的 SQL 语句
	const sqlSelectUser = 'SELECT * FROM ev_users WHERE username=?';
	// 执行 SQL 语句并根据结果判断用户名是否被占用
	db.query(sqlSelectUser, userinfo.username, (err, results) => {
		// 执行 SQL 语句出错
		if (err) {
			// return res.send({
			// 	status: 1,
			// 	message: '数据库错误' + err.message,
			// });
			return res.cc(err);
		}
		// 用户名已被占用
		if (results.length > 0) {
			// return res.send({
			// 	status: 1,
			// 	message: '用户名已被占用,请更换用户名',
			// });
			return res.cc('用户名已被占用, 请更换用户名');
		}
		// 对密码进行 bcrypt 加密
		userinfo.password = bcrypt.hashSync(userinfo.password, 10);
		// 定义插入用户的 SQL 语句
		const sqlInsert = 'INSERT INTO ev_users SET ?';
		// 执行 SQL 语句
		db.query(
			sqlInsert,
			{ username: userinfo.username, password: userinfo.password },
			(err, results) => {
				// 执行 SQL 语句出错
				if (err) {
					// return res.send({
					// 	status: 1,
					// 	message: '数据库错误' + err.message,
					// });
					return res.cc(err);
				}
				// 判断影响行数是否为1，若 results.affectedRows !== 1 则表示注册失败
				if (results.affectedRows !== 1) {
					// return res.send({
					// 	status: 1,
					// 	message: '注册失败,请重新尝试',
					// });
					return res.cc('注册失败,请重新尝试');
				}
				res.cc('注册成功', 0);
			}
		);
	});
};
exports.login = (req, res) => {
	const userinfo = req.body;
	const sqlSelectUser = 'select * from ev_users where username=?';
	db.query(sqlSelectUser, userinfo.username, (err, results) => {
		// 执行 SQL 语句出错
		if (err) {
			return res.cc(err);
		}
		// 执行 SQL 语句成功，但查询到的数据条数为0，说明用户名不存在
		if (results.length === 0) {
			return res.cc('用户名不存在');
		}
		// 对比用户输入的密码和数据库中的密码是否一致
		const compareResult = bcrypt.compareSync(
			userinfo.password,
			results[0].password
		);
		// 若 compareResult 为 false，则表示密码不正确
		if (!compareResult) {
			return res.cc('登录失败');
		}
		// 登陆成功，生成 Token 字符串
		// 剔除密码和头像的值, user 中只保留 id,username,nickname,email
		const user = { ...results[0], password: '', user_pic: '' }; // # 扩展运算符的运用，将 results[0] 中的 password 和 user_pic 属性删除
		// console.log('user: ', user);
		// 生成 Token 字符串
		const token = jwt.sign(user, config.jwtSecretKey, {
			expiresIn: config.jwtExpiresIn, // token 有效期为 10 小时
		});
		// 将 token 字符串响应给给客户端
		res.send({
			status: 0,
			message: '登录成功',
			// 为方便客户端获取 token，在服务端上直接拼接 bearer 的前缀
			token: 'Bearer ' + token,
		});
	});
};
