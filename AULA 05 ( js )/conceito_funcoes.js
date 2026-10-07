// FUNÇÕES EM JAVA SCRIPT

// O que é uma função?
// Uma função é um bloco de código reutilizável, criado para executar uma tarefa específica

// Analogia SIMPLES
// você vai colocar valores (parâmetros)
// Ela processa e devolve um resultado (return)

//---------------------------------------------------------
// Estrutura básica de uma função
//---------------------------------------------------------

//function nomeDaFuncao (parametro1, parametro2)
//código que sera executado
//return resultado;
//}

// function --> palavra-chave
//nomeDaFuncao --> nome da função
// parâmetros --> valores q a função recebe
// return --> valor q a função devolve

// 5 EXEMPLOS

// 1- somar dois números
function somar(a, b){
    return a + b
}
console.log(somar(2,15))
 // usar nome da função no console.log + os numeros para somar
 

 // 2 - converter real para dólar
 function realParaDolar(valorReal, cotacao){
    return valorReal / cotacao
 }
 console.log(realParaDolar(10,5.20).toFixed(2))


 // 3 - converter real para dólar
 function dolarParaReal (valorDolar, cotacaoReal){
 return valorDolar * cotacaoReal
 }
 console.log(dolarParaReal(5.20,10))


 // 4 - Aumento de salário (25%)
 function aumento (salario, bonus){
 return salario + (salario * 0.25)
 }
 console.log("Você recebeu um aumento de 25%, seu novo salário é " + aumento(1200,0.25))
 

 // 5 - verifique se é par ou ímpar
let numero = 15
    if (numero % 2 === 0) {
        console.log("Par")
    } else {
console.log("ímpar")
   }
