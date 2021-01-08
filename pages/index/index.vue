<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<!-- tab -->
		<tab :tabdata='tablist'></tab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tablist:[] //tab数据
			}
		},
		onLoad() {
			// 网路请求
			this.getLabel();
		},
		methods: {
			// 获取云函数的数据，网络请求
			getLabel() {
				this.$api.get_list().then(res=>{console.log('listres',res)})
				
				this.$api.get_label().then((res)=>{
					console.log('res',res)
					if(res.result.code===200){
						this.tablist = res.result.data
						console.log(this.tablist)
						
					}
				}).catch((err)=>{
					console.log('err',err)
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
