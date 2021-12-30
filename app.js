const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home", {
        mainTitle: 'Biography'
    });
});

app.get("/bio", function(req, res){
    res.render("bio", {
        mainTitle: 'Biography'
    });
});

app.get("/resume", function(req, res){
    res.render("resume", {
        mainTitle: 'Resume'
    });
});

app.get("/press", function(req, res){
    res.render("press", {
        mainTitle: 'Press'
    });
});

app.get("/letter", function(req, res){
    res.render("letter", {
        mainTitle: 'Letter'
    });
});

app.get("/letter2", function(req, res){
    res.render("letter2", {
        mainTitle: 'Letter2'
    });
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
