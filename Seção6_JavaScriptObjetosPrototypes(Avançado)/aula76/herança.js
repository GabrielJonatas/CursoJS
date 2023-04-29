// Produto -> aumento, desconto
// Camiseta =  Cor, caneca = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this,nome,preco);
    this.cor = cor;
}

// O método abaixo é para linkar o prototype do construtor Camiseta
// com o prototype de produto
Camiseta.prototype = Object.create(Produto.prototype);

// o método abaixo nomeia o construtor da função como Camiseta
Camiseta.prototype.constructor = Camiseta;

// o método abaixo sobrepõem a função aumento vinda do prototype do produto
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco*(1+(percentual/100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    // para incluir getter e setter no estoque
    Object.defineProperty(this,'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    }) 
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
caneca.estoque = 100;


console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);
