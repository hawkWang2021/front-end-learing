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
	module: {
		rules: [
			// loader的规则
			{
				test: /\.css$/, // 匹配所有的css文件
				// use数组里从右向左运行
				// 先用 css-loader 让webpack能够识别 css 文件的内容并打包
				// 再用 style-loader 将样式, 把css插入到dom中
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		port: 3333, // 端口号
	},
}
