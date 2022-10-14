const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cjsgotjd1@',
  port: '3306',
  database: 'myDB',
});

connection.connect();

module.exports = connection;
