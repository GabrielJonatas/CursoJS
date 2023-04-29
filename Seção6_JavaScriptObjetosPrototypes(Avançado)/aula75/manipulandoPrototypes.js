// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

// new Object -> Object.prototype
const objB = {
    chaveB: 'B'
    // __proto__: objA
};

// quando são criadas essas correntes, o ultimo objeto criado consegue
// acessar as chaves do primeiro

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco*(1-(percentual/100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco*(1+(percentual/100));
};

const p1 = new Produto('Camiseta',50);

// literal
const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

// Desse modo abaixo, criamos um objeto e já setamos um prototype
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    }
});
//p3.preco = 113;
p3.aumento(10);
console.log(p3);