<template>
	<view class="container">
		<view class="cropper-content">
			<view class="uni-cropper">
				<view class="uni-cropper-content" :style="'width:' + cropperInitW + 'px;height:' + cropperInitH + 'px;'">
					<image :src="imageSrc" :style="'width:' + cropperInitW + 'px;height:' + cropperInitH + 'px;'"></image>
					<view class="uni-cropper-crop-box" :style="'left:'+cutL+'px;top:'+cutT+'px;right:'+cutR+'px;bottom:'+cutB+'px'">
						<view class="uni-cropper-view-box">
							<view class="uni-cropper-dashed-h"></view>
							<view class="uni-cropper-dashed-v"></view>
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
	let INIT_DRAG_POSITION = 100
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
		onReady() {
			this.loadImage()
		},
		methods: {
			getImage() {
				var _this = this
				uni.chooseImage({
					success(res) {
						_this.imageSrc = res.tempFilePaths[0]
						_this.loadImage()
					}
				})
			},
			loadImage() {
				var _this = this
				uni.getImageInfo({
					src: _this.imageSrc,
					success(res) {
						_this.cutL = Math.ceil(INIT_DRAG_POSITION/2)
						_this.cutR = _this.cutL
						_this.cutT = Math.ceil(INIT_DRAG_POSITION/2)
						_this.cutB = _this.cutT
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
		.uni-cropper-view-box {
			position: relative;
			width: 100%;
			height: 100%;
			outline: 1px solid #69f;
			outline-color: rgba(102, 153, 255, 0.75);
			.uni-cropper-dashed-h {
				position: absolute;
				top: 33.3333333%;
				width: 100%;
				height: 33.3333333%;
				border-top: 1px dashed rgba(255,255,255, 0.5);
				border-bottom: 1px dashed rgba(255,255,255, 0.5);
			}
			.uni-cropper-dashed-v {
				position: absolute;
				left: 33.3333333%;
				height: 100%;
				width: 33.3333333%;
				border-left: 1px dashed rgba(255,255,255, 0.5);
				border-right: 1px dashed rgba(255,255,255, 0.5);
			}
		}
	}
</style>
