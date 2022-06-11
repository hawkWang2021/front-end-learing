// 1.导入 mysql 模块
const mysql = require('mysql');
// 2. 建立与 mysql 的连接
const db = mysql.createPool({
	host: 'localhost', // 数据库的 IP 地址
	user: 'root', // 登录数据库的账号
	password: 'root', // 登录数据库的密码
	database: 'my_db_01', // 指定要操作哪个数据库
});
// 检测 mysql 模块是否正常工作
// db.query('SELECT 1', (err, results) => {
// 	if (err) return console.log(err.message);
// 	console.log(results); // [ RowDataPacket { '1': 1 } ]
// });
//# 查询 users 表中的所有数据
// db.query('SELECT * FROM users', (err, results) => {
// 	// 查询失败
// 	if (err) return console.log(err.message);
// 	// 查询成功
// 	console.log(results);
// });
// # 查询 users 表中的特定内容
const sql = 'SELECT * FROM users WHERE id = ?';
db.query(sql, 3, (err, results) => {
	if (err) {
		return console.log(err.message);
	}
	console.log(results);
});
// 向 user 表中插入一条数据
// const user = {
// 	username: '王老菊',
// 	password: 'wlj123',
// };
// // 设置待执行的 SQL 语句,其中英文的 ? 表示占位符
// const sqlStr = 'INSERT INTO users (username,password) VALUES (?,?)';
// // 使用数组的形式，依次为 ？ 占位符指定具体的值
// db.query(sqlStr, [user.username, user.password], (err, results) => {
// 	if (err) {
// 		return console.log(err.message); // 失败返回错误信息
// 	}
// 	if (results.affectedRows === 1) {
// 		console.log('插入数据成功');
// 	}
// });

// #插入数据的便捷方法，若数据对象的每个属性和数据表的字段名一致，则可以使用这个方法
// const user1 = {
// 	username: 'Spider-Man2',
// 	password: 'bd1111',
// };
// const sqlStr1 = 'INSERT INTO users SET ?'; // 用 SET ? 来替代 (username,password) VALUES (?,?)';
// // *直接把数据对象当作占位符的值
// db.query(sqlStr1, user1, (err, results) => {
// 	if (err) {
// 		return console.log(err.message); // 失败返回错误信息
// 	}
// 	if (results.affectedRows === 1) {
// 		console.log('插入数据成功');
// 	}
// });

// 更新 user 表中的数据
// const user = {
// 	id: 7,
// 	username: '阿巴阿巴阿巴',
// 	password: '123456',
// };
// const sqlStr = 'UPDATE users SET username=?,password=? WHERE id=?';
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
// 	if (err) {
// 		return console.log(err.message);
// 	}
// 	if (results.affectedRows === 1) {
// 		console.log('更新数据成功');
// 	}
// });

// 更新数据的便捷方式
// #更新数据的便捷方法，若数据对象的每个属性和数据表的字段名一致，则可以使用这个方法
// const user1 = {
// 	id: 7,
// 	username: '洋葱骑士',
// 	password: '000000',
// };
// const sqlStr1 = 'UPDATE users SET ? WHERE id=?';
// db.query(sqlStr1, [user1, user1.id], (err, results) => {
// 	if (err) {
// 		return console.log(err.message);
// 	}
// 	if (results.affectedRows === 1) {
// 		console.log('更新数据成功');
// 	}
// });

// 删除数据
// const sqlStr = 'DELETE FROM users WHERE id=?';
// // 注意：删除数据的时候，必须指定 id 的值
// // 如果 SQL 语句中有多个占位符，则必须指定多个值
// // 如果 SQL 语句中只有一个占位符，则可以直接指定值，可以省略数组
// db.query(sqlStr, 7, (err, results) => {
// 	if (err) {
// 		return console.log(err.message);
// 	}
// 	if (results.affectedRows === 1) {
// 		console.log('删除数据成功');
// 	}
// });

//! 标记删除
// 使用 UPDATE 和 WHERE 来标记删除数据,只更新数据的状态，并没有真正删除
// const sqlStr = 'UPDATE users SET status=1 WHERE id=?';
// db.query(sqlStr, 7, (err, results) => {
// 	if (err) {
// 		return console.log(err.message);
// 	}
// 	if (results.affectedRows === 1) {
// 		console.log('删除数据成功');
// 	}
// });
