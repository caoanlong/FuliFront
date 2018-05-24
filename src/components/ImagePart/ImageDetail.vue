<template>
	<pull-to>
		<div class="imgView">
			<x-img container=".scroll-container" :src="imgUrlLarge + item.split('/image/uploads')[1]" v-for="item in imgData.content" :key="item"/>
		</div>
		<div class="control">
			<div class="like" :class="{'active': imgData.isLiked}" @click="like">
				<svg-icon icon-class="like" font-size="32"></svg-icon>
			</div>
		</div>
	</pull-to>
</template>
<script type="text/javascript">
import request from '../../common/request'
import PullTo from 'vue-pull-to'
import { XImg } from 'vux'
export default {
	data() {
		return {
			imgData: {},
		}
	},
	components: {
		PullTo,
		XImg
	},
	created() {
		this.getDetail()
	},
	methods:{
		getDetail() {
			let params = {
				image_id: this.$route.query.image_id
			}
			request({
				url: '/image/info',
				params
			}).then(res => {
				this.imgData = res.data.data
			})
		},
		like() {
			if (this.imgData.isLiked) {
				this.$vux.toast.text('您已经临幸过了')
				return
			}
			let data = {
				image_id: this.$route.query.image_id
			}
			request({
				url: '/image/like',
				method: 'post',
				data
			}).then(res => {
				this.getDetail()
				this.$vux.toast.text(res.data.msg)
			})
		}
	}
}

</script>
<style lang="stylus" scoped>
.imgView
	padding 5px 5px 0
	position relative
	min-height 960px
	img
		width 100%
		vertical-align top
		margin-bottom 5px	
.control
	width 100%
	.like
		display flex
		margin 30px auto 40px auto
		width 60px
		height 60px
		border-radius 30px
		border 1px solid #bbb
		color #bbb
		justify-content center
		align-items center
		&.active
			border 1px solid #ff0000
			color #ff0000
</style>