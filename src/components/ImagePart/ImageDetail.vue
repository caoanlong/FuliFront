<template>
	<div class="pad-top-36">
		<div class="fullBlock"></div>
		<div class="imgView">
			<x-img :src="imgUrl + item" v-for="item in content" :key="item"/>
		</div>
		<!--<tab-bar-bottom/> -->
	</div>
</template>
<script type="text/javascript">
import TabBarBottom from "../CommonComponents/TabBarBottom"
import request from '../../common/request'
import { XImg } from 'vux'
export default {
	data() {
		return {
        	content: [],
		};
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
	},
	components: {
		TabBarBottom,
		XImg
	}
};

</script>
<style lang="stylus" scoped>
.fullBlock
	position fixed
	top 0
	bottom 0
	left 0
	right 0
	background #f0f0f0
.imgView
	padding 5px 5px 0
	position relative
	img
		width 100%
		vertical-align top
		margin-bottom 5px				
</style>