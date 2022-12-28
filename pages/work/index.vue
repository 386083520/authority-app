<template>
	<view>
		<uni-swiper-dot :info="bannerData" :current="current">
			<swiper @change="changeSwiper" class="swiper-box">
				<swiper-item v-for="(item,index) in bannerData" :key="index">
					<view class="swiper-item">
						<image :src="item.image"></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
</template>

<script>
	import UniSwiperDot from "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot";
	export default {
		components: {UniSwiperDot},
		data() {
			return {
				current: 0,
				bannerData: [
					{
						image: '/static/images/banner/banner01.jpg'
					},
					{
						image: '/static/images/banner/banner02.jpg'
					},
					{
						image: '/static/images/banner/banner03.jpg'
					}
				]
			};
		},
		methods: {
			changeSwiper(e) {
				console.log('gsde', e)
				this.current = e.detail.current
			}
		}
	}
</script>

<style lang="scss">
	.swiper-box {
		height: 150px;
		.swiper-item {
			display: flex;
			flex-direction: column;
			height: 150px;
		}
		image {
			width: 100%;
		}
	}
</style>
