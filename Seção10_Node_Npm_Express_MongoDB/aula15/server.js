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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middleWareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true})); // necessário para tratar o body das requisições

app.use(express.static(path.resolve(__dirname,'public')));

const sessionOptions = session({
    secret: 'mda ndadjandajdnejwn ()',
    store: MongoStore.create({mongoUrl: process.env.CONECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24*7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

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