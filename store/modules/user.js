import { login, getInfo } from '@/api/login'
import { setToken, getToken } from "@/utils/auth"

const user = {
    state: {
        token: getToken()
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
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
