<template>
	<div class="tab-bar-top">
		<div class="topNav">
			<ul>
				<li class="cur">性感美女</li>
				<li>清纯美眉</li>
				<li>美女校花</li>
				<li>性感车模</li>
				<li>旗袍美女</li>
				<li>明星写真</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {

	}
</script>
<style lang="stylus" scoped>
	.tab-bar-top
		position fixed
		top 0
		left 0
		z-index 10
		width 100%
		height 36px
		background-color #fff
		.topNav
			overflow-x auto
			ul
				width 624px
				padding 0
				margin 0
				li
					float left
					list-style-type none
					height 36px
					line-height 36px
					padding 0 20px
					&.cur
						height 35px
						line-height 35px
						border-bottom 1px solid #3385ff
</style>