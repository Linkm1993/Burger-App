const connection = require("./connection")

const orm = {
     selectAll: function(tableInput, res) {
        var queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) {
            throw err;
            }
            console.table(result);
            });
    }

}

module.exports = orm