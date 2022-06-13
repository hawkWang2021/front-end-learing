// 导入 db 模块
const db = require('../db/index');
// 获取文章分类列表数据的路由处理函数
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
// 添加文章分类的路由处理函数
exports.addArticleCates = (req, res) => {
	// 判断用户提交的名称和别名是否被占用
	const sql = 'SELECT * FROM ev_article_cate WHERE name=? OR alias=?';
	db.query(sql, [req.body.name, req.body.alias], (err, results) => {
		// 执行 SQL 语句出错
		if (err) {
			return res.cc(err);
		}
		// 执行成功，根据返回结果来告诉用户是否添加成功
		// 分类名称和别名都被占用
		if (results.length === 2) {
			return res.cc('分类名称和别名都已经被占用,请更换后重试！');
		}
		if (
			results.length === 1 &&
			results[0].name === req.body.name &&
			results[0].alias === req.body.alias
		) {
			return res.cc('分类名称和别名都已经被占用,请更换后重试！');
		}
		// 分类名称被占用
		if (results.length === 1 && results[0].name === req.body.name) {
			return res.cc('分类名称已经被占用,请更换后重试！');
		}
		// 分类别名被占用
		if (results.length === 1 && results[0].alias === req.body.alias) {
			return res.cc('分类别名已经被占用,请更换后重试！');
		}
		// 分类名称和别名都没有被占用，可以添加
		const sql = 'INSERT INTO ev_article_cate SET ?';
		db.query(sql, req.body, (err, results) => {
			// 执行 SQL 语句出错
			if (err) {
				return res.cc(err);
			}
			// 执行成功，但影响行数不为1，表示添加失败
			if (results.affectedRows !== 1) {
				return res.cc('添加文章分类失败');
			}
			// 添加成功，返回结果
			res.cc('添加文章分类成功', 0);
		});
	});
};
// 删除文章分类的路由处理函数
exports.deleteCateById = (req, res) => {
	// 获取要删除的分类的 id
	const id = req.params.id;
	// 不允许删除 id 为 1和2 的分类
	if (id === '1' || id === '2') {
		return res.cc('不允许删除最新和科技这两个文章分类!');
	}
	const sql = 'UPDATE ev_article_cate SET is_delete=1 WHERE id=?';
	db.query(sql, [id], (err, results) => {
		if (err) {
			return res.cc(err);
		}
		if (results.affectedRows !== 1) {
			return res.cc('删除文章分类失败');
		}
		res.cc('删除文章分类成功', 0);
	});
};
// 根据 id 获取文章分类数据的路由处理函数
exports.getArtCateById = (req, res) => {
	// 获取要获取的分类的 id
	const id = req.params.id;
	const sql = 'SELECT * FROM ev_article_cate WHERE id=?';
	db.query(sql, id, (err, results) => {
		if (err) {
			return res.cc(err);
		}
		if (results.length !== 1) {
			return res.cc('获取文章分类数据失败！');
		}
		res.send({
			status: 0,
			message: '获取文章分类成功',
			data: results[0],
		});
	});
};
// 根据 id 更新文章分类数据的路由处理函数
exports.updateCateById = (req, res) => {
	// 判断用户提交的名称和别名是否被占用
	const sql =
		'SELECT * FROM ev_article_cate WHERE id<>? AND (name=? OR alias=?)'; // 搜索一下除了自己以外有么有重名
	db.query(
		sql,
		[req.body.Id, req.body.name, req.body.alias],
		(err, results) => {
			// 执行 SQL 语句出错
			if (err) {
				return res.cc(err);
			}
			// 执行成功，根据返回结果来告诉用户是否添加成功
			// 分类名称和别名都被占用
			if (results.length === 2) {
				return res.cc('分类名称和别名都已经被占用,请更换后重试！');
			}
			if (
				results.length === 1 &&
				results[0].name === req.body.name &&
				results[0].alias === req.body.alias
			) {
				return res.cc('分类名称和别名都已经被占用,请更换后重试！');
			}
			// 分类名称被占用
			if (results.length === 1 && results[0].name === req.body.name) {
				return res.cc('分类名称已经被占用,请更换后重试！');
			}
			// 分类别名被占用
			if (results.length === 1 && results[0].alias === req.body.alias) {
				return res.cc('分类别名已经被占用,请更换后重试！');
			}
			const sql = 'UPDATE ev_article_cate SET ? WHERE id=?';
			db.query(sql, [req.body, req.body.Id], (err, results) => {
				if (err) {
					return res.cc(err);
				}
				if (results.affectedRows !== 1) {
					return res.cc('更新文章分类数据失败！');
				}
				res.cc('更新文章分类数据成功', 0);
			});
		}
	);
};
