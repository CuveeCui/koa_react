const fs = require('fs')
const getDir = require('./get-dir')
function getContents(path) {
    const dirList = getDir(path)
    let contentList = {}
    for (let key in dirList) {
       let sqls = fs.readFileSync(dirList[key], 'utf-8')
       if (sqls.indexOf(';') >= 0) {
           let sqlsArr = sqls.split(';')
           for (let item in sqlsArr) {
               contentList[key + item] = sqlsArr[item].trim()
           }
       }
    }
    return contentList
}

module.exports = getContents