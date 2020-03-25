const express = require('express');
const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router(); 

// botaremos as rotas aqui

routes.post('/sessions', SessionController.create);
//esse post aqui demarca uma intenção

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create); 
routes.get('/incidents', IncidentController.index); 
routes.delete('/incidents/:id', IncidentController.delete); // deletamos um incidente na url http://localhost:3334/incidents/2, da ong que causou o incidente 2 (headers)

routes.get('/profile', ProfileController.index)

module.exports = routes; // exporta rota

//1 HORA E 17 MINUTOS, VIDEO 2 
