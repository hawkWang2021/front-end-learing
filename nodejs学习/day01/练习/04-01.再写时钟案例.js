// 引入依赖
const { log } = require('console');
const fs = require('fs');
const path = require('path');
const regStyle = /<style>[\s\S]*<\/style>/gi;
const regScript = /<script>[\s\S]*<\/script>/gi;
fs.readFile(path.join(__dirname, './素材/index.html'), 'utf8', (err, data) => {
	if (err) {
		return `文件读取错误,${err.message}`;
	}
	console.log('文件读取成功');
	resolveCSS(data);
	resolveJS(data);
	resolveHTML(data);
});
function resolveCSS(data) {
	let dataStr = regStyle
		.exec(data)[0]
		.replace('<style>', '')
		.replace('</style>', '');
	fs.writeFile(
		path.join(__dirname, './clock/index.css'),
		dataStr,
		function (err) {
			if (err) {
				console.log(`写入 CSS 文件失败,${err.message}`);
			}
			console.log('写入 CSS 文件成功');
		}
	);
}
function resolveJS(data) {
	let dataStr = regScript
		.exec(data)[0]
		.replace('<script>', '')
		.replace('</script>', '');
	fs.writeFile(
		path.join(__dirname, './clock/index.js'),
		dataStr,
		function (err) {
			if (err) {
				console.log(`写入 JS 文件失败,${err.message}`);
			}
			console.log('写入 JS 文件成功');
		}
	);
}
function resolveHTML(data) {
	let dataStr = data
		.replace(regStyle, `<link rel="stylesheet" href="./index.css">`)
		.replace(regScript, `<script src="./index.js"></script>`);
	fs.writeFile(
		path.join(__dirname, './clock/index.html'),
		dataStr,
		function (err) {
			if (err) {
				return console.log(`写入 HTML 文件失败,${err.message}`);
			}
			console.log(`写入 HTML 文件成功`);
		}
	);
}
