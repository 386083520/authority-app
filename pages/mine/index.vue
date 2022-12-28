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
			<view class="mine-actions">aaaa</view>
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
		}
	}
}
</style>
