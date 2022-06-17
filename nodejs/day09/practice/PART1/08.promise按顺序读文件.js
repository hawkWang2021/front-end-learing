// #基于 promise 的方式顺序读取文件,
import thenFs from 'then-fs'
// ! .then() 中的失败会回调是可选的, 如果没有失败回调, 则会返回一个 Promise 对象, 可以用 .catch() 捕获失败
thenFs
	.readFile('./files/11.txt', 'utf-8')
	.catch((err) => {
		console.log(err.message)
	})
	.then((r1) => {
		console.log(r1) // undefined
		return thenFs.readFile('./files/2.txt', 'utf-8')
	})
	.then((r2) => {
		console.log(r2) // 222
		return thenFs.readFile('./files/3.txt', 'utf-8')
	})
	.then((r3) => {
		console.log(r3) // 333
	})
