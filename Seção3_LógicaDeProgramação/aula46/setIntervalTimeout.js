function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function () {
    console.log(mostraHora());
} , 5000);

setTimeout(function() {clearInterval(timer);}, 10000);

setTimeout(function() {console.log('Olá mundo');}, 5000);