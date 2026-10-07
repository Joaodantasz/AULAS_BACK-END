 // JSON significa Javascript OBject Notation e é um formato de representação e troca de dados.

 JSON É COMO FICHA DE CADASTRO.

 FICHA FISICA:              JSON :
 Nome: João                 "Nome": "João"
 Idade: 25                  "Idade": 25
 Cidade: SP                 "cidade" : "SP"

 É um formato para ORGANIZAR DADOS que TODO MUNDO entende (qualquer linguagem)

 <! -- ================================================================================= -->

 {
    "cachorro":{
        "nome": "Rex",
        "idade": 3,
        "raca": "labrador",
        "vacinado": "true",
        "peso": 25.5,
        "brinquedos": ["bola","osso","frisbee"],
        "dono": {
            "nome": "João",
            "telefone": "11 99999-9999"
        }
    }
}


 <! -- ================================================================================= -->
 EXPLICAÇÃO
 <! -- ================================================================================= -->

 // STRING (texto) - sempre com aspas
 "nome": "Rex"

 // NUMBER (número) - sem aspas
 "idade": 3,
 "peso": 25.5,

 // ARRAY (lista) - com colchetes
 "brinquedos": ["bola","osso","frisbee"]

 // OBJECT (objeto) - com chaves
 "dono": {
            "nome": "João",
            "telefone": "11 99999-9999"
        }

// NULL (vazio)
"dataFalecimento": null