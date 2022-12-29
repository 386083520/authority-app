<template>
	<view class="container">
		<view class="cropper-content">
			<view class="uni-cropper">
				<view class="uni-cropper-content">
					<image :src="imageSrc"></image>
					<view class="uni-cropper-crop-box" style="left: 20px;right: 20px;top: 20px;bottom: 20px">
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
	export default {
		data() {
			return {
				imageSrc: this.$store.getters.avatar
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
