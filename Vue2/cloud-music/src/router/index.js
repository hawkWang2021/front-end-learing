// 路由-相关模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
// import Home from '@/views/Home'
// import Search from '@/views/Search'
import Play from '@/views/Play'

Vue.use(VueRouter)
const routes = [
	{
		path: '/',
		redirect: '/layout'
	},
	{
		path: '/layout',
		component: Layout,
		redirect: '/layout/home',
		children: [
			{
				path: 'home',
				component: () => import('@/views/Home'), // 按需引入
				meta: {
					// meta保存路由对象额外信息的
					title: '首页'
				}
			},
			{
				path: 'search',
				component: () => import('@/views/Search'), // 按需引入
				meta: {
					//用于路由提供我们放置自定义属性
					title: '搜索'
				}
			}
		]
	},
	{
		path: '/play',
		component: Play
	}
]

const router = new VueRouter({
	routes
})

export default router
