export default class ValidaCPF {
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
            return true;
        } else {
            return false;
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
