var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file.
router.get("/", function(req, res){
    burger.selectAll(function(data){
        //var 
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result){
        res.json({id: result.insertId})
    })
})









// Export routes for server.js to use.
module.exports = router;
