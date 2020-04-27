const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

// create all routes and set up logic within routes

router.get("/", (request, response) => {
    burger.selectAll(function(data) {
      let hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      response.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", (request, response) => {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      request.body.burger_name, request.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      response.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", (request, response) => {
    let condition = "id = " + request.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: request.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return response.status(404).end();
      } else {
        response.status(200).end();
      }
    });
  });

module.exports = router;