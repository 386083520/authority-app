import constant from "./constant";
let storageKey = 'storage_data'
let storageNodeKeys = [constant.avatar, constant.name]
const storage = {
    set: function (key, value) {
        if(storageNodeKeys.indexOf(key) != -1) {
            let tmp = uni.getStorageSync(storageKey)
            tmp = tmp ? tmp : {}
            tmp[key] = value
            uni.setStorageSync(storageKey, tmp)
        }
    },
    get: function (key) {
        let storageData = uni.getStorageSync(storageKey) || {}
        return storageData[key] || ''
    }
}
export default storage
