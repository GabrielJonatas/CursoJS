/*

* Aritméticos
 * + Adição/ Concanetenação
 * - / * -> Subtração/ divisão / multiplicação
 * ** -> Potenciação
 * % -> Resto da divisão
 * 
* Precedencia de operadores
 ()
 **
 * / %
 + -

* Operador de incremento e decremento (podem ser usados antes ou depois)
 ++
 --
 ex: b++ ou ++b
 
* Operadores de atribuição
 valor += passo -> corresponde a valor = valor + passo
 valor *= passo -> corresponde a valor = valor * passo

 */


 //Conversão de string para number parseInt(inteiros), parseFloat(decimais), Number(inteiro ou decimal)
    //NAN Not a number
 
const num1 = 1;
const num2 = parseInt('65'); // converte uma palavra em número INTEIRO
console.log(num1 + num2);
console.log(typeof num2);

const num3 = 1;
const num4 = parseFloat('65.876'); // converte uma palavra em número de ponto flutuante
console.log(num3 + num4);
console.log(typeof num4);

const num5 = 1;
const num6 = Number('65.8798'); // converte uma palavra em número(inteiro ou decimal)
console.log(num5 + num6);
console.log(typeof num6);



