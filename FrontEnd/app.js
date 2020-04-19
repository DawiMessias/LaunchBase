const express = require("express");
const nunjuck = require("nunjucks");
const server = express();

server.listen(4001);

server.set("view engine njk")

server.get("/Courses", function(req, res) {
  return res.render("")
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.get("/About", function(req, res) {
  return res.render("")
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.get("/", function(req, res) {
  res.render("")
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});