// 引入 index.css 文件
import './css/index.css'
// 引入 index.less 文件
import './less/index.less'
import $ from 'jquery'

$(function () {
	$('li:nth-child(odd)').css('color', 'red')
	$('li:nth-child(even)').css('color', 'blue')
})
// 引入一个图片文件
// webpack眼中万物皆模块，图片文件就是一个模块
import imgObj from './assets/1.gif'
let theImg = document.createElement('img')
theImg.src = imgObj
document.body.appendChild(theImg)
// 引入一个字体文件
import './assets/fonts/iconfont.css'
let theIcon = document.createElement('i')
theIcon.className = 'iconfont icon-weixin'
theIcon.style.fontSize = '40px'
theIcon.style.color = 'lightgreen'
document.body.appendChild(theIcon)
// 引入ES6箭头函数
// 高级语法
const fn = () => {
	console.log('你好babel')
}
console.log(fn) // 这里必须打印不能调用/不使用, 不然webpack会精简成一句打印不要函数了/不会编译未使用的代码
// 没有babel集成时, 原样直接打包进lib/bundle.js
// 有babel集成时, 会翻译成普通函数打包进lib/bundle.js
