import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
new Vue({
	render: h => h(App)
}).$mount('#app')
