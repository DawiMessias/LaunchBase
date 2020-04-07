// console.log(` ${usuarios[0].nome} Trabalha com ${usuarios[0].tecnologias}`)
// console.log(`${usuarios[1].nome} Trabalha com ${usuarios[1].tecnologias}`)
// console.log(`${usuarios[2].nome} Trabalha com ${usuarios[2].tecnologias}`)

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

//const userCSS = usuarios.filter(user => user.tecnologias.includes("CSS")) 
//Assim também percorre o Array e retorna quem contém "CSS".
for ( let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

function checaSeUsuarioUsaCSS(usuario) {
    for ( let tecnologia of usuario.tecnologias) {
        if ( tecnologia == "CSS")
            return true
    }

    return false
}


for ( let i = 0; i < usuarios.length; i++) {
    const usuarioTrablhaComCss = checaSeUsuarioUsaCSS(usuarios[i])

    if ( usuarioTrablhaComCss) {
        console.log(`O usuario ${usuarios[i].nome} trabalha com CSS`)
    }


}
