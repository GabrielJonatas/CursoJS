// argumentos são os valores enviados para os parametros

function funcao0 () {
    console.log(arguments[0]);
}

// js cria uma variavel chamada argument dentro da funcao para armazenar os valores que são declarados entre os parenteses quando se chama a funcao
// argument é um array em que os valores são armazenados, portanto eles possuem indice
funcao0('Valor',1,2,3,4,5); 

// é possivel conforme abaixo que utilize os valores armazenados em argument para realizar operações
// esse truque não funciona com arrow functions

function funcao1 (a,b,c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a ,b ,c);
}

funcao1(1,2,3,4,5,6,7);

// se não enviar um valor para o parametro, o js retorna undefined
function funcao3 (a,b,c,d,e,f) {
    console.log(a,b,c,d,e,f);
}
funcao3(1,2,3);


function funcao4 (a,b=2,c=4) {
    //b = b||0; // obter um valor padrao, solucao antiga
    console.log(a+b+c);
}

funcao4(2,undefined,20); // só é possivel ele assumir o valor padrao com undefined

// desestruturação de object
function funcao5 ({nome, sobrenome, idade}) {
    console.log(nome,sobrenome,idade);
}

funcao5({nome: 'Luiz', sobrenome: 'Otávio', idade: 20});

// desestruturação de array
function funcao6 ([valor1, valor2, valor3]) {
    console.log(valor1,valor2,valor3);
}
funcao6(['Luiz Otávio', 'Miranda', 30]);

// rest operator, ultimo parametro formal da função
const conta = function(operador,acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};

conta('+', 1, 20,30,40,50);
