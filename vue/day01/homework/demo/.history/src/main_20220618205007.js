import './css/index.css'
import './less/index.less'
import $ from 'jquery'
$('li:nth-child(odd)').css('color', 'lightblue')
$('li:nth-child(even)').css('color', 'lightgreen')

// 引入图片
import picUrl from './assets/quin车.jpg'
const picItem = document.createElement('img')
picItem.src = picUrl
document.body.appendChild(picItem)
