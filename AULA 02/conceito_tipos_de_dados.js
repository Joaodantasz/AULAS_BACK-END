// Tipos de daados
// No javascript, tudo que armazaneamos em uma variável é considerado um tipo de dado, esses tipos de dados definem o que fazer com os valores armazenados, como manipulá-los e como eles se comportam. Existem dois tipos de dados no JavaScript: primitivos e não primitivos.

// Principais tipos de dados

// 1. String (texto)
// 2. Number (número)
// 3. Boolean (verdadeiro ou falso)
// 4. Undefined (não definido)
// 5. Null (nulo)
// 6. Object (objeto)
// 7. Symbol (símbolo)
// 8. Array (lista de valores)

// STRINGS (Textos)
// uma string é um texto, que pode ser definido entre aspas simples, aspas duplas ou crases. As strings podem conter letras, números, símbolos e espaços.
let nome = "Jarvis"
let mensagem = 'Bregião rei do mega brain'

console.log(nome)
console.log(mensagem)

let saudacao = "olá, " + nome + "!"
console.log(saudacao)

// typeof é um operador que retorna o tipo de dado de uma variável

console.log(typeof nome)
console.log(typeof mensagem)
console.log(typeof saudacao)

let soma = 10 + 5
console.log(soma)
console.log(typeof soma)

// Boolean (verdadeiro ou falso)
let maiorDeIdade = true
let menorDeIdade = false

console.log(maiorDeIdade) // exibe true
console.log(menorDeIdade)// exibe false

let idade = 20
let podeDirigir = idade >= 18
console.log(podeDirigir)