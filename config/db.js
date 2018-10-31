const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rest_api_example'
})

db.connect( (err) => {
  if (err) {
    console.log(err)
    throw err
  }
})

module.exports = db