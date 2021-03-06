import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/permission'

Vue.config.productionTip = false

new Vue({
	router, // Vue.prototype.$router = router
	render: h => h(App)
}).$mount('#app')
