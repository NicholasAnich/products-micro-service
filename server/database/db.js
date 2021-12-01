const Pool = require('pg').Pool;
const {DB_USER, DB_DATABASE, DB_PASSWORD, DB_PORT, DB_HOST} = require('../config');

const mydb = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
})

// mydb.query(`SELECT NOW()`, (err, res) => {
//   if (err) {
//     console.error(err)
//   } else {
//     console.log('Successfully Connected to PG...')
//     console.log('Last Saved At:' ,res.rows[0].now)
//   }
//   mydb.end()
// })

module.exports = mydb;

