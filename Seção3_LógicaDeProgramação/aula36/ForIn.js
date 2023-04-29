// For in -> lê os indices ou chaves do objeto

//const frutas = ['Pera','Maça','Uva'];
//
//for (let indice in frutas) {
//    console.log(frutas[indice]);
//}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

//const chave = 'nome';
//console.log(pessoa.nome);
//console.log(pessoa[chave]);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}