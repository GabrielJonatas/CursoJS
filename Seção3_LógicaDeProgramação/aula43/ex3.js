// Escreva uma função que recebe um numero e
// Retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número NÃO é divisivel por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com números de 0 a 100
function FizzANDBuzz (x) {
    const fANDb = x%3 === 0 && x%5 === 0;
    return fANDb;
}
function FizzORBuzz (x) {
    if (x%3 === 0) {
        return 'Fizz';
    } else if (x%5 === 0) {
         return 'Buzz';
    } else {
        return `${x}`;
    }
}
function isNumber (x) {
    const exp = x === Number(x);
    const result = !exp || !x && x !== 0;
    return result;
}
function FizzBuzzChecker (y) {

    if (isNumber(y)) {
        console.log(y);
    } else {

        while (y >= 0 && y <= 100) {

            if (FizzANDBuzz(y)) {
                console.log('FizzBuzz');
                y++;
            } else {
                const fb = FizzORBuzz(y);
                console.log(fb);
                y++;
            }

        }

    }
}
FizzBuzzChecker(0);
