// escopo léxico é o local que foi declarada, tudo declarado dentro dela e o que foi declarado nos vizinhos

const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otávio';
    falaNome();
}

usaFalaNome();