export default {
    msgError(content) {
        uni.showToast({
            title: content,
            icon: 'error'
        })
    },
    loading(content) {
        uni.showLoading({
            title: content,
            icon: 'none'
        })
    },
    closeLoading() {
        uni.hideLoading()
    },
    showToast(content) {
        uni.showToast({
            title: content,
            icon: 'none',
            duration: 2500
        })
    }
}
