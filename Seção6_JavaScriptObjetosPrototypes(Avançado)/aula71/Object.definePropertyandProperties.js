// funções com o objetivo de congelar as chaves 
//dentro do objeto para que não sofram alterações
// defineProperty - defineProperties - Getter e Setters

function Produto(nome,preco,estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        value: estoque,
        writable:false, // controla se o valor pode ou não ser alterado
        configurable: false// configurável, utilizado quanddo há outro objetct.defineproperty para outro objeto
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra chave
            value: nome,
            writable: true, // controla se o valor pode ou não ser alterado
            configurable: true// configurável, utilizado quanddo há outro objetct.defineproperty para outro objeto    
        },
        preco: {
            enumerable: true, // mostra chave
            value: preco,
            writable:true, // controla se o valor pode ou não ser alterado
            configurable:true// configurável, utilizado quanddo há outro objetct.defineproperty para outro objeto    
        },
    }); 
}

const p1 = new Produto('Camiseta',20,3);
//p1.estoque = 500000;
//delete p1.estoque;
console.log(p1);


console.log(Object.keys(p1)); // lista as chaves do objeto em um array

