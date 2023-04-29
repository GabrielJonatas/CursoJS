//const mod1 = require('./mod1');

//const falaNome = require('./mod1').falaNome;

// constFalaNome = mod1.falaNome;

//const {NOME, sobrenome, falaNome} = require('./mod1');

//console.log(NOME, sobrenome);
//console.log(falaNome());

// modulos padrao do node ou instalados via npm não precisam de caminho, somente informar o nome do modulo

// utilizamos caminhos em modulos pessoais -> './'

const path = require('path');
const axios = require('axios');
const {Pessoa} = require('./mod1');

//const p1 = new Pessoa('Luiz');

axios('https:/www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e))
//console.log(p1);

const p1 = new Pessoa('Jão');
console.log(p1);