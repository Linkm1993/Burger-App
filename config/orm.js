const connection = require("./connection")

const orm = {
    selectAll: function(tableInput, cb) {
        let queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            console.table(result);
            });
    },

    insertOne: function (name, eaten, cb){
        let queryString = `INSERT INTO burgers(burgername,devoured)
                           VALUES('${name}',${eaten})`
        connection.query(queryString, (err, result) => {
            if(err){
                throw err;
            }
            console.table(result)
        })
    },

    updateOne: function (set, value, where){
        if (typeof value === 'string'){
            let queryString = `UPDATE burgers SET ${set}='${value}' WHERE id=${where}`
            connection.query(queryString, (err, result) => {
                if (err){
                    throw err
                }
                console.table(result)
            })
        }
        else{
            let queryString = `UPDATE burgers SET ${set}=${value} WHERE id=${where}`
            connection.query(queryString, (err, result) => {
                if (err){
                    throw err
                }
                console.table(result)
            })
        }

    }

}

module.exports = orm