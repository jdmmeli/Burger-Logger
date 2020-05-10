// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1Grondster43!",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting to db: " + err.stack);
    return;
  }
  console.log("connected as database id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
