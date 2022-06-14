import fs from 'fs';
// 1.方法的名称为 getFile，它的参数是一个文件路径 fPath,返回值是一个Promise对象。
function getFile(fPath) {
	return new Promise(function (resolve, reject) {
		fs.readFile(fPath, 'utf8', (err, dataStr) => {
			if (err) return reject(err); // 如果读取失败,则调用reject方法
			resolve(dataStr); // 如果读取成功,则调用resolve方法
		});
	});
}
getFile('./files/1.txt')
	.then((r1) => {
		console.log(r1);
	})
	.catch((err) => console.log(err.message));
