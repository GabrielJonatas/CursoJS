const elementos = [
    {tag:'p', texto: 'Oremos Machado 98'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

function createElement (element) {
    const e = document.createElement(element);
    return e;
}

const section = document.querySelector('.container');
const Div = createElement('div');

for (let i = 0; i < elementos.length; i++) {
    const childElement = elementos[i];
    const {tag, texto} = childElement;
    const element = createElement(tag);
    //element.innerText = texto;
    let Text = document.createTextNode(texto);
    element.appendChild(Text);
    Div.appendChild(element);
}

section.appendChild(Div);