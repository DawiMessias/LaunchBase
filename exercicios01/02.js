const name = "David"
const sexo = "M"
const idade = 48
let contribuicao = 23
let aposentado = false

const name2 = "Lara"
const sexo2 = "F"
const idade2 = 76
let contribuicaoM = 25
let aposentada = true

const SomaDaContribuicaoHomen = contribuicao + idade
const SomaDaContribuicaoMulher = contribuicaoM + idade2

const homemAposentadoria = SomaDaContribuicaoHomen > 95 && contribuicao >= 35  && sexo == "M"
const mulherAposentadoria = SomaDaContribuicaoMulher > 85 && contribuicaoM >= 30 && sexo == "F"


if (homemAposentadoria || mulherAposentadoria) { 
     console.log(`${name +  name2}Voce precisa contribuir um pouco mais`)
} else {
    console.log(`${name +  name2} Você ainda não pode se aposentar` )
}
