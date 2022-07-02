import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/reset.css'
import '@/mobile/flexible'
Vue.config.productionTip = false

import {
	Tabbar,
	TabbarItem,
	NavBar,
	Row,
	Col,
	Image,
	Cell,
	Icon,
	Search,
	List
} from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Row)
Vue.use(Col)
Vue.use(Image)
Vue.use(Cell)
Vue.use(Icon)
Vue.use(Search)
Vue.use(List)
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
