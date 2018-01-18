<template>
	<div class="tab-bar-bottom" v-if="!isWeixin"></div>
</template>
<script type="text/javascript">
	import { isWeixin } from '../../common/util.js'
	export default {
		computed: {
			isWeixin() {
				return isWeixin()
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.tab-bar-bottom
		position fixed
		bottom 0
		left 0
		z-index 10
		width 100%
		height 45px
		background-color red
</style>