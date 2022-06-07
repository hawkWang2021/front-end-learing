const fs = require('fs');
const path = require('path');
fs.writeFile(
	path.join(__dirname, '../files/3.txt'),
	'阿巴阿巴阿巴!😀',
	function (err) {
		if (err) {
			return console.log(`文件写入失败,${err.message}`);
		}
		console.log('文件写入成功');
	}
);
