// solução rápida

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varD = varA;
const varE = varB;
const varF = varC;

varA = varE;
varB = varF;
varC = varD;

console.log(varA,varB,varC);