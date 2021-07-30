const msyql = require('mysql')

const conn = msyql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: 'admin',
    database: 'petshop'
})

module.exports = conn