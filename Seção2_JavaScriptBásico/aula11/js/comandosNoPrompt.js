// No navegador temos o window que apresenta varios objetos
// Digitar window no console irá lhe dar uma serie de objetos

/* Essas funções abaixo são métodos localizados no objeto window
A convenção é que são metodos se dentro de um objeto e funções se fora de um objeto
*/

// alert é um atalho para window.alert

/*

alert('Com a nossa mensagem');

// O comando abaixo apresenta uma mensagem e um pedido de confirmação booleano
window.confirm('Você quer mesmo fazer isso?');

// O comando abaixo solicita a digitação de um dado especifico do usuário
window.prompt('Digite seu nome');

*/

// Podemos mesclar uma constante para receber um valor do window.confirm, ex:
/* 
const confirma=confirm('mensagem');
// logo sera armazenado um valor na variável confirma que será true ou false

// também podemos usar: 

let num1=prompt('mensagem'); // porém note que será retornado uma string, então para operações será necessário uma conversão com parseint, parsefloat ou number

*/ 

// No navegador você pode digitar somente a variavel e ele retornara ja no console.log

// exercicio

const num1=Number(prompt('Digite um número:'));
const num2=Number(prompt('Digite outro número:'));
//const num3 = num1 + num2;

alert(`O resultado da soma dos números informados é: ${num1 + num2}`);

