const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        console.log('setter');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        console.log('getter');
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this.velocidade <= 0) return;
        this[_velocidade]--; 
    }
}

const c1 = new Carro('Fusca');
c1.velocidade = 99;
console.log(c1.velocidade);