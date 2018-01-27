<template>
	<div class="pad-top-36">
		<tab-bar-top/>
		<div class="fullBlock"></div>
		<div class="imgView">
			<img :src="item.url" v-for="item in imglist" :key="item.url"/>
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
			id:'',
        	imgData:'',
        	imglist:''
		};
	},
	created() {
		this.getDetail()
	},
	methods:{
		getDetail(){
			let url = 'http://192.168.1.17:3000/imgItemDetail'
			// let params = {
			// 	"id": this.$route.query.id
			// }
			axios.get(url).then((response) => {			
				this.imgData = response.data
				this.imglist = response.data.list
				console.log(response.data.list)
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
.imgView
	padding 5px 5px 0
	position relative
	img
		width 100%
		vertical-align top
		margin-bottom 5px				
</style>