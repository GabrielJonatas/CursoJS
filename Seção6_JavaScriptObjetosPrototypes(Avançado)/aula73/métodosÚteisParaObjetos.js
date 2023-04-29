/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o,'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

/* quando fazemos caneca = produto, criamos uma associação entre os dois
objetos, ou seja, se editarmos as propriedades de um, 
o outro também será editado
*/

const produto = {nome: 'Produto', preco: 1.8}
// const caneca = {...produto, material: 'porcelana'}; // spread operator
//const caneca = Object.assign({},produto, {material: 'porcelana'})
const caneca = {nome: produto.nome, preco: produto.preco};

//caneca.nome = 'Luiz Otávio';
//caneca.preco = 2.5;
//console.log(produto);
//console.log(caneca);

//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let valor of Object.entries(produto)) {
    console.log(valor[0],valor[1]);
}