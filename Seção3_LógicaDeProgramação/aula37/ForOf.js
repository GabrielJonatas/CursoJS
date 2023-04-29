//Acessa diretamento o valor de um objeto iterável (string,array,vetor,etc..)
//const nome = 'Luiz Otávio';

// For clássico - Geralmente com iteráveis (array ou srings)
// For in - Retorna o indice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

const nome = ['Luiz','Otávio','Hnerique'];
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

//for (let i = 0; i < nome.length; i++) {
//  console.log(nome[i]);
//}

//for (let i in nome) {
//    console.log(nome[i]);
//}

for (let valor of nome) {
    console.log(valor);
}

for (let valor of pessoa) {

}

nome.forEach(function (valor, indice,array) {console.log(valor, indice, array);});



