import fetch from '../utils/fetch'

// 登录
function login(data) {
    return fetch({
        method: 'post',
        url: '/api/login',
        data
    })
}

export {
    login
}