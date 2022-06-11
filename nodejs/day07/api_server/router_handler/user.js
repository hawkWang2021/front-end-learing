// 导入模块
const db = require('../db/index');
const bcrypt = require('bcryptjs');
exports.regUser = (req, res) => {
	// 接收表单数据
	const userinfo = req.body;
	console.log(userinfo);
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
		// 注册成功
		res.send({
			status: 0,
			message: '注册成功！',
		});
	});
};
exports.login = (req, res) => {
	res.send('login success!');
};
