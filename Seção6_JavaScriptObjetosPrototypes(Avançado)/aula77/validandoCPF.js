// 705.484.450-52 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 -(284%11) = 2 (Primeiro digito)
Se o número digito for maior que 9, consideramos 0.
*/
/*
function verificaSegundoDigito(array) {
    const total = somatorio(array,0);
    const segundoDigito = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11);
    console.log('ei');
    if (segundoDigito == array[10]) {
        console.log('CPF válido!');
    } else {
        console.log('CPF inválido!');
    }
}

function multiplicacoes(array,x) { 
    const multiplicacao = array.map((valor, indice) => Number(valor) * ((array.length - x) - indice)).splice(0, 10-x);
    return multiplicacao;
}

function somatorio (array,x) {
    const multiplicacao = multiplicacoes(array,x);
    const somatorio = multiplicacao.reduce(function (acumulador, valor) {
        acumulador += valor;
        return acumulador;
    }, 0);
    return somatorio; 
}

function validadorCPF (array) {
    const Arrays = array.replace(/\D+/g, '');
    let numeros = Array.from(Arrays);
    const total = somatorio(numeros,1);
    const primeiroDigito = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11);
    console.log(primeiroDigito);
    if (primeiroDigito == numeros[9]) return verificaSegundoDigito(numeros);
    console.log(numeros[9]);
    console.log('CPF inválido!');
}

validadorCPF('335.271.148-82');
*/

function ValidaCPF(cpf) {
    Object.defineProperty(this,'UserCPF', {
        get: function() {
            return Array.from(cpf.replace(/\D+/g, ''));
        }
    });
    Object.defineProperty(this,'CPForiginal', {
        get: function() {
            return cpf.replace(/\D+/g, '');
        }
    }); 
}

ValidaCPF.prototype.valida = function() {
    if (typeof this.UserCPF == 'undefined' || this.UserCPF.length !== 11) return false;
    if(this.isSequencia()) return false;
    const total = this.calculo(1);
    const primeiroDigito = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11);   if (primeiroDigito !== Number(this.UserCPF[9])) return false;
    const segundoDigito = this.verificaSegundoDigito();
    if (segundoDigito) return false;
    return true;
};

ValidaCPF.prototype.multiplicacao = function(x) {
    const array = this.UserCPF;
    const yu = array.map((valor, indice) => Number(valor) * ((array.length - x) - indice)).splice(0, 10-x);
    return yu;
};

ValidaCPF.prototype.calculo = function (x) {
    const multiplicacao = this.multiplicacao(x);
    const somatorio = multiplicacao.reduce(function (acumulador, valor) {
        acumulador += valor;
        return acumulador;
    }, 0);
    return somatorio; 
};

ValidaCPF.prototype.verificaSegundoDigito = function () {
    const total = this.calculo(0);
    const segundoDigito = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11);
    if (segundoDigito != this.UserCPF[10]) return true;
    return false;
};

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.UserCPF[0].repeat(this.UserCPF.length);
    return sequencia == this.CPForiginal;
};

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());