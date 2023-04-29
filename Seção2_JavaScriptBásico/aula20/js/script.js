function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function criaPessoa(nome,sobrenome,peso,altura){
        return{nome,sobrenome,peso,altura};
    }

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector ('.nome');
        const sobrenome = form.querySelector ('.sobrenome');
        const peso = form.querySelector ('.peso');
        const altura = form.querySelector ('.altura');
        const pessoa = criaPessoa(nome.value,sobrenome.value,peso.value,altura.value);

        pessoas.push(pessoa);
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
    };

meuEscopo ();