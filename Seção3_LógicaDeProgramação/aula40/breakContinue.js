const numeros = [1,2,3,4,5,6,7,8,9];
let i = 0;

// continue e break funcionam para os laços for (clássico, in e of) e Do while/while

for (let numero of numeros) {
    if (numero == 2) {
        console.log('Pulei o numero 2');
        continue; // ao ser executado, a engine do js pula para a próxima iteração do laço sem executar o resto do código
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo....');
        break; // interrompe o laço
    }

    console.log(numero);

}

while (i <= numeros.length ) {

    if (i === 7) {
        console.log('7 achado!');
        i++;
        continue;
    }

    if (i == 8) {
        console.log('8 encontrado');
        i++;
        break;
    }

    i++;
}

console.log(i);
