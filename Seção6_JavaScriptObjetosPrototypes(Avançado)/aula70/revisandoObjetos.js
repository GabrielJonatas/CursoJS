// Um objeto é composto por um par, chave e valor

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const chave = 'nome';
// console.log(pessoa.nome);
//console.log(pessoa['nome']);  notação de colchete, parecido com array
//console.log(pessoa[chave]);

const pessoa1 = new Object(); // construtor de objetos

pessoa1.nome = 'Luiz'; // acrescentar chave e valor no objeto construido
pessoa1.sobrenome = 'Otávio'; // acrescentar chave e valor no objeto construido
pessoa1.idade = 33;
pessoa1.falarNome = function () {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNasc = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
/*const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}*/

// delete pessoa1.nome; para apagar chaves de um objeto

// for in serve para mostrar as chaves de um objeto
for (let chave in pessoa1) {
    //console.log(pessoa1[chave]);
};


// Factory functions / Constructor functions / Classes

// Factory function
function criaPessoa(nome,sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

// Constructor function
function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
}

// {} <- this 
// This é referente a quem criou o objeto
// new cria um objeto e atrela this a ele

/*
Considerando const p1 = new Pessoa('Luiz','Miranda');
p1.nome = 'Outra coisa' tentará alterar o endereço do valor na memória, 
o que não é permitido quando se usa uma variável const
*/

const p1 = new Pessoa('Luiz','Miranda');
Object.freeze(p1);
p1.nome = 'Outra coisa';
console.log(p1); //Será mostrado o construtor do objeto no inicio

