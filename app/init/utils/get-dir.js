const fs = require('fs')
function getDir(path) {
    let fileList = {}
    const files = fs.readdirSync(path)
    for (let key in files) {
        if (files[key].indexOf('.') >= 0) {
            let newKey = files[key].split('.')[0]
            fileList[newKey] = `${path}${files[key]}`
        }
    }
    return fileList
}

module.exports = getDir