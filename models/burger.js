const orm = require("../config/orm")

//Insert data into burger table. Takes a string with a burgername,
// and a value of 0 or 1 (true or false) for devoured
orm.insertOne()

// Gets all data from burgers table
orm.selectAll()

//Updates an entry in burger table. takes a string with which value you want to update, 
//a string with the new value, 
//and the id of the column you want to update
orm.updateOne()


module.exports = {
    update: orm.updateOne,
    selectAll: orm.selectAll,
    insert: orm.insertOne
}