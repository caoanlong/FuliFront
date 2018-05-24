import axios from 'axios'
import { vue } from '../main'

// create an axios instance
const service = axios.create({
	baseURL: process.env.BASE_API, // api的base_url
	timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
	if (localStorage.getItem('token')) {
		config.headers['X-Access-Token'] = localStorage.getItem('token')
	}
	return config
}, error => {
	// Do something with request error
	console.log(error) // for debug
	Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
	response => {
		if (response.data.code != 0) {
			if (   response.data.code == 101
				|| response.data.code == 102
				|| response.data.code == 103
				|| response.data.code == 104 ) {
				localStorage.clear()
				vue.$vux.toast.text(response.data.msg)
				window.location.href = '/login'
				return response
			}
			vue.$vux.toast.text(response.data.msg)
			return response
		}
		return response
	},
	error => {
		vue.$vux.toast.text(error.message)
		return response
	})

export default service
