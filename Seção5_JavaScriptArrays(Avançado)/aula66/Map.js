// Mapeia o array original e retorna um array com o mesmo tamanho
// porém com elementos geralmente diferentes do array original

// Dobre os números 
//               0 1  2  3 4 ....
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

// numeros.map(valor,indice,array)
const numerosEmDobro = numeros.map(valor => valor*2);
//console.log(numerosEmDobro);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32}
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));
const id = pessoas.map(function (obj, indice) {
    const newObject = {...obj};
    newObject.id = indice;
    return newObject;
});

console.log(pessoas);
console.log(id); 
