// 网络请求 - 二次封装
import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:3000' // # 不推荐改原生 axios 来请求,推荐使用对象,这样不会影响到 axios 本身
const instance = axios.create({
	baseURL: 'http://localhost:3000', // 基础地址
	time: 5000 // 超时时间
})
export default instance
