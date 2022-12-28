<template>
	<view class="mine-container">
		<view class="header-section">
			<view class="flex justify-between padding">
				<view class="flex align-center">
					<image :src="avatar" class="cu-avatar xl round"></image>
					<view class="user-info">
						<view class="u_title">
							用户名：{{ name }}
						</view>
					</view>
				</view>
				<view class="flex align-center">
					<text>个人信息</text>
					<view class="iconfont icon-right"></view>
				</view>
			</view>
		</view>
		<view class="content-section">
			<view class="mine-actions grid col-4 text-center">
				<view class="action-item">
					<view class="iconfont icon-friendfill text-pink icon"></view>
					<text class="text">交流群</text>
				</view>
				<view class="action-item">
					<view class="iconfont icon-service text-blue icon"></view>
					<text class="text">在线客服</text>
				</view>
				<view class="action-item">
					<view class="iconfont icon-community text-mauve icon"></view>
					<text class="text">反馈社区</text>
				</view>
				<view class="action-item">
					<view class="iconfont icon-dianzan text-green icon"></view>
					<text class="text">点赞我们</text>
				</view>
			</view>
			<view class="menu-list">
				<view class="list-cell list-cell-arrow">
					<view class="menu-item-box">
						<view class="iconfont icon-user menu-icon"></view>
						<view>编辑资料</view>
					</view>
				</view>
				<view class="list-cell list-cell-arrow">
					<view class="menu-item-box">
						<view class="iconfont icon-help menu-icon"></view>
						<view>常见问题</view>
					</view>
				</view>
				<view class="list-cell list-cell-arrow">
					<view class="menu-item-box">
						<view class="iconfont icon-aixin menu-icon"></view>
						<view>关于我们</view>
					</view>
				</view>
				<view class="list-cell list-cell-arrow">
					<view class="menu-item-box">
						<view class="iconfont icon-setting menu-icon"></view>
						<view>应用设置</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: this.$store.state.user.name,
				avatar: this.$store.state.user.avatar
			};
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f6f7;
	}
.mine-container {
	.header-section {
		background-color: #3c96f3;
		padding: 15px 15px 45px 15px;
		color: #fff;
		.cu-avatar {
			border: 2px solid #eaeaea;
		}
		.user-info {
			margin-left: 15px;
			.u_title {
				font-size: 18px;
			}
		}
	}
	.content-section {
		position: relative;
		top: -50px;
		.mine-actions {
			background-color: white;
			margin: 15px 15px;
			padding: 20px 0;
			border-radius: 8px;
			.action-item {
				.icon {
					font-size: 28px;
				}
				.text {
					display: block;
					font-size: 13px;
					margin: 8px 0px;
				}
			}
		}
	}
}
</style>
