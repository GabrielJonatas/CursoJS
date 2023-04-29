//               -5      -4      -3        -2       -1
//               0        1       2         3        4
const nomes = ['Maria','João','Eduardo','Gabriel','Júlia'];

// nomes.splice(indice atual,delete,elem1,elem2,elem3);
// pop
// Number.MAX_VALUE é o maior número existente em JavaScript
// Podemos usar Number.Max_VALUE para alcançarmos facilmente o final do array
const removidos = nomes.splice(-2,1); // remove os elementos no indice ou a partir do indice para a direita
const incluidos = nomes.splice(3,2,'Luiz', 'Otávio'); // adiciona os elementos no indice especificado

// pop
//const pop = nomes.splice(-1,1);

// shift
// const removido = nomes.splice(0,1);

//push
//nomes.splice(nomes.length, 0, 'Luiz');

// unshift
//nomes.splice(0, 0 ,'Luiz', 'Otávio','Miranda');

console.log(nomes, removidos);