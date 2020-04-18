const nunjucks = require("nunjucks");
const express = require("express");
const server = express();

server.set("view engine", "html");

nunjucks.configure("FrontEnd", {
  express:server
})

server.get("/", function(req, res) {
    return res.send("Hi!")
})

server.listen(4000, function() {
  console.log("Hello estou no Ar")
});