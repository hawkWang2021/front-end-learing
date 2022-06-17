let n1 = 10 // 定义模块私有成员
let n2 = 20 // 定义模块私有成员，外界访问不到 n2 ,因为它没有被export
function show() {
	console.log('111')
	return '阿巴阿巴阿巴'
}
// #默认导出
export default {
	// 使用export default 默认导出语法,向外共享模块私有成员 n1,show
	// ! 注意一个模块只能有一个默认导出
	n1,
	show,
}
