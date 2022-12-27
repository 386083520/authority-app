<template>
	<view class="normal-login-container">
		<view class="logo-content flex align-center justify-center">
			<image src="/static/logo.png" style="width: 50px;height: 50px"></image>
			<text class="title">若依移动端登陆</text>
		</view>
		<view></view>
		<view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
.normal-login-container {
	width: 100%;
	.logo-content {
		width: 100%;
		font-size: 21px;
		padding-top: 15%;
		.title {
			margin-left: 10px;
		}
	}
}
</style>
