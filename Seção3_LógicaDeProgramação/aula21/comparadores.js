/*
Operadores de comparação 
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
** não recomendado == igualdade (valor), checa somente o valor, então o js converte para comparar valor
=== igualdade estrita (valor e tipo) checa valor e tipo (string ou number)
** não recomendado != diferente (valor), checa somente o valor, então o js converte para comparar valor
!== diferente estrito (valor e tipo) checa valor e tipo (string ou number)
*/

const num1 = 10;
const num2 = '10';
const comp = num1 !== num2;
console.log(comp);