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
		}
	}
</script>

<style lang="scss">
.cropper-content {
	width: 100%;
	min-height: 375px;
}
.cropper-config {

}
.uni-cropper-content {
	position: relative;
}
	.uni-cropper-crop-box {
		position: absolute;
		background: rgba(255,255,255,0.3);
	}
</style>
