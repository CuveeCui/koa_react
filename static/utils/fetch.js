import axios from 'axios'


let fetch = axios.create({
    baseURL: 'http://127.0.0.1:',
    timeout: 30000
})

fetch.interceptors.request.use(config => {

}, err => {

})

fetch.interceptors.response.use(res => {

}, err => {

})

export default fetch

