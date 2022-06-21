const path = require('path')
// 引入将css生成单独文件的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
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
		// 使用单独生成css文件的插件，打包时会将css文件独立出去
		new MiniCssExtractPlugin({
			// 指定文件的输出路径和文件名
			filename: 'css/[name].css',
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
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.less$/i, // 匹配所有的css文件
				// use数组里从右向左运行
				// 先用 css-loader 让webpack能够识别 css 文件的内容并打包
				// 再用 style-loader 将样式, 把css插入到dom中
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/i,
				type: 'asset',
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
			{
				// webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				type: 'asset/resource',
				generator: {
					filename: 'font/[name].[hash:6][ext]',
				},
			},
		],
	},
	devServer: {
		port: 3000, // 端口号
	},
	optimization: {
		minimizer: [
			// 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
			`...`,
			new CssMinimizerPlugin(),
		],
		minimize: true,
	},
}
