import thenFs from 'then-fs';

// 1.定义一个数组，存放3个读文件的异步操作
const promiseArr = [
	thenFs.readFile('./files/1.txt', 'utf-8'),
	thenFs.readFile('./files/2.txt', 'utf-8'),
	thenFs.readFile('./files/3.txt', 'utf-8'),
];
Promise.race(promiseArr) // #赛跑机制：只要任何一个异步操作完成，就立即执行下一步的then方法
	.then((result) => {
		console.log(result);
	})
	.catch((err) => {
		console.log(err.message);
	});
