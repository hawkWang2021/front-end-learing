const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		host: 'localhost',
		port: 8080,
		open: true
	},
	lintOnSave: false // 关闭 eslint 检查
})
