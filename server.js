const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const content = require("./data")


server.listen(4002);

server.set("view engine", "njk");

server.use(express.static("public"));

nunjucks.configure("Views", {
  express:server,
  autoescape: false,
  watch: true,
})

server.get("/", function(req, res) {
  
  return res.render("home",)
})

server.get("/cursos", function(req, res) {
  return res.render("cursos", {items: content })
})

server.get("/sobre", function(req, res) {
  const sobre = {
    link: [
      { github: "Github", url: "https://github.com/Rocketseat"},
      { github: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br"},
      { github: "Facebook", url: "https://pt-br.facebook.com/rocketseat/"},
    ]
  }

  return res.render("sobre", { sobre })
})

server.get("/cursos/:id", function(req, res) {
  const id = req.params.id;

  return res.send(`O id fornecido na rota é: ${id}`)
})

