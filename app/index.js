const Koa = require('koa')
const app = new Koa()
const path = require('path')
const static = require('koa-static')

app.use(static(
    path.join(__dirname,'../','dist')
))
console.log(process.env.PORT)
const port = process.env.PORT || 8109
app.listen(port)

// 注册：
// 登录：