const mysql = require('mysql');
const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'my_db_02',
});

// -- 01 查询 所有学生 的信息并按出生年月进行排序
// const orderItem = 'age';
// const sqlStr1 = 'SELECT * FROM student ORDER BY ?';
// db.query(sqlStr1, orderItem, (err, results) => {
// 	if (err) {
// 		return console.log(err.message);
// 	}
// 	console.table(results);
// });

// -- 02 查询男生、女生人数
// let queryItem = {
// 	sex: '女',
// };
// const sqlStr2 = 'SELECT COUNT(*) AS count FROM student WHERE ?';
// db.query(sqlStr2, queryItem, (err, results) => {
// 	if (err) {
// 		return console.log(err.message);
// 	}
// 	console.table(results);
// });
// -- 03 查询名字为张三的老师
// -- SELECT name FROM teacher where NAME='张三'
// -- 04 查询成绩大于60的学生
// -- SELECT * FROM student WHERE id in (SELECT id FROM sc WHERE core>='60' GROUP BY id)
// -- 05 查询课程编号为01并且成绩大于80的学生
// -- select * from student WHERE id in(select id from sc where core>= '80' AND sid='01')
// -- 06 删除id=1的学生
// -- DELETE from student where id = '01'
// -- 07 更新id=06的学生成绩为100分
// -- UPDATE sc set core=100 WHERE id='06'
// -- 08 统计成绩>80的人数
// SELECT COUNT(*) FROM student WHERE id in (SELECT id FROM sc WHERE core>='80' GROUP BY id)
const queryItem = {
	core: '80',
};
const sqlStr8 =
	'SELECT COUNT(*) FROM student WHERE id in (SELECT id FROM sc WHERE core >= ? GROUP BY id)';
db.query(sqlStr8, queryItem.core, (err, results) => {
	if (err) {
		return console.log(err.message);
	}
	console.table(results);
});
