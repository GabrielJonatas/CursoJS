require('dotenv').config();
// Utilizamos o env para esconder usuário e senha da base de dados dos arquivos que serão comitados no GitHub

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const { middleWareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true})); // necessário para tratar o body das requisições

app.use(express.static(path.resolve(__dirname,'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use( middleWareGlobal);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});