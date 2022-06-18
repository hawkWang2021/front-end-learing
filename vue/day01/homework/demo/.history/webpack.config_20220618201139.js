const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [new HtmlWebpackPlugin()],
	devServer: {
		port: 3333, // 端口号
	},
}
