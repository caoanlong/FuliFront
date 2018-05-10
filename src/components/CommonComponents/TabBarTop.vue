<template>
	<div class="tab-bar-top">
		<!-- <tab >
			<tab-item v-for="(item,index) in imgTabBar" :selected="index === 0" :key="item.sort" @click.native="tab(index)">{{item.name}}</tab-item>
			</tab> -->
			<tab>
				<tab-item v-for="(item,index) in imgTabBar" :key="index" :selected="activeIndex==index" class="navItem">{{item.name}}</tab-item>
			</tab>
		
	</div>
</template>
<script type="text/javascript">
import { Tab, TabItem } from 'vux'
export default {
	data() {
		return {
			activeIndex: 0,
			imgTabBar: [{
					"name": "性感美女",
					"sort": 1
				},
				{
					"name": "丝袜美腿",
					"sort": 2
				},
				{
					"name": "唯美写真",
					"sort": 3
				},
				{
					"name": "网络美女",
					"sort": 4
				},
				{
					"name": "高清美女",
					"sort": 5
				},
				{
					"name": "模特美女",
					"sort": 6
				},
				{
					"name": "体育美女",
					"sort": 7
				},
				{
					"name": "动漫美女",
					"sort": 8
				}
			]
		}
	},
	methods: {
		tab: function(index){
			this.activeIndex = index;
			this.$emit('curPage',index+1)
		}
	},
	components: {
		Tab,
		TabItem
	}
}

</script>
<style lang="stylus" scoped>
.tab-bar-top
	position fixed
	top 0
	left 0
	z-index 10
	width 100%
	background-color #fff
	.navItem
		-webkit-tap-highlight-color transparent
</style>
