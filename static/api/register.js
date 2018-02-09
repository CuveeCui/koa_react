import fetch from '../utils/fetch'

// 注册
function register(data) {
    return fetch({
        method: 'post',
        url: '/api/register',
        data
    })
}

export {
    register
}