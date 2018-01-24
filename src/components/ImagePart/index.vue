<template>
	<div class="pad-top-36">
		<tab-bar-top/>
		<div class="list clearfix">
			<div class="left">
				<div class="item" v-for="(leftItem, index) in imgData" v-if="index % 2 != 0">
					<div class="itemBox">
						<img :src="leftItem.url" />
						<p class="title">新人嫩模杨漫妮居家私房秀傲人豪乳极致美臀诱惑</p>
						<p class="otherInfo"><span class="fl"><svg-icon icon-class="eye"></svg-icon> 123</span><span class="fr"><svg-icon icon-class="like"></svg-icon> 123</span></p>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="item" v-for="(rightItem, index) in imgData" v-if="index % 2 == 0">
					<div class="itemBox">
						<img :src="rightItem.url" />
						<p class="title">新人嫩模杨漫妮居家私房秀傲人豪乳极致美臀诱惑</p>
						<p class="otherInfo"><span class="fl"><svg-icon icon-class="eye"></svg-icon> 123</span><span class="fr"><svg-icon icon-class="like"></svg-icon> 123</span></p>
					</div>
				</div>
			</div>
		</div>
		<!--<tab-bar-bottom/> -->
	</div>
</template>
<script type="text/javascript">
import TabBarTop from "../CommonComponents/TabBarTop"
import TabBarBottom from "../CommonComponents/TabBarBottom"
import { imgs } from "../../assets/data"
import axios from 'axios'
export default {
	data() {
		return {
			leftData: [],
        	rightData: [],
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
				page:4
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
.list
	padding 5px
.left
.right
	width 50%
	float left
	.item
		padding 5px
		.itemBox
			background #fff
			border-radius 4px
			box-shadow 2px 2px 5px #ddd
			overflow hidden
			padding-bottom 5px
			img
				width 100%
				vertical-align top
				margin-bottom 5px
			p
				line-height 20px
				margin 0 5px
				font-size 12px
				&.title
					height 40px
					overflow hidden
				&.otherInfo
					height 20px
					color #999
					.fl
						float left
					.fr
						float right
</style>
