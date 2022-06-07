// 1. 导入需要的 fs 文件系统模块
const fs = require('fs');
const path = require('path');
// 2. 使用 fs.readFile() 方法，读取素材目录下的 成绩.txt 文件
fs.readFile(
	path.join(__dirname, '../material/成绩.txt'),
	'utf8',
	(err, dataStr) => {
		// 3. 判断文件是否读取失败
		if (err) {
			return console.log(`文件读取失败,错误信息:${err.message}`);
		}
		console.log('文件读取成功');
		// 4. 文件读取成功后，处理成绩数据
		// 方法一:
		// let newDataStr = dataStr.replaceAll('=', ':').split(' ').join('\r\n');
		// 方法二:
		const arr = [];
		dataStr.split(' ').forEach(function (item) {
			arr.push(item.replace('=', ': '));
		});
		const newDataStr = arr.join('\r\n');
		// 5. 调用 fs.writeFile() 方法，将处理后的数据写入到 成绩-ok.txt 文件
		fs.writeFile(
			path.join(__dirname, '../files/成绩-ok.txt'),
			newDataStr,
			(err) => {
				if (err) {
					return console.log(`文件写入失败,错误信息:${err.message}`);
				}
				console.log('文件写入成功');
			}
		);
	}
);
