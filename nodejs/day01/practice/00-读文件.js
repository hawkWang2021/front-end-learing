const fs = require('fs');
const path = require('path');
fs.readFile(
	path.join(__dirname, '../files/1.txt'),
	'utf-8',
	function (err, dataStr) {
		if (err) {
			return console.log(`文件读取失败,${err.message}`);
		}
		console.log(`文件读取成功,内容是 ${dataStr}`);
	}
);
