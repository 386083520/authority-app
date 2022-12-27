import config from '@/config'
import { toast } from '@/utils/common'
const baseUrl = config.baseUrl
const request = config => {
    return new Promise((resolve, reject) => {
        uni.request({
            timeout: 10000,
            method: config.method || 'get',
            url: baseUrl + config.url,
            data: config.data
        }).then(response => {
            let [error, res] = response
            if(error) {
                toast('后端接口异常')
                reject('后端接口异常')
            }
            const code = res.data.code || 200
            const msg = res.data.msg
            if(code !== 200) {
                toast(msg)
                reject(code)
            }
            resolve(res.data)
        })
    })
}
export default request
