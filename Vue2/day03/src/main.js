import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css' // 默认找文件夹下的index文件(但是这个不是所以需要写路径)

Vue.config.productionTip = false

new Vue({
	render: h => h(App)
}).$mount('#app')
