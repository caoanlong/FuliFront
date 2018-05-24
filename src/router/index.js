import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Layout,
			children: [
				{
					path: '',
					name: 'image',
					component: () => import('@/components/ImagePart')
				},{
					path: '/imagedetail',
					name: 'imagedetail',
					component: () => import('@/components/ImagePart/ImageDetail')
				},{
					path: '/story',
					name: 'story',
					component: () => import('@/components/StoryPart')
				},{
					path: '/video',
					name: 'video',
					component: () => import('@/components/VideoPart')
				},{
					path: '/user',
					name: 'user',
					component: () => import('@/components/UserCenter')
				}
			]
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		}
	]
})

router.beforeEach((to, from, next) => {
	if (localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
		if (to.path === '/login') {
			next({ path: '/' })
		} else {
			next()
		}
	} else {
		next()
		/* has no token*/
		// if (to.path === '/login') {
		// 	next()
		// } else {
		// 	next({ path: '/login' })
		// }
	}
})

export default router
