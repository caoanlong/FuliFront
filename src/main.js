// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import globals from '../src/common/global'
import './assets/icons' // icon

import { ToastPlugin } from 'vux'
Vue.use(globals)
Vue.use(ToastPlugin, {position: 'middle'})

Vue.config.productionTip = false

/* eslint-disable no-new */
export const vue = new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
