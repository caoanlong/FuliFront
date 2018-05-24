<template>
	<div class="container" id="container">
		<tab-bar-top @selectLevel="selectLevel"/>
		<pull-to 
			:top-load-method="refresh" 
			:bottom-load-method="loadMore" 
			@top-state-change="stateChange" 
			@bottom-state-change="stateChange">
			<div class="list">
				<div class="left">
					<router-link 
						tag="div" 
						:to="{name: 'imagedetail', query: {image_id: leftItem.image_id}}" 
						class="item" 
						v-for="(leftItem, index) in imgList" 
						:key="leftItem.image_id" 
						v-if="index % 2 == 0">
						<div class="itemBox">
							<x-img container=".scroll-container" :src="imgUrlMiddle + leftItem.thumbnail.split('/image/uploads')[1]"/>
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
							<x-img container=".scroll-container" :src="imgUrlMiddle + rightItem.thumbnail.split('/image/uploads')[1]"/>
							<p class="title">{{rightItem.name}}</p>
							<p class="otherInfo">
								<span class="view"><svg-icon icon-class="eye" font-size="14"></svg-icon> {{rightItem.view}}</span>
								<span><svg-icon icon-class="like"></svg-icon> {{rightItem.like}}</span>
							</p>
						</div>
					</router-link>
				</div>
			</div>
			<template slot="top-block" slot-scope="props">
				<div class="top-load-wrapper">
					<svg-icon :class="{
						'icon-arrow': props.state === 'trigger',
						'icon-loading': props.state === 'loading'
					}" :icon-class="icon"/>
					{{ props.stateText }}
				</div>
			</template>
			<template slot="bottom-block" slot-scope="props">
				<div class="bottom-load-wrapper" v-if="isOver">~官人轻点，已经到底了~</div>
				<div class="bottom-load-wrapper" v-else>
					<svg-icon :class="{
						'icon-arrow': props.state === 'trigger',
						'icon-loading': props.state === 'loading'
					}" :icon-class="icon"/>
					{{ props.stateText }}
				</div>
			</template>
		</pull-to>
		<!--<tab-bar-bottom/> -->
	</div>
</template>
<script type="text/javascript">
import TabBarTop from "../CommonComponents/TabBarTop"
import TabBarBottom from "../CommonComponents/TabBarBottom"
import request from '../../common/request'
import PullTo from 'vue-pull-to'
import { XImg } from 'vux'
export default {
	data() {
		return {
			imgList: [],
			pageIndex: 1,
			pageSize: 40,
			level_id: '',
			icon: '',
			isOver: false
		}
	},
	components: {
		TabBarTop,
		TabBarBottom,
		PullTo,
		XImg
	},
	methods:{
		selectLevel(level_id) {
			this.level_id = level_id
			this.pageIndex = 1
			this.imgList = []
			this.getList()
		},
		refresh(loaded) {
			this.pageIndex = 1
			this.imgList = []
			this.getList(loaded)
		},
		loadMore(loaded) {
			if (this.isOver) {
				loaded && loaded('done')
				return false
			}
			this.pageIndex++
			this.getList(loaded)
		},
		getList(loaded){
			let params = {
				pageIndex: this.pageIndex,
				pageSize: this.pageSize,
				level_id: this.level_id
			}
			request({
				url: '/image/list',
				params
			}).then(res => {
				let list = res.data.data.rows
				if (list.length == 0) {
					this.isOver = true
				}
				this.imgList.push(...list)
				loaded && loaded('done')
			}).catch(err => {
				loaded && loaded('fail')
			})
		},
		stateChange(state) {
			if (state === 'pull' || state === 'trigger') {
			  this.icon = 'arrowdown'
			} else if (state === 'loading') {
			  this.icon = 'sync'
			} else if (state === 'loaded-done') {
			  this.icon = 'check-close-circle-o'
			}
		}
	}
}

</script>
<style lang="stylus" scoped>
.top-load-wrapper,.bottom-load-wrapper
	line-height 50px
	text-align center
	color #aaa
.icon-arrow
	transition .2s
	transform rotate(180deg)
.icon-loading
	transform rotate(0deg)
	animation-name loading
	animation-duration 3s
	animation-iteration-count: infinite
	animation-direction alternate
@keyframes loading
	from {transform: rotate(0deg)}
	to {transform: rotate(360deg)}
.container
	height 100%
	padding-top 44px
	.list
		padding 5px
		.left,.right
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