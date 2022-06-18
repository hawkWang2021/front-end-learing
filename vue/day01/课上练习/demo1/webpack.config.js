// ! 如果改了配置就需要重启服务器
const path = require('path')
// 引入自动生成的 html 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development', // 开发模式
	entry: './src/main.js', // 配置入口文件
	output: {
		path: path.resolve(__dirname, 'build'), // 配置输出文件的路径
		filename: 'bundle.js', // 配置输出文件的名称
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html', // 配置模板文件
		}),
	],
	module: {
		rules: [
			// loader的规则
			{
				test: /\.css$/i, // 匹配所有的css文件
				// use数组里从右向左运行
				// 先用 css-loader 让webpack能够识别 css 文件的内容并打包
				// 再用 style-loader 将样式, 把css插入到dom中
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/i, // 匹配所有的css文件
				// use数组里从右向左运行
				// 先用 css-loader 让webpack能够识别 css 文件的内容并打包
				// 再用 style-loader 将样式, 把css插入到dom中
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
			{
				test: /\.(gif|png|jpg|jpeg)$/,
				type: 'asset', // 小于8kb的图片会被转成base64,大于8kb的图片会被打包到build目录下
			},
			{
				// webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				type: 'asset/resource',
				generator: {
					filename: 'font/[name].[hash:6][ext]',
				},
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'], // 预设:转码规则(用bable开发环境本来预设的)
					},
				},
			},
		],
	},
	devServer: {
		port: 3000, // 端口号
	},
}
