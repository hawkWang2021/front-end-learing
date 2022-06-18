const path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		port: 3333, // 端口号
	},
}
