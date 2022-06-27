import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginCom from '@/views/LoginCom'
import HomeCom from '@/views/HomeCom'
import ArticleCom from '@/views/ArticleCom'

Vue.use(VueRouter) // use会调用传入对象的install方法，并且会传入vue

const routes = [
	{
		path: '/login',
		component: LoginCom
	},
	{
		path: '/article',
		component: ArticleCom
	},
	{
		path: '/home',
		component: HomeCom
	}
]
// 创建路由对象 -  传入规则
const router = new VueRouter({
	routes
})

export default router
