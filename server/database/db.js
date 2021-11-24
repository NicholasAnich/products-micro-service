const Pool = require('pg').Pool;

const mydb = new Pool({
  user: 'nick',
  host: 'localhost',
  database: 'products',
  password: 'hawaiian5',
  port: 5432,
})

module.exports = mydb;