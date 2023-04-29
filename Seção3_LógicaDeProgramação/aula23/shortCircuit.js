/*
&& -> false && true -> false em que retornara "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro" 

*false (literal)

FALSY valores que fingem serem falsos
{
0
'' "" `` strings vazias
null / undefined
NaN

qualquer coisa diferente de false e FALSY é literalmente verdadeira
*/


//console.log('Luiz' && 0 && 'Maria'); // percebe como é retornado 0, isso porque ele percebe 0 como false, e literalmente retorna o valor

//console.log('Luiz'&&'Otavio'&&'Ulisses'); // retorna o ultimo valor verdadeiro

//console.log('Luiz' && undefined && 'Maria');


/*function falaOi () {
    return 'Oi';
}

let vaiExecutar = 'Joãozinho' ;

console.log(vaiExecutar && falaOi()); // curto-circuito, onde ele procura o primeiro elemento false e o exibe
*/

//console.log(0 || false || null || 'Luiz Otávio' || true); // curto-circuito, onde ele procura o primeiro elemento verdadeiro eo exibe

/*
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || 'Joãozinho' || c || d || e);








