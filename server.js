const nunjucks = require("nunjucks");
const express = require("express");
const server = express();

server.set("view engine", "html");

server.use(express.static("public"));

nunjucks.configure("Views", {
  express:server
})

server.get("/", function(req, res) {
    return res.render("home")
})

server.get("/sobre", function(req, res) {
  return res.render("sobre")
})

server.listen(4000);