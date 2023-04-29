const pessoa = {
    nome: 'Ulisses',
    sobrenome: 'Carneiro',
    idade: 30,
    endereço: {
        rua: 'Avenida Machado 98',
        numero: 666
    }
};

//const nome = pessoa.nome;
//console.log(nome);

const {nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);