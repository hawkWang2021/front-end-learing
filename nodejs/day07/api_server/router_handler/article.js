// 发布新文章的路由处理函数
// 导入处理路径的 path 模块
const path = require('path');
const db = require('../db/index');
// 添加文章的路由处理函数
exports.addArticle = (req, res) => {
	// 手动用 if 语句判断是否上传了文章封面
	if (!req.file || req.file.fieldname !== 'cover_img') {
		// req.file.fieldname 属性，表示上传的文件的字段名
		return res.cc('文章封面是必选项！');
	}
	// 用一个对象来存储文章信息
	const articleInfo = {
		// 标题,内容,状态,分类Id，利用 req.body 获取
		...req.body, //使用 ... 操作符，将 req.body 对象的所有属性，挂载到 articleInfo 对象上
		// 封面图片，利用 req.file 获取
		cover_img: path.join(__dirname, req.file.fieldname),
		// 文章发布时间
		pub_date: new Date(),
		// 文章作者的Id
		author_id: req.user.id,
	};
	const sql = 'insert into ev_articles set ?';
	db.query(sql, articleInfo, (err, results) => {
		if (err) {
			return res.cc(err);
		}
		if (results.affectedRows !== 1) {
			return res.cc('发布文章失败！');
		}
		res.cc('发布文章成功！', 0);
	});
};

// 获取文章列表的路由处理函数
exports.getArticleList = (req, res) => {
	let pageSize = parseInt(req.query.pagesize); // 每页显示的条数
	let pageCurrent = parseInt(req.query.pagenum); // 当前页码
	let start = (pageCurrent - 1) * pageSize; // 初始位置
	// 根据当前页码和分页尺寸,获取文章局部列表
	// BUG:注意这边连接匹配的是 ev_articles 表的 cate_id 字段，而不是 ev_articles 表的 id 字段
	const sql =
		'SELECT a.Id,title,pub_date,state,b.name AS cate_name  FROM ev_articles AS a LEFT OUTER JOIN ev_article_cate AS b ON a.cate_id = b.Id WHERE author_id = ? LIMIT ?,?'; // LIMIT 关键字可以指定查询结果从哪条记录开始显示，显示多少条记录LIMIT ?,? 第一个 ? 表示选取头几条记录，第二个 ? 表示每页显示的记录数
	db.query(sql, [req.user.id, start, pageSize], (err, results) => {
		if (err) {
			return res.cc(err);
		}
		const data = results;
		// 成功获取文章局部列表后,再进行一次查询,获取文章总数,用于计算总页数
		// 查询文章总数的sql语句
		const sql = 'SELECT COUNT(*) AS total FROM ev_articles WHERE author_id = ?';
		db.query(sql, req.user.id, (err, results) => {
			if (err) {
				return res.cc(err);
			}
			res.send({
				status: 0,
				message: '获取文章列表成功！',
				data,
				total: results[0].total,
			});
		});
	});
};
