const mysql = require('mysql')
const env = process.env
let sql = require('../config/sql')
const pool = mysql.createPool({
    host: env.DB_HOST || sql.DB_HOST,
    user: env.DB_USER || sql.DB_USER,
    port: env.PORT || sql.DB_PORT,
    password: env.DB_PASSWORD || sql.DB_PASSWORD,
    database: env.DB_DATABASE || sql.DB_DATABASE
})

const db = (sql, values) => {
    return new Promise((resolve,reject) => {
        pool.getConnection((err,connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows, field) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = db