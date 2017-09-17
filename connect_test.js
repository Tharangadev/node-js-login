var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'node_js'
});

connection.connect();

connection.query('SELECT * from `users`', function (error, results, fields) {
  
});

connection.end();