import { getToken } from "@/utils/auth"

const loginPage = '/pages/login'
const whiteList = [loginPage]
function checkWhite(url) {
    const path = url.split('?')[0]
    return whiteList.indexOf(path) !== -1
}

let list = ['reLaunch', 'switchTab']
list.forEach(item => {
    uni.addInterceptor(item, {
        invoke(to) {
            if(getToken()) {
                return true
            }else {
                if(checkWhite(to.url)) {
                    return true
                }
                uni.reLaunch({url : loginPage})
                return false
            }
        }
    })
})
