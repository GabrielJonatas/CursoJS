// const nome = 'Gabriel';
// let controle = 0;
// 
// while (controle < nome.length) {
//     console.log(nome[controle]);
//     controle++;
// }
// 
// console.log('Segue a vida...');

function random(min, max) {
    const r = Math.random()*(max-min) + min;
    return Math.floor(r);
}   

const min = 1;
const max = 50;

let rand = 10;

// while executa a ação após a checagem da condição
while (rand !== 10) {
    rand = random(min,max);
    console.log(rand);    
}

console.log('#####');

// do while executa pelo menos uma vez a ação antes de checar a condição
do {
    rand = random(min,max);
    console.log(rand);
} while(rand !== 10);


