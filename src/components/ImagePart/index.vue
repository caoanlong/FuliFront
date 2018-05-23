<template>
	<div class="padt">
		<tab-bar-top @selectLevel="selectLevel"/>
		<div class="fullBlock"></div>
		<div class="list clearfix">
			<div class="left">
				<router-link 
					tag="div" 
					:to="{name: 'imagedetail', query: {image_id: leftItem.image_id}}" 
					class="item" 
					v-for="(leftItem, index) in imgList" 
					:key="leftItem.image_id" 
					v-if="index % 2 == 0">
					<div class="itemBox">
						<x-img :src="imgUrlMiddle + leftItem.thumbnail.split('/image/uploads')[1]"/>
						<p class="title">{{leftItem.name}}</p>
						<p class="otherInfo">
							<span class="view"><svg-icon icon-class="eye" font-size="14"></svg-icon> {{leftItem.view}}</span>
							<span><svg-icon icon-class="like"></svg-icon> {{leftItem.like}}</span>
						</p>
					</div>
				</router-link>
			</div>
			<div class="right">
				<router-link 
					tag="div" 
					:to="{name: 'imagedetail', query: {image_id: rightItem.image_id}}" 
					class="item" 
					v-for="(rightItem, index) in imgList" 
					:key="rightItem.image_id" 
					v-if="index % 2 != 0">
					<div class="itemBox">
						<x-img :src="imgUrlMiddle + rightItem.thumbnail.split('/image/uploads')[1]"/>
						<p class="title">{{rightItem.name}}</p>
						<p class="otherInfo">
							<span class="view"><svg-icon icon-class="eye" font-size="14"></svg-icon> {{rightItem.view}}</span>
							<span><svg-icon icon-class="like"></svg-icon> {{rightItem.like}}</span>
						</p>
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
import request from '../../common/request'
import { XImg } from 'vux'
export default {
	data() {
		return {
        	imgList: [],
			pageIndex: 1,
			pageSize: 10
		};
	},
	created() {
	},
	methods:{
		selectLevel(level_id) {
			this.getList(level_id)
		},
		getList(level_id){
			let params = {
				pageIndex: this.pageIndex,
				pageSize: this.pageSize,
				level_id
			}
			request({
				url: '/image/list',
				params
			}).then(res => {
				this.imgList = res.data.data.rows
			})
		}
	},
	components: {
		TabBarTop,
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