import router from '@/router'

// 这个函数会在任何的路由跳转的时候执行
let isLogin = false
router.beforeEach((to, from, next) => {
	if (to.path.startsWith('/about') && !isLogin) {
		next('/')
	} else {
		next()
	}
})
