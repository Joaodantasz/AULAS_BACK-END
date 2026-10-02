// ======================================================
// SELECIONANDO ELEMENTOS  DOM
// ======================================================

// selecionando por ID
let titulo = document.getElementById("titulo")
let subtitulo = document.getElementById("subtitulo")
let paragrafo = document.getElementById("paragrafo")
let imagemteste = document.getElementById("imagemteste")

// Selecionado por Classe
let caixas = document.getElementsByClassName("Box")

// Mostrar no console.log()
console.log(titulo)
console.log(caixas)
console.log(imagemteste)

// ======================================================
// FUNÇÃO PARA ALTERAR O CONTEÚDO
// ======================================================

function alterar() {
    titulo.innerText = "Jarvis dominou tudo! 🤖 "
    subtitulo.innerText = "Só que não rsrs"
    paragrafo.innerText = " mas ainda vai dominar "
}

// Alterando elementos da classe
caixas[0].innerText = "Primeiro paragrafo alterado"
caixas[1].innerText = "Segundo paragrafo alterado"

// Alterando imagem
imagem.src = "./img/spider.jpg"

// não funcionou :( 