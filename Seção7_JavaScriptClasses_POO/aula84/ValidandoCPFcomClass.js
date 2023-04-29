/*

705.484.450-52 
070.987.720-03

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

class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this,'UserCPF', {
            enumerable: false,
            configurable: false,
            get: function() {
                return cpf.replace(/\D+/g, '');
            }
        });
    }

    valida () {
        const validador = this.comparador();
        if (validador) {
            return 'CPF válido.';
        } else {
            return 'CPF inválido.';
        }
    }

    comparador () {
        if (typeof this.UserCPF !== 'string' || this.UserCPF.length !== 11) return false;
        if(this.isSequencia()) return false;
        this.GerarNewCPF();
        
        return this.newCPF == this.UserCPF;
    }

    GerarNewCPF () {
        const codeCPF = this.UserCPF.slice(0,-2);
        const digito1 = ValidaCPF.CriaDigito(codeCPF);
        const digito2 = ValidaCPF.CriaDigito(codeCPF + digito1);
        Object.defineProperty(this, 'newCPF', {
            writable: false,
            enumerable: false,
            value: codeCPF + digito1 + digito2
        });
        }

    static CriaDigito (codeCPF) {
        const CPF = Array.from(codeCPF);
        let regressivo = CPF.length + 1;
        let total = CPF.reduce(function (ac, vl) {
            ac += regressivo*Number(vl);
            regressivo--;
            return ac;
        }, 0);
    
        const digito = 11 - (total % 11);    
        return digito > 9 ? '0' : String(digito); 
    }

    isSequencia() {
        const sequencia = this.UserCPF[0].repeat(this.UserCPF.length);
        return sequencia == this.UserCPF;
    }

}

const p1 = new ValidaCPF('705.484.451-52 ');
const p2 = new ValidaCPF('070.987.720-03');
console.log(p1.valida());
console.log(p2.valida());