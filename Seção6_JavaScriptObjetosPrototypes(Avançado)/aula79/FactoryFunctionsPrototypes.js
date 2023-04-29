// Compor um objeto com vários outros objetos é chamado de composição
// Também temos o mixing, onde colocamos métodos que não possuem hierarquia definida

const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }    
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    }  
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }   
};

//const pessoaPrototype = {...falar, ...comer, ...beber};
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}
const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A.');
console.log(p1.comer());
console.log(p2);
