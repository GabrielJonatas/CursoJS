// funções com o objetivo de congelar as chaves 
//dentro do objeto para que não sofram alterações
// defineProperty - defineProperties - Getter e Setters

function Produto(nome,preco,estoque) {
    this.nome = nome;
    this.preco = preco;

    let  estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        //value: estoque,
        // writable:false,
        configurable: false,// configurável, utilizado quanddo há outro object.defineproperty para outro objeto
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            };

            estoquePrivado = valor;
        },
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
};

//const p1 = new Produto('Camiseta',20,3);
//console.log(p1);
//p1.estoque = 'kdajhndask';
//console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);