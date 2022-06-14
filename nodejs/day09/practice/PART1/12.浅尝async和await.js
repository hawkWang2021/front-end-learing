import thenFs from 'then-fs';
console.log('A');
// 按照顺序读取文件 1,2,3 的内容
async function getAllFile() {
	console.log('B'); // 同步执行,下面的代码都是异步执行
	const r1 = await thenFs.readFile('./files/1.txt', 'utf8');
	console.log(r1);
	const r2 = await thenFs.readFile('./files/2.txt', 'utf8');
	console.log(r2);
	const r3 = await thenFs.readFile('./files/3.txt', 'utf8');
	console.log(r3);
	console.log('D');
}

getAllFile();
console.log('C');
// !注意事项
// #1.如果在 function 中使用了 await,那么这个 function 必须是 async function
// #2.在 async function 中,第一个 async 之前的代码会永不执行, await 之后的代码会异步执行
