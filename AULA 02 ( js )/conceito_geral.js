// INICIO BACK-END - JAVASCRIPT

//VARIÁVEIS

//ANTIGO!!!!!, pode ser redeclarado e mudar o valor.
var idade = 10
var idade = 20 // não gera erro

// MAIS MODERNO, PODE MUDAR DE VALOR MAS NÃO PODE SER REDECLARADO
let nome = "João"
nome = "Arthur"; // permitido
// EXEMPLO: let nome = "jose" > erro, usar apenas "nome" para redefinir

//conts é fixo, não pode mudar de valor
const pi =3.14;
// pi = 40; > erro, não pode haver alteração em "const"

// FORMAS DE ESCREVER UM CÓDIGO

// CAMEL CASE -- * A mais famosa
// - A primeira palavra minúscula e palavras seguintes começam com minúscula

// function = define a função de algo
//let nomeCompleto; let idadeUsuario; functionCalcularIdade(){}

// PASCAL CASE
// - Todas as palavras começam com letra maiúscula

// class UsuarioSistema {
//  constructor (nome,idade) {
//      this.nome = nome
//      this.idade = idade
//    }
// };

//  SNAKE CASE
// - Todas as palavras são minúsculas e separadas por underline

// let nome_completo; let idade_usuario; function_calcular_idade(){}