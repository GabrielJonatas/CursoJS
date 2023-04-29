// funções executam ações
// não é necessário por ponto e virgula

// nome é um parametro que será atribuido um valor quando a função for chamada
function saudacao(nome){
    return `bom dia, ${nome}!`; // retornar um valor
}

//saudacao('Luiz'); // chamar a função
//const variavel = saudacao('Luiz'); // chamou a função porém ela não retornou nenhum valor para ser armazenado na variavel
//console.log(variavel);

// declarar 1 para x e y é como dar valores padrões caso não seja dado valor ao chamar a função
function soma(x=1,y=1){
    const resultado = x + y;
    return resultado; // É o fim da função
}

//console.log(soma(2,2));

//console.log(resultado); // não é possivel acessar o que esta dentro da função

//const resultado = soma(); // prova que é possivel acessar internamente a função
//console.log(resultado);

// declarar uma função dentro de uma variável
const raiz = function (n) {
    return n**0.5;
};

console.log(raiz(16));

// forma moderna de declarar funções
// arrow function
const mandioca = n => `Olá meus ${n}, saudem a mandioca!`;

console.log(mandioca(15));









