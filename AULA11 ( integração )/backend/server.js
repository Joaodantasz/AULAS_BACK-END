// =======================================
// Server.js - BACK END COMPLETO
// =======================================

// PARTE 1: Importar as ferramentas
const express = require('express') // biblioteca para criar o servidor
const path = require('path') // ajuda a montar caminhos de pastas
const { DatabaseSync } = require('node:sqlite') // banco SQLite (já vem dentro do node!)

// PARTE 2: Criar o servidor e abrir o banco
const app = express(); // cria o servidor
const banco = new DatabaseSync(path.join(__dirname, 'tarefas.db')); // abre o banco (se não existir, cria o arquivo). --------> __dirname = pasta deste arquivo

// cria a tabela "tarefas" se ela ainda não existir

// INTEGER = armazenar números inteiros (positivos, negativos ou zero)
banco.exec(`
    CREATE TABLE IF NOT EXISTS tarefas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        concluida INTEGER DEFAULT 0
    )
`);

// PARTE 3 - Configurar o servidor (os famosos middlewares)
// app.use: "TODO pedido que chegar, passe primeiro por aqui"

app.use(express.json()); // faz o servidor entender JSON
app.use(express.static(path.join(__dirname, '..', 'public'))); // entrega a página da pasta "public"

// =======================================
// PARTE 4: ROTAS (a API)
// =======================================
// ROTA: a combinação do método + endereço
// API: é o conjunto dessas rotas
//
// toda rota recebe 2 coisas (SEMPRE NA ORDEM ABAIXO)
// requisição = o PEDIDO que chegou
// resposta = o que vamos devolver para o front.
//
//
// Operação | método HTTP | Endereço | COMANDO SQL
// -----------------------------------------------
// create  | POST      | /tarefas      | INSERT
// Read    | GET       | /tarefas      | SELECT
// Update  | PUT       | /tarefas/:id  | UPDATE
// Delete  | DELETE    | /tarefas/:id  | DELETE


// ================= CRIAR =====================
// POST /tarefas --> salvar uma tarefa nova no banco de dados
app.post('/tarefas', (requisicao, resposta) => {
    const titulo = requisicao.body?.titulo; // texto enviado pela página

    // se o titulo estiver vazio ou não for texto, avisa que deu erro (400) e para aqui
    if (typeof titulo !== 'string' || !titulo.trim()) {
        return resposta.status(400).json({ erro: 'Digite um título válido' });
    }

    // INSERT : adicionar uma linha na tabela. lembre-se os "?" são trocados pelo valor do título
    banco.prepare('INSERT INTO tarefas (titulo) VALUES (?)').run(titulo.trim());

    resposta.status(201).json({ ok: true }); // responde que deu certo e que a tarefa foi criada.
})

// PASSO A PASSO do que acontece no CREATE
// 1) o usuário digita no campo e clica em "adicionar" no navegador
// 2) O front manda um POST para /tarefas com {"titulo":"..."}
// 3) Chega aqui no server. O express escolhe esta rota porque o método POST e o endereço é /tarefas
// 4) "requisicao.body.titulo" é o texto que o front mandou, lembrando só funciona por causa do express.json() que está lá em cima!
// 5) Validação: se vier vazio ou não for texto, respondemos com status 400 (= "pedido errado") em um JSON de erro, NUNCA confie no front, sempre valide aqui.
// 6) Insert em tarefas
// 7) Resposta

// ===============================================
// GET /tarefas -> devolve todas as tarefas
app.get('/tarefas', (requisicao, resposta) => {
    // SELECT: busca todas as linhas da tabela (as mais novas primeiro)
    const tarefas = banco.prepare('SELECT * FROM tarefas ORDER BY id DESC').all();

    resposta.json(tarefas);
});

// ================= ATUALIZAR ==================
// PUT /tarefas/5 --> muda a tarefa de id 5 (marca como feita ou pendente)
app.put('/tarefas/:id', (requisicao, resposta) => {
    const id = Number(requisicao.params.id); // o número que veio do endereço 5
    const concluida = requisicao.body?.concluida; // 0 ou 1, enviado pela página

    // verifica se o ID é um número inteiro positivo
    if (!Number.isInteger(id) || id <= 0) {
        return resposta.status(400).json({ erro: 'ID inválido' });
    }

    // verifica se concluida recebeu somente 0 ou 1
    if (concluida !== 0 && concluida !== 1) {
        return resposta.status(400).json({
            erro: 'O campo concluida deve ser 0 ou 1'
        });
    }

    // UPDATE: alterar a linha que tem o ID
    const resultado = banco.prepare(
        'UPDATE tarefas SET concluida = ? WHERE id = ?'
    ).run(concluida, id);

    // verifica se alguma tarefa foi encontrada e atualizada
    if (resultado.changes === 0) {
        return resposta.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    resposta.json({ ok: true });
});

// ================= DELETE ==================
// DELETE /tarefas/5 ---> apaga a tarefa de id 5
app.delete('/tarefas/:id', (requisicao, resposta) => {
    const id = Number(requisicao.params.id);

    // verifica se o ID é um número inteiro positivo
    if (!Number.isInteger(id) || id <= 0) {
        return resposta.status(400).json({ erro: 'ID inválido' });
    }

    // DELETE : remove a linha que tem esse id
    const resultado = banco.prepare(
        'DELETE FROM tarefas WHERE id = ?'
    ).run(id);

    // verifica se alguma tarefa foi encontrada e apagada
    if (resultado.changes === 0) {
        return resposta.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    resposta.json({ ok: true });
});

// --------------------------------------------
// PARTE 5 - Ligar o servidor
// --------------------------------------------
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
    console.log();
});
