const path = require('path');
const express = require('express');
const app = express();
// 托管静态资源
app.use(express.static(path.join(__dirname, '../../day01/clock')));
// app.use(express.static('../../day01/files'));

// MARK:挂载路径前缀
app.use('/files', express.static(path.join(__dirname, '../../day01/files')));
app.listen(80, () => {
	console.log('服务器已经运行 ==> http://127.0.0.1');
});
