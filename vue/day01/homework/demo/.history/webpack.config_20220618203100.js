const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html', // 以此为基准生成打包后html文件
		}),
	],
	devServer: {
		port: 3333, // 端口号
	},
}
