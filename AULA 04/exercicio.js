// EX 1
let temperatura = 14
  if (temperatura < 15) {
        console.log("Muito frio")

} else if (temperatura >= 15 && temperatura <=21) {
    console.log("Frio")

  }  else if (temperatura >= 21 && temperatura <=28) {
    console.log("Agradável")

  } else if (temperatura > 28) {
    console.log("Muito quente")
  }

  // EX 2
  let nota = 6

    if (nota >= 9) {
        console.log("Conceito A")
    } if (nota >= 7 && nota <= 8) {
        console.log("Conceito B")
    } if (nota >= 5 && nota <= 6) {
        console.log("Conceito C")
    } if (nota >= 3 && nota <= 4) {
        console.log("Conceito D")
    }

    // EX 3
    let dia = 3

    if (dia === 1){
        console.log("Domingo")

    } else if (dia === 2) {
            console.log("Segunda-Feira")

    } else if (dia === 3) {
            console.log("Terça-Feira")

    } else if (dia === 4) {
            console.log("Quarta-feira")

    } else if (dia === 5) {
            console.log("Quinta-Feira")

    } else if (dia === 6) {
            console.log("Sexta-Feira")

    } else if (dia === 7) {
            console.log("Sábado")
    }

    // Desafio - IMC

let peso = 55;
let altura = 1.67;

let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Abaixo do peso")

} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal")

} else if (imc >= 25 && imc < 30) {
  console.log("Sobrepeso")

} else {
  console.log("Obeso")
}