<template>
	<view class="mine-container">
		<view class="header-section">
			<view class="flex justify-between">
				<view>
					<image :src="avatar"></image>
					<view>
						用户名：{{ name }}
					</view>
				</view>
				<view>
					<text>个人信息</text>
					<view class="iconfont icon-right"></view>
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

</style>
