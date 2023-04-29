/*const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Jacinto';
const sobrenome02 = 'Ferreira';
const idade02 = 18;*/

// para criar objetos, utilizamos o formato abaixo
/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
}

const pessoa2 = {
    nome: 'Yin',
    sobrenome: 'Oliveira',
    idade: 31
}

console.log(pessoa2.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);/
*/

// (nome,sobrenome, idade) são parametros e os valores ('Luiz', 'Otávio', 25) são argumentos
/*function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
} // função chamada de factory, pois cria objetos, js reconhece quando os argumentos possuem o mesmo nome que o parametro

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 44);
*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala () {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};


pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


