// const data = new Date(0); // 01/01/1970 Timestamp unix ou época unix, considerado o marco zero
//const tresHoras = 60 * 60* 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); 
// Mês em js começa do zero, janeiro igual ao mês zero

//const data = new Date(2019); // ano, mês, dia, hora, minuto, segundo, milisegundo

/*const data = new Date (1658705351595);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now()); // representa do marco zero até hoje em milésimos de segundos
*/

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mês = zeroAEsquerda(data.getMonth() + 1);
    const ano= zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mês}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
