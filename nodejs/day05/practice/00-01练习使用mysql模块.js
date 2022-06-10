const mysql = require('mysql');
const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'my_db_01',
});
// 查询 users 表中的所有数据
// const sqlSelect = 'SELECT * FROM users';
// db.query(sqlSelect, (err, results) => {
// 	if (err) {
// 		return console.log(err.message);
// 	}
// 	console.log(results);
// });

// 插入一条数据
// const data = {
// 	username: '小明',
// 	password: '123456',
// };
// const sqlInsert = 'INSERT INTO users SET ?';
// db.query(sqlInsert, data, (err, results) => {
// 	if (err) {
// 		return console.log(err.message);
// 	}
// 	if (results.affectedRows === 1) {
// 		console.log('插入数据成功');
// 	}
// });

// 更新数据
// const data = {
// 	id: 11,
// 	username: '王小明',
// 	password: '654321',
// };
// const sqlInsert = 'UPDATE users SET ? WHERE id = ?';
// db.query(sqlInsert, [data, data.id], (err, results) => {
// 	if (err) {
// 		return console.log(err.message);
// 	}
// 	if (results.affectedRows === 1) {
// 		console.log('更新数据成功');
// 	}
// });

// 标记删除
// const data = {
// 	id: 10,
// 	status: 1,
// };
// const sqlInsert = 'UPDATE users SET ? WHERE id = ?';
// db.query(sqlInsert, [data, data.id], (err, results) => {
// 	if (err) {
// 		return console.log(err.message);
// 	}
// 	if (results.affectedRows === 1) {
// 		console.log('更新数据成功');
// 	}
// });
