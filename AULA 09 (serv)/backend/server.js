// ===================================
// NOSSA API DE CACHORROS
// ===================================
//
// Agora as fotos não são mais baixadas automaticamente
// elas DEVEM existir manualmente na pasta
// data/fotos
//====================================

// ROTAS:
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raca

// Importar o framework Express para criar o servidor
const express = require("express");
// importar o CORS para permitir requisições de outros dominios (ex: frontend)
const cors = require("cors");
// Importar o módulo de arquivos do NODE
const fs = require("fs");
// Importa utilidade para trabalhar cpm caminhos de arquivos
const path = require("path");
// Importa o arquivo JSON que contém as raças e fotos dos cães
const cachorros = require("./data/dogs.json");
// criar a aplicação com o Express
const app = express();
// definir  a porta onde o servidor vai funcionar
const port = 3000;
// Habilitar o uso do cors
app.use (cors());

//====================================
// SERVIR ARQUIVOS ESTÁTICOS
//====================================

// Nós falamos para o express
// "Tudo  o que estiver na pasta data/fotos pode ser acessado pela URL /fotos"
// Exemplo:
// htt://localhost:3000/fotos/husky/1.jpg

app.use ("/fotos",
    express.static (
    path.join(__dirname, "data/fotos") // caminho real da pasta do servidor
    )
)

//====================================
// FUNÇÃO AUXILIAR
//====================================

// função que recebe um array e retorna um item aleatório dele
function sortear(array) {
    // gera um número aleatório entre 0 e o tamanho do array

    // array.length - conta quantos itens existem na lista

    // math.random() - sorteio um número decimal entre 0 e 1

    // math.random * array.length - Multiplia o número sorteado pela quantidade de itens

    // math.floor() - tira a parte decimal, arredondando pra baixo

    const i = Math.floor(Math.random() * array.lenght)
    // const i = guarda a posição na variável i
    // retorna o item sorteado
    return array [i];
}

//====================================
// ROTAS DA API
//====================================

// ROTA 1 - cachorro aleatório
app.get("/api/cachorros/aleatorio", (req, res) => {
// req - requisição (request) é o pedido que chega ao servidor, por exepmlon o navegador pede uma foto de cachorro

// res - response (resposta) éo que o servidor envia de volta, por exemplo, o endereço da foto do cachorro

// pegar todas as fotos de todas as raças

// object.values pega os valores do objeto

// flat transforma em um único array
const todasAsFotos = Object.values(cachorros).flat();
})

// sorteia uma foto aleatorio
const item = sortear(todasAsFotos)

// responde para o cliente em formato JSON
res.json({
    // status da resposta
    status: "succes",
    // URL da imagem que foi sorteada
    message: `http://localhost:${PORT}/fotos/${item}`
});

// ROTA 2 - cachorro por raça
// exemplo de acesso:
// http://localhost:3000/api/cachorros/husky

app.get("/api/cachorros/:raca", (req, res) => {

        // pega o parametro da URL (ex: husky)
        const raca = req.params.raca.toLocaleLowerCase();
        // params = contém os parâmetros definidos na URL da rota
        //.raca = acessa o parâmetro chamado raca
        //.toLowercase() = transforma todas as letras em minúsculas
        if (!cachorros[raca]){
        // cachorros[raca]: procura a raça dentro do objeto *cachorros*
        // !: significa não: nesse caso, verifica se a raça não existe ou se seu valor é falso
        // se não existir, retorna erro 404
        res.status(404).json({
            status: "error",
            message: `Raça "${raca}" não encontrada`
        });

        // encerra a execução da rota
        return;
        
    }

    // sorteia uma foto da raça solicitada
    const item = sortear(cachorros[raca]);

    // retorna a resposta em JSON
    rmSync.json({
        status: "succes",
        message: `http://localhosta:${PORT}/fotos/${item}`
    });

});