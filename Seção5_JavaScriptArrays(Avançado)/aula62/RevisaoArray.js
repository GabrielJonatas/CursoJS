// Valor por referência
//                 0        1       2
const nomes = ['Eduardo','Maria','Joana'];
// quando utilizamos o spread operator, copiamos os dados da matriz de origem, portanto a alteração nessa constante não modifica a matriz original
const novo = [...nomes];
// String, Objetos, Funções, Números utilizando o construtor abaixo
//const nomes = new Array('Eduardo','Maria', 'Joana');

//pop pode ser usado também para armazenarmos o valor removido numa variável conforme abaixo
const removido = novo.pop(); // usado para remover elementos do array, começa do último elemento da esquerda para a direita
//delete nomes[2]; // remover item do array sem alterar o indice dos elementos

// temos também shift que faz o mesmo que pop, porém no começo do array, deslocado todos os indices do array

nomes.push('João');

// adiciona elementos no inicio do array
nomes.unshift('Wallace');
console.log(nomes, removido);
console.log(novo);


// fatiar arrays, mostrando os indices correspondentes
//const nome2 = ['Eduardo','Maria','Joana','Wallace','Rosana'];
//const novo2 = nome2.slice(0,-1);
//console.log(novo2);

//const nome = 'Luiz, Otávio, Miranda';
//const nomes2 = nome.split(', ');

const nome = ['Luiz', 'Otávio', 'Miranda'];
const nomess = nome.join(' ');

console.log(nomess);

