<template>
	<view class="navtabBar">
		<view class="navtab" :style="{height:navtabfixed+'px'}"></view>
		<view class="navtabfixed" :style="{height:navtabfixed+'px'}">
			<view class="statusBar" :style="{height:statusBarHeight+'px'}"></view>
			<view class="navbar-search-content" :style="{width:searchwidth+'px',height:searchheight+'px'}">
				<view class="navbar-search" :style="{height:nsearchheight+'px'}">
					<view class="navbar-search-icon">
						<uni-icons type="search" size="20"></uni-icons>
					</view>
					<view class="navbar-search-text">uniap-search-text</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:20,
				searchwidth:300,
				nsearchheight:32,
				searchheight:45,
				navtabfixed:45,
			};
		},
		created() {
			// 获取手机信息
			var getsinfo = uni.getSystemInfoSync();
			this.statusBarHeight = getsinfo.statusBarHeight
			console.log('获取状态栏',this.statusBarHeight)
			
			//只在app，h5，支付宝，其他平台都不运行
			//#ifdef APP-PLUS || H5 || MP-ALIPAY
			console.log('获取手机信息',getsinfo)
			this.searchwidth = getsinfo.windowWidth
			//#endif
			
			
			//除了app，h5，支付宝，其他平台都运行
			//#ifndef APP-PLUS || H5 || MP-ALIPAY
			// 获取胶囊位置信息
			const getjiaon = uni.getMenuButtonBoundingClientRect();
			console.log('获取胶囊位置信息',getjiaon)
			this.searchwidth = getjiaon.left
			this.searchheight = getjiaon.height
			// 获取导航栏高度，胶囊底部-状态栏+胶囊顶部-转态栏
			this.searchheight = getjiaon.bottom-getsinfo.statusBarHeight+getjiaon.top-getsinfo.statusBarHeight
			// 自定义head高度
			this.navtabfixed = getsinfo.statusBarHeight+this.searchheight
			//#endif
			
			
		}
	}
	
</script>

<style lang="scss">
	.navtabBar{
		background-color: $main;
		.navtab{
			height: 45px;
		}
		.navtabfixed{
			position: fixed;
			top: 0;
			background: $main;
			width: 100%;
			height: 45px;
			.navbar-search-content{
				width: 100%;
				box-sizing: border-box;
				padding: 0 10px;
				height: 45px;
				display: flex;
				justify-content: center;
				align-items: center;
				
			}
			.navbar-search{
				display: flex;
				width: 100%;
				height: 32px;
				background: #fff;
				border-radius: 30px;
				align-items: center;
			}
			.navbar-search-icon{
				width: 20px;
				height: 20px;
				margin-left: 10px;
			}
		}
		
	}
	
</style>
