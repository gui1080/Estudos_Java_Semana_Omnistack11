const connection = require('../database/connection');

module.exports = {

    async index(request, response){

        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count(); 
        // essa chave entre o count impede que o retorno seja um array

        console.log(count); 
        // o retorno vai no cabeçalho, total de itens listados


        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)        
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
        // esquema de paginação
        // http://localhost:3334/incidents?page=2 retorna os 5 casos apos os primeiros 5
            
        response.header('X-Total-Count', count['count(*)']);
        // count(*) é a propriedade acessada, como podemos ver no console log

        return response.json(incidents);
    },

    async create(request, response) {

        const { title, description, value } = request.body;
        
        const ong_id = request.headers.authorization;
        //info que botamos no header, a ong_id q foi criada

        const result = await connection('incidents').insert({
            title, 
            description,
            value,
            ong_id,
        });
        //resultado eh um array de 1 posicao ja q so botou 1 incidente

        const id = result[0];

        return response.json({ id }) 
    }, 

    async delete(request, response){

        const{ id } = request.params; 

        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if(incident.ong_id != ong_id){
            return response.status(401).json({
                error: 'Operation not permitted'
            });
            //http status code nao autorizado
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
        // deu sucesso mas n tem conteudo pra retornar
    }

}