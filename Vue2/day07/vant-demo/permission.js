import router from '@/router'

router.beforeEach((to, from, next) => {
	// 去的如果是home
	if (to.path.startsWith('/home')) {
		// 检查token是否在
		if (localStorage.getItem('token')) {
			// 可以进
			next()
		} else {
			next('/login') // 中转到登录页
		}
	} else {
		next() // 正常放行
	}
})
