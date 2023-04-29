// Função construtora -> constroi e retorna objetos
// Função fábrica -> fabrica e retorna objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // atributos ou métodos privados
    const ID = 123456;

    const metodoInterno = function () {

    };

    // atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

// sempre usar new ao usar uma função construtora, por isso o nome inicia em maiúsculo
// a palavra new cria um novo objeto vazio e faz o this apontar para o objeto sendo utilizado
const p1 = new Pessoa('Luiz','Otávio');
const p2 = new Pessoa('João','Armando');
const p3 = new Pessoa('Maria','Laurence');

console.log(p3.metodo());

