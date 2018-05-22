<template>
	<div class="tab-bar-top">
		<tab>
			<tab-item 
				v-for="(item, index) in levels" 
				:key="item.dict_id" 
				:selected="selected == item.dict_id || index == 0" 
				class="navItem"
				@click.native="selectTab(item)">
				{{item.value}}
			</tab-item>
		</tab>
	</div>
</template>
<script type="text/javascript">
import { Tab, TabItem } from 'vux'
import request from '../../common/request'
export default {
	data() {
		return {
			levels: [],
			selected: ''
		}
	},
	created() {
		this.getLevels()
	},
	methods: {
		selectTab(data){
			this.selected = data.dict_id
			this.$emit('selectLevel', data.dict_id)
		},
		getLevels() {
			request({
				url: '/sys_dict/list/type'
			}).then(res => {
				this.levels = res.data.data
				this.$emit('selectLevel', this.levels[0].dict_id)
			})
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
