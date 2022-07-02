import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home' // 自动跳转到 /home页
	},
	{
		path: '/home',
		name: 'home',
		component: HomeView,
		children: [
			{
				path: '', // 什么都不写意味着默认二级路由
				redirect: '/home/a'
			},
			{
				path: '/home/a', // 写相对地址或者完整地址
				component: () => import('@/views/HomeA')
				// path: '/home/a'
			},
			{
				path: '/home/b', // 写相对地址或者完整地址
				component: () => import('@/views/HomeB')
			},
			{
				path: '/home/c', // 写相对地址或者完整地址
				component: () => import('@/views/HomeC')
			}
		]
	},
	{
		path: '/about/:name?',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
	{
		path: '*',
		component: () => import('@/views/NotFound.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
