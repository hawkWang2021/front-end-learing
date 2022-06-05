const fs = require('fs');
fs.writeFile(__dirname + '/文件夹/3.txt', '阿巴阿巴阿巴😀', function (err) {
	if (err) {
		return console.log(`文件写入失败,${err.message}`);
	}
	console.log('文件写入成功');
});
