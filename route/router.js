import Vue from 'vue'
import Router from 'vue-router'
import EchartsDemo from '@pages/echartsDemo/home.vue'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/pages/index/echartsDemo/home',
		name: 'home',
		component: 'EchartsDemo'
	}]
})