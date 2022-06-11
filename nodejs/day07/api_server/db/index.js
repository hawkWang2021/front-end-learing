// 导入 mysql 模块
const mysql = require('mysql');
// 创建数据库连接池
const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'my_db_01',
});
module.exports = db;
