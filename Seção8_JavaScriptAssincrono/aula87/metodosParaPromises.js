function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()*(max-min) + min)
}

function esperaAi(msg,tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            };

            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject

// Promise.all
// Mostra todas as promises resolvidas, porém se uma delas for rejeitada, mostrará somente ela
/*
const promises = [
    'Primeiro Valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi(1000, 1000),
    'Outro valor'
]

Promise.all(promises)
    .then(function(valor) {
        console.log(valor);
})
    .catch(function(erro) {
        console.log(erro);
});
*/

// Promise.race
// Mostra a primeira promise resolvida e continua executando as outras promises, porém so mostra o valor da primeira
/*
const promises = [
    esperaAi(5000, rand(1,5)),
    esperaAi('Promise 1', rand(1,5)),
    esperaAi('Promise 2', rand(1,5)),
    esperaAi('Promise 3', rand(1,5)),
    //'Outro valor'// é uma promise já resolvida
]

Promise.race(promises)
    .then(function(valor) {
        console.log(valor);
})
    .catch(function(erro) {
        console.log(erro);
});
*/

// Promise.resolve
function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e))

// Promise.reject
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));