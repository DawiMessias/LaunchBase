const express = require("express");
const nunjucks = require("nunjucks");

const server = express();


server.listen(4002);

server.set("view engine", "njk");

server.use(express.static("public"));

nunjucks.configure("Views", {
  express:server,
  autoescape: false,
  watch: true,
})

server.get("/", function(req, res) {
     return res.render("home")
})



server.get("/cursos", function(req, res) {
  return res.render("cursos")
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.get("/sobre", function(req, res) {
  return res.render("sobre")
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.get("/cursos/:id", function(req, res) {
  const id = req.params.id;

  return res.send(`O id fornecido na rota é: ${id}`)
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});
