import { login } from '@/api/login'
const user = {
    state: {

    },
    mutations: {

    },
    actions: {
        Login({commit}, userInfo) {
            const username = userInfo.username.trim()
            const password = userInfo.password
            const code = userInfo.code
            const uuid = userInfo.uuid
            return new Promise((resolve, reject) => {
                login(username, password, code, uuid).then(res => {
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user
