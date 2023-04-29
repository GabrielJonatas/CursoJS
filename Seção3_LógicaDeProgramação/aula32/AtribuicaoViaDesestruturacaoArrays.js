// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A
// 
// const numeros = [b,c,a];
// [a,b,c] = numeros;
// 
// console.log(a,b,c);
//... rest, ... spread

//const numeros = [1,2,3,4,5,6,7,8,9];
//const primeiroNumero = numeros[0];
//const [primeiroNumero,segundoNumero, terceiroNumero, ...resto] = numeros;
//const [um, , três, , cinco, , sete] = numeros;

//console.log(um,três,cinco);

const numeros = [[1,2,3],[4,5,6],[7,8,9]];
const [,[,,seis]] = numeros;
const [lista1,lista2,lista3] = numeros;
//console.log(numeros[1][2]);
console.log(lista2[2]);
console.log(seis);

