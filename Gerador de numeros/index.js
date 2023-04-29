class CopaDoMundo {
    constructor (selecao1,selecao2,data) {
        this.data = data;
        this.selecao1 = selecao1;
        this.selecao2 = selecao2;
    }

    combinador () {
        console.log('');
        for (let i=0; i<this.selecao1.length;i++) {
            let b = this.geradorAleatorio();
            let c = this.geradorAleatorio();
            console.log(`${this.data}: ${this.selecao1[i]} ${b} x ${this.selecao2[i]} ${c}`);
        }
    }

    geradorAleatorio () {
        const m = this.peso ();
        const a = Math.round((Math.random().toFixed(1))*m);
        return a;
    }

    peso () {
        let a = 0;
        let b = 0;
        let c = 0;

        for (let p=0; p<50;p++) {
            a = Math.round(Math.random()*10);
            if(a <= 3) {
                b += a*6;
                c += 6;
            } else if(a <= 5) {
                b += a*4;
                c += 4;
            } else if(a <=7) {
                b += a*2;
                c += 2;
            }else if(a > 7) {
                b += a*1;
                c += 1;
            }
        }

        return Math.round(b/c);
    }

}

const selecao1 = ['Japão','Bélgica','Croácia','Espanha'];
const selecao2 = ['Costa Rica','Marrocos','Canadá','Alemanha'];

const resultados1 = new CopaDoMundo(selecao1,selecao2,'27/11');
resultados1.combinador();




const selecao3 = ['Camarões','Coreia do Sul','Brasil','Portugal'];
const selecao4 = ['Sérvia','Gana','Suiça','Uruguai'];

const resultados2 = new CopaDoMundo(selecao3,selecao4,'28/11');
resultados2.combinador();



const selecao5 = ['Equador','Holanda','Irã','Gales'];
const selecao6 = ['Senegal','Catar','Estados Unidos','Inglaterra'];

const resultados3 = new CopaDoMundo(selecao5,selecao6,'29/11');
resultados3.combinador();


