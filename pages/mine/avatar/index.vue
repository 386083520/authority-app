<template>
	<view class="container">
		<view class="cropper-content">
			<view class="uni-cropper">
				<view class="uni-cropper-content" :style="'width:' + cropperInitW + 'px;height:' + cropperInitH + 'px;'">
					<image :src="imageSrc" :style="'width:' + cropperInitW + 'px;height:' + cropperInitH + 'px;'"></image>
					<view class="uni-cropper-crop-box" :style="'left:'+cutL+'px;top:'+cutT+'px;right:'+cutR+'px;bottom:'+cutB+'px'">
						<view class="uni-cropper-view-box">
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cropper-config">
			<button type="reverse" style="margin-top: 15px" @click="getImage">选择头像</button>
			<button type="warn" style="margin-top: 15px">提交</button>
		</view>
	</view>
</template>

<script>
	let sysInfo = uni.getSystemInfoSync()
	let SCREEN_WIDTH = sysInfo.screenWidth
	export default {
		data() {
			return {
				imageSrc: this.$store.getters.avatar,
				cropperInitW: SCREEN_WIDTH,
				cropperInitH: SCREEN_WIDTH,
				cutL: 0,
				cutT: 0,
				cutB: 0,
				cutR: 0
			};
		},
		methods: {
			getImage() {
				var _this = this
				uni.chooseImage({
					success(res) {
						_this.imageSrc = res.tempFilePaths[0]
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.cropper-content {
	width: 100%;
	min-height: 375px;
}
.cropper-config {
	padding: 10px 20px;
}
.uni-cropper-content {
	position: relative;
}
	.uni-cropper-crop-box {
		position: absolute;
		background: rgba(255,255,255,0.3);
	}
</style>
