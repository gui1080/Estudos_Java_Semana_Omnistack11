//NODE
//npm init -y (iniciou o projeto)
//npm install express
//npm install nodemon -D (dependencia de Dev)
//npm start (setado no package.json no "start")
//node index.js (roda)
//npm install knex -> npm install sqlite3
//npx knex init (criou o knexfile.js)
//npx knex migrate:make create_ongs (criar migration apos atualizar o knexfile.js)
//npx knex migrate:latest (executa aquilo no arquivo q tem o up e down)
//npm install cors (MODULO DE SEGURANÇA, OPCIONAL)

// o npm install vai atras de todas as dependencias de qnd um novo dev for pegar o projeto do github
// ctrl + shift + P = buscar coisas no Visual Studio

const express = require('express'); 
const cors = require('cors');
const routes = require('./routes'); // importamos o arquivo anterior de rotas

const app = express(); // meu aplicativo

app.use(cors()); 
//podemos enviar dentro do cors() ->
//{ origin: 'http://meuapp.com' }

app.use(express.json()); 
app.use(routes);

/*

Métodos HTTP

GET: buscar/listar do backend
POST: criar informação no backend
PUT: Alterar uma info no backend
DELETE: deletar uma info no backend


Imsomnia

*/

/*

Tipos de parametros 

Query Params: parametros nomeados na rota após o simbolo de "?"
?nome=Guilherme&idade=20

Route Params: parametros para identificar recursos
users/:id no param --> users/1 no adress (usuario 1)

Request Body: Corpo da requisicao usado para criar ou alterar recursos


*/


/*

Banco De Dados:

usaremos SQLite

SQL: mysql, sqllite, oracle
NoSQL: mongodb, counchdb

Podemos instalar:

Driver: SELECT * FROM users
Query Builder (vamos usar): table('users).select('*').where()

migrations: forma de criar uma tabela

*/


app.listen(3334); 
//localhost