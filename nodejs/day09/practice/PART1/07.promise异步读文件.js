// #基于 promise 的方式异步读取文件,
import thenFs from 'then-fs'
import path from 'path'
console.log(path)
// ! .then() 中的失败回调是可选的, 如果没有失败回调, 则会返回一个 Promise 对象, 可以用 .catch() 捕获失败
thenFs.readFile('./files/1.txt', 'utf-8').then(
	(r1) => {
		console.log(r1)
	},
	(err) => {
		console.log(err.message)
	}
)
thenFs.readFile('./files/2.txt', 'utf-8').then(
	(r2) => {
		console.log(r2)
	},
	(err) => {
		console.log(err.message)
	}
)
thenFs.readFile('./files/3.txt', 'utf-8').then(
	(r3) => {
		console.log(r3)
	},
	(err) => {
		console.log(err.message)
	}
)
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename)
console.log('directory-name 👉️', __dirname)

// 👇️ "/home/borislav/Desktop/javascript/dist/index.html"
console.log(path.join(__dirname, '/dist', 'index.html'))
