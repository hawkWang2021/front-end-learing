import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 全局引入
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

// 自动按需导入的全局注册
import {Button, Image, ActionSheet, Field, Form} from 'vant'

Vue.use(Button)
Vue.use(Image)
Vue.use(ActionSheet)
Vue.use(Field)
Vue.use(Form)

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
