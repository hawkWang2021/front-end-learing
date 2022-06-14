import db from '../db/index.js';

// 获取所有用户的列表数据
export async function getAllUser(req, res) {
	// db.query() 返回的是一个 Promise 对象，可以使用 async,await 进行简化
	try {
		const [rows] = await db.query('SELECT id,username,nickname FROM ev_users');
		res.send({
			status: 0,
			message: '获取用户列表数据成功！',
			data: rows,
		});
	} catch (error) {
		res.send({
			status: 1,
			message: '获取用户列表数据失败！',
			desc: error.message,
		});
	}
}
