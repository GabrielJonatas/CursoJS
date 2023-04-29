// npm é o gerenciador de pacotes do node

//const nome = 'Luiz';
//const sobrenome ='Miranda';

//const falaNome = () => nome + ' ' + sobrenome;

// Os modos abaixo referem-se a modos de adicionar objetos ao module do node js

//1º modo
//module.exports.nome = nome;
//module.exports.sobrenome = sobrenome;
//module.exports.falaNome = falaNome;

//2º modo
//exports.NOME = nome;
//exports.sobrenome = sobrenome;
//exports.falaNome = falaNome;

//3º modo
//this.qualquerCoisa = 'O que eu quiser exportar';

//console.log(exports);


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

//exports.Pessoa = Pessoa;

const nome = 'Luiz';
const sobrenome = 'Miranda';

module.exports = {
    nome, sobrenome, Pessoa
};