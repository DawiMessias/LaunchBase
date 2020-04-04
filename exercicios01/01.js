const name = "David"
const peso = 69
const altura = 1.78

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log("Você esta acima do peso")
} else if (imc < 29.9) {
    console.log("Voce nao esta acima do peso")
}

