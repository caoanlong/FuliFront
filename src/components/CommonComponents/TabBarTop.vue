<template>
	<div class="tab-bar-top">
		<div style="width: 100%;overflow-x:auto;-webkit-overflow-scrolling:touch;max-width:640px;margin:0 auto">
			<tab style="width:700px;" bar-active-color="#04BE02" :line-width="1" >
				<tab-item v-for="(item,index) in imgTabBar" :selected="index === 0" :key="item.sort" @click.native="tab(index)">{{item.name}}</tab-item>
			</tab>
		</div>
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
	height 44px
	background-color #fff
</style>
