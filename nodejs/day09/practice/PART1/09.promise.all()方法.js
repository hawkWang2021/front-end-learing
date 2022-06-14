import thenFs from 'then-fs';

// 1.定义一个数组，存放3个读文件的异步操作
const promiseArr = [
	thenFs.readFile('./files/1.txt', 'utf-8'),
	thenFs.readFile('./files/2.txt', 'utf-8'),
	thenFs.readFile('./files/3.txt', 'utf-8'),
];
// 2.使用 Promise.all() 方法，将数组中的异步操作合并成一个新的异步操作
Promise.all(promiseArr) // #等待机制：等所有异步操作都完成后，才会执行then方法(因为是同步操作，所以不会出现异步操作的顺序问题)
	.then(([r1, r2, r3]) => {
		console.log(r1, r2, r3);
	})
	.catch((err) => {
		console.log(err.message);
	});
