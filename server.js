const nunjucks = require("nunjucks");
const express = require("express");
const server = express();

server.set("view engine", "njk");

server.use(express.static("public"));

nunjucks.configure("Views", {
  express:server,
  autoescape: true,
  watch: true,
})

server.get("/", function(req, res) {
     return res.render("home")
})

server.get("/cursos", function(req, res) {
  return res.render("cursos")
})

server.get("/sobre", function(req, res) {
  return res.render("sobre")
})

server.listen(4000);

