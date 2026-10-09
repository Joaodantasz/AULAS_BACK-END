// =====================================
// FRONT - END = consome nossa API local
// =====================================

// Este arquivo roda no navegador. Ele faz requisições para nossa API Node.js e mostra os dados na tela.

// =====================================
// ELEMENTOS DO HTML
// =====================================

// Foto do cachorro
const dogImage = document.getElementById("dogImage");

// Nome raça
const breedName = document.getElementById("breedName");

// cachorro aleatório
const randomBtn = document.getElementById("randomBtn");

// botão que busca cachorro por raça
const searchBtn = document.getElementById("searchBtn");

// campo de texto onde o usuário digita a raça
const breedInput = document.getElementById("breedInput");

// area onde fica a imagem do cachorro
// usamos querySeelector porque é uma classe (.dog-area)
const dogArea = document.querySelector(".dog-area");

// =====================================
// URL DA API
// =====================================

const API = "http://localhost:3000/api/cachorros";

// =====================================
// FUNÇÃO PRINCIPAL
// =====================================

async function buscaCachorro(url) {
    // adiciona a classe "loading"
    // normalmente usada para mostrar animação de carregamento
    dogArea.classList.add("loading");

    try {
        // faz requisição HTTP para a API
        const response = await fetch(url);
        // converte a resposta para JSON
        const data = await response.json();
        // mostra no console a resposta da API
        console.log("resposta da API:", data);

        // Vamos verificar se a API retornou sucesso ou erro
        if (data.status === "error") {
        // mostra a mensagem de erro na tela

        // breedName - Elemento HTML que mostra o nome da raça

        // textContent - propriedade que define o conteúdo de texto do elemento

        // data - Objeto que contém a resposta da API

        //.message - Propriedade do objeto data que contém a mensagem de erro

        // breedName.textContent = data.message;

        breedName.textContent = data.message;
        // remove a imagem
        dogImage.src = "";
        // execução da função
        return;
        }

        // coloca a imagem do cachorro na tela
        // o src define qual imagem será exibida
        dogImage.src = data.message;

        // extrai o nome da raça da URL da imagem
        // exemplo da URL:
        // http://localhost:3000/fotos/husky-1.jpg

        // separa a URL em partes uasando "/"
        const parts = data.message.split("/");

        // pega a posição 5 do array
        // que corresponde ao nome da raça
        const raca = partes[5]

        // coloca a primeira letra maiúscula
        // ex: husky -> Husky
        breedName.textContent = 
        // raca.charAt(0) pega a primeira letra da raça

        // .toUpperCase() transforma a letra em maiúscula

        // raca.slice(1) pega o restante da palavra (a partir da posição 1)

        // + concatena as duas partes
    raca.charAt(0).toUpperCase() + raca.slice(1);

    } catch (error) {
        // se der erro na requisição ou o servidor esteja desligado, mostra no console
        console.erro(erro);

        // mostra mensagem de erro na tela
        breedName.textContent = "📴 servidor offline - rode: node server.js";

        // remove a mensagem na tela
        dogImage.src = "";

    } finally {
        // remove a classe "loading" quando a requisição terminar, independente de ter dado certo ou errado
        dogArea.classList.remove("loading");
    }
}
