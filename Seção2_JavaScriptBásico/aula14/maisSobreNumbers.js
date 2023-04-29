// IEE 754-2008, padrão para precisão de casas decimais
let num1 = 0.7;
let num2= 0.1;


/*
Outra maneira de tornar um inteiro para o programa por meio de contas
//num1 = ((num1*100)+(num2*100))/100;
//num1 = ((num1*100)+(num2*100))/100;
//num1 = ((num1*100)+(num2*100))/100;
*/

// num1 = parseFloat(num1.toFixed(2)); para arrendodar para um inteiro ou num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

//console.log(num1.toString() + num2);  converte de number para string temporariamente
//num1 = num1.toString(); // converte de number para string permanente
//console.log(num1.toString(2)); // converte para string em binário 
//console.log(num1.toFixed(2)); // para arrendondar um número
//console.log(Number.isInteger(num1)); // diz se um número é inteiro ou não
//let temp = num1*'Ola'; // dará um erro NaN
//console.log(Number.isNaN(temp)); // auto explicativo
