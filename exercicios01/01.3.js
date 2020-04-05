// console.log(` ${usuarios[0].nome} Trabalha com ${usuarios[0].tecnologias}`)
// console.log(`${usuarios[1].nome} Trabalha com ${usuarios[1].tecnologias}`)
// console.log(`${usuarios[2].nome} Trabalha com ${usuarios[2].tecnologias}`)

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function checaSeUsuarioUsaCSS(usuario) {
    for (let i = 0; i < usuarios.length; i++) {
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i]);

        if (usuarioTrabalhaComCSS) {
            console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
        } else {
            console.log(`O usuario ${usuarios[i].nome} não trabalha com CSS `)
        }
        console.log(i)
    }
}
