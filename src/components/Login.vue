<template>
	<div>
		<group labelWidth="70px">
			<x-input title="手机号" name="mobile" placeholder="请输入手机号码" keyboard="number" v-model="mobile"></x-input>
			<x-input title="验证码" class="weui-vcode" keyboard="number" v-model="ver_code">
				<x-button slot="right" type="primary" mini :disabled="isGetVCode" @click.native="getCode">{{codeBtn}}</x-button>
			</x-input>
		</group>
		<box gap="15px 15px">
			<x-button type="primary" @click.native="login">登录</x-button>
		</box>
	</div>
</template>
<script type="text/javascript">
	import { Group,XInput,XButton,Box } from 'vux'
	import request from '../common/request'
	export default {
		data () {
			return {
				mobile: '',
				ver_code: '',
				codeBtn: '发送验证码',
				codeNum: 60,
				isGetVCode: false
			}
		},
		components: {
			Group,
			XInput,
			XButton,
			Box
		},
		methods: {
			getCode() {
				if (this.isGetVCode) return
				this.timeGo()
				let params = {
					'mobile': this.mobile
				}
				request({
					url: '/auth/getVerCode',
					params
				}).then(res => {
					this.$vux.toast.text(res.data.data)
				})
			},
			login() {
				let data = {
					'mobile': this.mobile,
					'ver_code': this.ver_code
				}
				request({
					url: '/auth/login',
					method: 'post',
					data
				}).then(res => {
					this.$vux.toast.text(res.data.msg)
					localStorage.setItem('token', res.headers['x-access-token'])
					this.$store.dispatch('getMemberInfo').then(memberInfo => {
						this.$router.push({name: 'image'})
					})
				})
			},
			timeGo() {
				if (this.codeNum == 0) {
					this.codeBtn = '点击获取'
					this.isGetVCode = false
					this.codeNum = 60
					return
				} else {
					this.isGetVCode = true
					this.codeBtn = this.codeNum + 's'
					this.codeNum--
					setTimeout(() => {
						this.timeGo()
					}, 1000)
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
	h1
		height 100%
		text-align center
</style>