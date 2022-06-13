// 导入 mysql 模块
const mysql = require('mysql');
// 创建数据库连接池
const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'my_db_01',
});
// 获取文章分类列表数据的处理函数
exports.getArticleCates = (req, res) => {
	// 根据分类的状态，获取所有未被删除的数据
	// is_delete 为 0 表示没有被 标记为删除 的数据
	const sql = 'SELECT * FROM ev_article_cate WHERE is_delete=0 ORDER BY id ASC';
	db.query(sql, (err, results) => {
		// 执行 SQL 语句出错
		if (err) {
			return res.cc(err);
		}
		// 执行成功，返回结果
		res.send({
			status: 0,
			message: '获取文章分类列表成功',
			data: results,
		});
	});
};
