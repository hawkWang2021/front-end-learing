// 引入 db 模块
const db = require('../db/index');
// 获取用户信息的路由处理函数
exports.getUserInfo = (req, res) => {
	//  定义 sql 语句,根据 id 查询用户信息,并返回给前端,注意需要排除密码，不要把密码返回给前端
	const sqlSelectUserInfo =
		'SELECT id,username,nickname,email,user_pic FROM ev_users WHERE id=?';
	db.query(sqlSelectUserInfo, req.user.id, (err, results) => {
		// 1.执行 sql 语句失败
		if (err) {
			return res.cc(err);
		}
		// 2.执行 sql 语句成功,但查询的结果条数不等于一
		if (results.length !== 1) {
			return res.cc('获取用户信息失败');
		}
		// 3.获取用户信息成功
		res.send({
			status: 0,
			message: '获取用户信息成功',
			data: results[0],
		});
	});
};
// 更新用户信息的路由处理函数
exports.updateUserInfo = (req, res) => {
	// 定义更新用户信息的 sql 语句
	// 注意: 更新用户信息的时候,需要排除密码和用户名,不要把密码和用户名更新给数据库
	const sqlUpdateUserInfo = 'UPDATE ev_users SET ? WHERE id=?';
	db.query(sqlUpdateUserInfo, [req.body, req.body.id], (err, results) => {
		// 1.执行 sql 语句失败
		if (err) {
			return res.cc(err);
		}
		// 2.执行 sql 语句成功,但影响的行数不等于一
		if (results.affectedRows !== 1) {
			return res.cc('更新用户信息失败');
		}
		// 3.更新用户信息成功
		res.cc('修改用户信息成功', 0);
	});
};
// 重置密码的路由处理函数
exports.updatePassword = (req, res) => {
	// 定义根据 id 查询用户信息的 sql 语句
	const sql = 'select * from ev_users WHERE id = ?';
	// 执行 sql 语句查询用户是否存在
	db.query(sql, req.user.id, (err, results) => {
		// 1.执行 sql 语句失败
		if (err) {
			return res.cc(err);
		}
		// 2.执行 sql 语句成功,但查询的结果条数不等于一，说明用户不存在
		if (results.length !== 1) {
			return res.cc('用户不存在');
		}
		// 引入 bcrypt 模块
		const bcrypt = require('bcryptjs');
		// 判断提交的旧密码是否和数据库中的密码一致
		const compareResult = bcrypt.compareSync(
			req.body.oldPwd,
			results[0].password
		);
		if (!compareResult) {
			return res.cc('原密码错误');
		}

		// 旧密码验证通过，对新密码进行 bcrypt 加密之后，更新到数据库中
		// 定义更新用户密码的 sql 语句
		const sql = 'UPDATE ev_users SET password = ? WHERE id=?';
		// 对新密码进行 bcrypt 加密
		const newPwd = bcrypt.hashSync(req.body.newPwd, 10);
		db.query(sql, [newPwd, req.user.id], (err, results) => {
			// 1.执行 sql 语句失败
			if (err) {
				return res.cc(err);
			}
			// 2.执行 sql 语句成功,但影响行数不等于一，说明用户不存在
			if (results.affectedRows !== 1) {
				return res.cc('更新密码失败');
			}
			// 3.更新用户密码成功
			res.cc('更新密码成功', 0);
		});
	});
};
