// Exportar depedencias
const express = require('express');

// Variável armazenando a função express
const server = express();

// Criar as rotas
server.get('/', function(req, res) {
    return res.send('Servidor no Ar! Restartando com o nodemon!')
})

// Listar porta do servidor
server.listen(5000, () => {
    console.log('Servidor rodando na porta 5000')
})