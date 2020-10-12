// Exportar depedencias
const express = require('express');
const nunjucks = require('nunjucks');

// Exportar os dados dos cursos date.js e date-about.js
const courses = require('./date');
const about = require('./date-about');

// Variável armazenando a função express
const server = express();

// Criar as rotas
server.get('/', function(req, res) {
    return res.send('Servidor no Ar! Restartando com o nodemon!')
})

// Configurar os arquivos estático para o servidor(assents, css, js...)
server.use(express.static('public'));

// setar a template engine para visualizar o arquivo citado
server.set('view engine', 'njk');

// Configurar o nunjucks para visualização da pasta views
nunjucks.configure('views', {
    express:server,
    autoescape: false
});

// Criar rotas
server.get("/", function(req, res) {
    return res.render('courses', { items: courses })
});

server.get("/about", function(req, res) {
    return res.render('about', { about })
});

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;

    const bootcamp = courses.find(function(bootcamp) {
        return bootcamp.id == id
    })

    if(!bootcamp) {
        return res.render('not-found')
    }

    return res.render('bootcamp', {card: bootcamp});
  });

// Rota para visualizar o erro 404 de página não encontrada
server.use(function(req, res) {
    res.status(404).render("not-found");
});

// Listar porta do servidor
server.listen(5000, () => {
    console.log('Servidor rodando na porta 5000')
})