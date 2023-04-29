// Escreva uma função que recebe 2 números e retorne o maior deles
function gerador () {
    const a = Math.floor(Math.random()*50) ;
    return a;
}
const a = gerador();
const b = gerador();

console.log(a > b ? `${a} é o maior número e ${b} é o menor número.`: `${b} é o maior número e ${a} é o menor número`);