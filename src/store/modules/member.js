import request from '../../common/request'

const member = {
	state: {
		mobile: localStorage.getItem('mobile'),
		name: localStorage.getItem('name'),
		avatar: localStorage.getItem('avatar')
	},
	mutations: {
		SET_MOBILE: (state, mobile) => {
			state.mobile = mobile
			localStorage.setItem('mobile', mobile)
		},
		SET_NAME: (state, name) => {
			state.name = name
			localStorage.setItem('name', name)
		},
		SET_AVATAR: (state, avatar) => {
			state.avatar = avatar
			localStorage.setItem('avatar', avatar)
		}
	},
	actions: {
		loginOut({ commit, state }) {
			return new Promise((resolve, reject) => {
				commit('SET_NAME', '')
				commit('SET_MOBILE', '')
				commit('SET_AVATAR', '')
				localStorage.clear()
				sessionStorage.clear()
				resolve()
			})
		},
		getMemberInfo({ commit }) {
			return new Promise((resolve, reject) => {
				request({
					url: '/auth/memberInfo'
				}).then(res => {
					commit('SET_NAME', res.data.data.name)
					commit('SET_MOBILE', res.data.data.mobile)
					commit('SET_AVATAR', res.data.data.avatar)
					resolve(res.data.data)
				})
			})
		}
	}
}

export default member