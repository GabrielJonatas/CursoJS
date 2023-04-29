/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint,symbol)
Se uma variavel B for igual a A que contem um valor, se mudarmos A, B mantém o valor

Referência (mutável) - arrays, object, function
Se uma variável B for igual a A que contem um array por exemplo, se mudarmos A, B também muda

*/

/*let a = [1,2,3];
let b = [...a];
let c = b;

a.push(4);

console.log(a,b,c);

b.pop();
console.log(a,b,c);
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = {...a}; // tornar independente de a, copiando somente seu valor
const c = a;

a.nome = 'João';
console.log(b,c);