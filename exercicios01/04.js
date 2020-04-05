const programador = {
  nome: "Diego",
  idade: 20,
}

const tecnologia = {
  especialidades: []
}

const ferramentas = {
  nome: "C++", especialidade: "Desktop"
}

tecnologia.especialidades.push(ferramentas);

console.log(`
O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${tecnologia.especialidades[0].nome} com especialidade em ${tecnologia.especialidades[0].especialidade}`)

//Comentar a linha de cima 

const programador = {
  nome: "Mayk",
  idade: 35,
  tecnologias:  [
      { nome: 'JavaScript', especialidade: 'Desktop' }, 
      { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
