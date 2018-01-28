<template>
	<div class="padt">
		<tab-bar-top/>
		<div class="fullBlock"></div>
		<div class="list clearfix">
			<div class="left">
				<router-link tag="div" :to="{name:'imagedetail'}" class="item" v-for="(leftItem, index) in imgData" :key="leftItem.url" v-if="index % 2 == 0">
					<div class="itemBox">
						<img :src="leftItem.url" />
						<p class="title">{{leftItem.url}}</p>
						<p class="otherInfo"><span class="view"><svg-icon icon-class="eye" font-size="14"></svg-icon> 4433</span><span><svg-icon icon-class="like"></svg-icon> 4444</span></p>
					</div>
				</router-link>
			</div>
			<div class="right">
				<router-link tag="div" :to="{name:'imagedetail'}" class="item" v-for="(rightItem, index) in imgData" :key="rightItem.surfaceUrl" v-if="index % 2 != 0">
					<div class="itemBox">
						<img :src="rightItem.url" />
						<p class="title">{{rightItem.url}}</p>
						<p class="otherInfo"><span class="view"><svg-icon icon-class="eye" font-size="14"></svg-icon> 1111</span><span><svg-icon icon-class="like"></svg-icon> 2222</span></p>
					</div>
				</router-link>
			</div>
		</div>
		<!--<tab-bar-bottom/> -->
	</div>
</template>
<script type="text/javascript">
import TabBarTop from "../CommonComponents/TabBarTop"
import TabBarBottom from "../CommonComponents/TabBarBottom"
import axios from 'axios'
export default {
	data() {
		return {
        	imgData: []
		};
	},
	created() {
		this.getList()
	},
	methods:{
		getList(){
			let url = 'http://39.108.245.177:3001/getOpenImg'
			let params = {
				page:7
			}
			axios.get(url, {params: params}).then((response) => {			
				this.imgData = response.data.data
				console.log(response.data.data)
			})
		}
	},
	components: {
		TabBarTop,
		TabBarBottom
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
.list
	padding 5px
	position relative
.left
.right
	width 50%
	float left
	.item
		padding 5px
		.itemBox
			background #fff
			border-radius 4px
			box-shadow 2px 2px 5px rgba(0,0,0,.2)
			overflow hidden
			padding-bottom 8px
			img
				width 100%
				vertical-align top
				margin-bottom 8px
			p
				line-height 20px
				margin 0 10px
				font-size 12px
				&.title
					height 40px
					overflow hidden
					color #666
					margin-bottom 5px
				&.otherInfo
					height 20px
					color #c7c7c7
					font-family Helvetica,HelveticaNeue,Droid Sans
					.view
						margin-right 10px
</style>