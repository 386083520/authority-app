import { login, getInfo } from '@/api/login'
import { setToken, getToken } from "@/utils/auth"
import storage from "@/utils/storage"
import config from '@/config'
import constant from "@/utils/constant";

const baseUrl = config.baseUrl

const user = {
    state: {
        token: getToken(),
        name: storage.get(constant.name),
        avatar: storage.get(constant.avatar)
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
            storage.set(constant.name, name)
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
            storage.set(constant.avatar, avatar)
        }
    },
    actions: {
        Login({commit}, userInfo) {
            const username = userInfo.username.trim()
            const password = userInfo.password
            const code = userInfo.code
            const uuid = userInfo.uuid
            return new Promise((resolve, reject) => {
                login(username, password, code, uuid).then(res => {
                    setToken(res.token)
                    commit('SET_TOKEN', res.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetInfo({commit}) {
            console.log('gsdsuccess')
            return new Promise((resolve, reject) => {
                getInfo().then(res => {
                    const user = res.user
                    const avatar = (user === null || user.avatar === '' || user.avatar === null) ? require('@/static/images/profile.jpg'): baseUrl + user.avatar
                    const username = (user === null || user.userName === '' || user.userName === null) ? '': user.userName
                    commit('SET_NAME', username)
                    commit('SET_AVATAR', avatar)
                    console.log('gsdgetInfo', res)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user
