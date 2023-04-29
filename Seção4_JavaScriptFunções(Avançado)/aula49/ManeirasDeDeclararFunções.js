// Declaração de função (Function hoisting)
/* hoisting -> a engine do javascript irá elevar para o topo as 
funções e variáveis declaradas com var, ou seja, pra uma função, 
não faz diferença ela ser executada antes ou depois da linha em que 
ela foi criada*/
function falaOi() {
    console.log('Oie');
}
falaOi();

// First-class objects (Objetos de primeira classe)
/*As funções podem ser tratadas como um dado*/
// Function expression, constante ou variável recebe uma função e se torna uma função
// Nomear a função é opcional
const souUmDado = function () {
    console.log('Sou um dado.');
}
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
} 

executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    // jogar a função como um metodo de um objeto
    falar() {
        console.log('Estou falando...');
    }
};

obj.falar();
