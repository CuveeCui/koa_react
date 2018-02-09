const { join } = require('path')
const getContents = require('./utils/get-content')
const db = require('./db')
const getInitSql = async () => {
    console.log(`开始初始化数据库....`)
    const sqlList = getContents(join(__dirname,'/sql/'))
    for (let key in sqlList) {
        if (sqlList[key]) {
            try {
                await db(sqlList[key])
                console.log(`数据库${key}执行成功`)
            } catch(err) {
                console.error(`数据库${key}执行失败：${err}`)
                process.exit(1)
            }
        }
    }
    process.exit()
}
getInitSql()