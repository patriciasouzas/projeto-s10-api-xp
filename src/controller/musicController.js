const musicas = require("../model/musicas.json")

const getMusicas = (request, response) => {
    console.log(request.url)
    response.status(200).send(musicas)
}

const update = (request, response) => {
    const musicaAtualizacao = request.body
    const id = parseInt(request.params.id)
    const musicaParaAtualizar = musicas.find(musica => musica.id == id)

    Object
}

module.exports = {
    getMusicas
}