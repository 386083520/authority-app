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
		<uni-section title="系统管理" type="line"></uni-section>
		<view class="grid-body">
			<uni-grid :column="4" :showBorder="false" @change="changeGrid">
				<uni-grid-item>
					<view class="grid-item-box">
						<uni-icons type="person-filled" size="30"></uni-icons>
						<text class="text">用户管理</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box">
						<uni-icons type="staff-filled" size="30"></uni-icons>
						<text class="text">角色管理</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box">
						<uni-icons type="color" size="30"></uni-icons>
						<text class="text">菜单管理</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box">
						<uni-icons type="settings-filled" size="30"></uni-icons>
						<text class="text">部门管理</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box">
						<uni-icons type="heart-filled" size="30"></uni-icons>
						<text class="text">岗位管理</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box">
						<uni-icons type="bars" size="30"></uni-icons>
						<text class="text">字典管理</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box">
						<uni-icons type="gear-filled" size="30"></uni-icons>
						<text class="text">参数管理</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box">
						<uni-icons type="chat-filled" size="30"></uni-icons>
						<text class="text">通知公告</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box">
						<uni-icons type="wallet-filled" size="30"></uni-icons>
						<text class="text">日志管理</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import UniSwiperDot from "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot";
	import UniGridItem from "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item";
	import UniIcons from "../../uni_modules/uni-icons/components/uni-icons/uni-icons";
	export default {
		components: {UniIcons, UniGridItem, UniSwiperDot},
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
			},
			changeGrid() {
				this.$modal.showToast('模块建设中~')
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
	.grid-body {
		.grid-item-box {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
			.text {
				margin-top: 5px;
				font-size: 13px;
			}
		}
	}
</style>
