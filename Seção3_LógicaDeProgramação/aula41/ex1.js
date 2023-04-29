// Escreva uma função que recebe 2 números e retorne o maior deles
function max(x,y) {
    console.log(x > y ? `${x} é o maior número`: `${y} é o maior número`);
}

max (5,8);

const max2 = (x,y) => x > y ? `${x} é o maior número`: `${y} é o maior número`;
console.log(max2(10,40));