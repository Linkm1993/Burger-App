const mysql = require("mysql")

//connection to local database
const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "RavexSam741",
    database: "burger_db"
  });




module.exports = connection
