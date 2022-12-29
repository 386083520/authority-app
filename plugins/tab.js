export default {
    reLaunch(url) {
        return uni.reLaunch({
            url: url
        })
    },
    navigateTo(url) {
        return uni.navigateTo({
            url: url
        })
    }
}
