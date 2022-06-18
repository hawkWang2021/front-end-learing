import './css/index.css'
import './less/index.less'
import $ from 'jquery'
$('li:nth-child(odd)').css('color', 'lightblue')
$('li:nth-child(even)').css('color', 'lightgreen')

// 引入图片
import picUrl from './assets/quin.jpg'
const picItem = document.createElement('img')
picItem.src = picUrl
picItem.style.width = '100px'
picItem.style.height = '100px'
document.body.appendChild(picItem)
// 引入字体图标文件
import './assets/fonts/iconfont.css'
const fn = () => {
	console.log('你打代码像蔡徐坤')
}
