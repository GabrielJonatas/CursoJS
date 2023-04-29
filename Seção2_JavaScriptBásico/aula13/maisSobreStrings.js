// Truques extras sobre string

// strings são indexadas, ou seja, os caracteres possuem indice

let umaString = "Um \"texto\""; // para escapar do aspas duplas em aspas duplas, não é possivel sem \\
console.log(umaString);

console.log(umaString[9]); // exibindo caracteres por indice

console.log(umaString.charAt(34)); // exibe vazio quando fora do range

console.log(umaString.concat(' ', 'em', ' ', 'um', ' lindo dia')); // tem função de concatenar, assim como o + junta duas strings

console.log(`${umaString} em um lindo dia.`) // forma mais simples de concatenar

console.log(umaString.indexOf('texto')); // para saber em qual indice esta localizado ou inicia a palavra, procura da esquerda para a direita

console.log(umaString.indexOf('o', 2)); // idem, porém informa a partir de qual indice começar a procurar, procura da esquerda para a direita

console.log(umaString.lastIndexOf('t', 3)); // procura da direita para a esquerda

console.log(umaString.match(/[a-z]/g)); // faz a procura de letras minusculas

console.log(umaString.search(/[x]/)); // ele retorna o indice da letra escolhida na palavra

console.log(umaString.replace('Um', 'Outra')); // muda a palavra um por outra

let stringDois = "O rato roeu a roupa do rei de roma.";

console.log(stringDois.replace('rato','gato'));

console.log(stringDois.replace(/r/g, '#'));

console.log(stringDois.length); // visualizar a quantidade de caracteres

// console.log(stringDois.length - 3);
console.log(stringDois.slice(-5)); // serve para excluir letras a partir do primeiro indice informado ate o ultimo informado

console.log(stringDois.substring(stringDois.length - 5));

console.log(stringDois.split('', 3)); // mostra os valores em um array sem a letra ou palavra escolhida

console.log(stringDois.toUpperCase()); // coloca a string inteira em letra maiuscula

console.log(stringDois.toLowerCase()); // coloca a string inteira em letra minuscula



