import request from '@/utils/request'

export function login(username, password, code, uuid) {
    const data = {
        username,
        password,
        code,
        uuid
    }
    return request({
        url: '/login',
        method: 'post',
        data: data
    })
}

export function getCodeImg() {
    return request({
        url: '/captchaImage',
        method: 'get'
    })
}
