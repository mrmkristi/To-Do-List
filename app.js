//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const items = [];
const workItems = [];

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Rendering the home page
app.get("/", function(req, res) {
    const day = date.getDate();
    res.render("index", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res) {
    const item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/"); 
    }

});

// Work items page
app.get("/work", function(req, res) {
    res.render("index", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res) {
    const item = req.body.newItem;
    workItems.push.item;
    res.redirect("/work");
})

// Port 8080
app.listen(8080, function() {
    console.log("Server started on port 8080.");
});