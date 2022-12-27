<template>
	<view class="normal-login-container">
		<view class="logo-content flex align-center justify-center">
			<image src="/static/logo.png" style="width: 50px;height: 50px"></image>
			<text class="title">若依移动端登陆</text>
		</view>
		<view class="login-form-content">
			<view class="input-item flex align-center">
				<view class="iconfont icon-user icon"></view>
				<input placeholder="请输入账号" class="input" maxlength="30"/>
			</view>
			<view class="input-item flex align-center">
				<view class="iconfont icon-password icon"></view>
				<input placeholder="请输入密码" class="input" type="password" maxlength="20"/>
			</view>
			<view class="input-item flex align-center">
				<view class="iconfont icon-code icon"></view>
				<input placeholder="请输入验证码" class="input" maxlength="4"/>
			</view>
			<view class="action-btn">
				<button class="login-btn bg-blue">登陆</button>
			</view>
		</view>
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
	.login-form-content {
		width: 80%;
		margin: 20px auto;
		margin-top: 15%;
		.input-item {
			border-radius: 20px;
			background-color: #f5f6f7;
			height: 45px;
			margin: 20px auto;
			.icon {
				margin-left: 10px;
				color: #999;
			}
			.input {
				padding-left: 15px;
				width: 100%;
				font-size: 14px;
			}
		}
		.login-btn {
			margin-top: 40px;
			height: 45px;
		}
	}
}
</style>
