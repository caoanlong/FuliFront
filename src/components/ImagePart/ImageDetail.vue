<template>
	<pull-to>
		<div class="imgView">
			<x-img container=".scroll-container" :src="imgUrl + item" v-for="item in content" :key="item"/>
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
        	content: [],
		};
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
				let imgInfo = res.data.data
				this.content = imgInfo.content.split(',')
			})
		}
	}
}

</script>
<style lang="stylus" scoped>
.imgView
	padding 5px 5px 0
	position relative
	img
		width 100%
		vertical-align top
		margin-bottom 5px				
</style>