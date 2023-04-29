// Map -> estrutura de dados

const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'}
];

// o método abaixo não permite ordenar os objetos no array na ordem 
//desejada através das chaves do objeto pelo programador

//const novasPessoas = {};
//for(const pessoa of pessoas) {
//    const { id } = pessoa;
//    novasPessoas[id] = { ...pessoa};
//};

// set para atribuir e configurar valores, get para obter valores

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
   novasPessoas.set(id, { ...pessoa});
};

//for (const pessoas of novasPessoas.values()) {
//    console.log(pessoas);
//}

novasPessoas.delete(2);
console.log(novasPessoas);