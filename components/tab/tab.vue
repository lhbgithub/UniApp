<template>
	<view class="tab-box">
		<scroll-view scroll-x class="scroll-box">
			<view class="tab-scroll-box">
				<view class="scroll-item" v-for="(item,index) in tabdata" :key='index'>
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icon">
			<uni-icons type="gear" size="26"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tabdata: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.tab-box {
		border-bottom: 1px solid #ededed;
		background-color: #fff;
		display: flex;
		justify-content: space-between;

		.scroll-box {
			flex: 1;
			overflow: hidden;

			.tab-scroll-box {
				height: 45px;
				display: flex;
				align-items: center;

				.scroll-item {
					font-size: 14px;
					color: #333;
					padding: 0 10px;
					white-space: nowrap;
				}
			}
		}

		.tab-icon {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;

			&::before {
				content: '';
				width: 1px;
				height: 26px;
				background-color: #333;
				position: relative;
				right: 8px;
			}

		}
	}
</style>
