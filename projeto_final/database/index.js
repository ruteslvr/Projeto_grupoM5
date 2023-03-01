//https://www.npmjs.com/package/mysql2

//Conectar com o arquivo ".env"

// get the client
const mysql = require('mysql2')

  // create the pool
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
});
  

module.exports = pool.promise()