// Quando uma função está dentro de um objeto, ela é chamada de método


// Factory function
function criaPessoa(nome,sobrenome,altura,peso) {
    return {
        nome, 
        sobrenome,

        // Getter,  quando se quer obter somente o valor
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter, quando se quer modificar um atributo no objeto
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto='falando sobre nada') {
            return `${this.nome} está ${assunto}.`;
        },

        altura,
        peso,

        get imc() {
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2);
        }

    };
}

// ao utilizar um objeto.metodo, o this irá se referir ao objeto
const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Maria Mercedes Oliveira';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());

