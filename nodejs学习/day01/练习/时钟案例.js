const fs = require('fs');
const path = require('path');
const regStyle = /<style>[\s\S]*<\/style>/gi;
const regScript = /<script>[\s\S]*<\/script>/gi;
fs.readFile(
	path.join(__dirname, './素材/index.html'),
	'utf8',
	(err, dataHTML) => {
		if (err) {
			return `读入文件失败, ${err.message}`;
		}
		console.log('读入文件成功');
		resolveCSS(dataHTML);
		resolveJs(dataHTML);
		resolveHTML(dataHTML);
	}
);
function resolveCSS(dataHTML) {
	let arr = regStyle.exec(dataHTML);
	let dataStr = arr[0].replace('<style>', '').replace('</style>', '');
	fs.writeFile(path.join(__dirname, './clock/index.css'), dataStr, (err) => {
		if (err) {
			return `读写文件失败, ${err.message}`;
		}
		console.log('写入 css 文件成功');
	});
}
function resolveJs(dataHTML) {
	let arr = regScript.exec(dataHTML);
	let dataStr = arr[0].replace('<script>', '').replace('</script>', '');
	fs.writeFile(path.join(__dirname, './clock/index.js'), dataStr, (err) => {
		if (err) {
			return `读写文件失败,${err.message}`;
		}
		console.log('写入 js 文件成功');
	});
}
function resolveHTML(dataHTML) {
	let dataStr = dataHTML
		.replace(regStyle, `<link rel="stylesheet" href="./index.css">`)
		.replace(regScript, `<script src="./index.js"></script>`);
	fs.writeFile(path.join(__dirname, './clock/index.html'), dataStr, (err) => {
		if (err) {
			return `写入 HTML 文件失败,${err.message}`;
		}
		console.log(`写入 HTML 文件成功`);
	});
}
