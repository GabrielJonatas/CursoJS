let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const tempvarA = varA;
varA = varB;
varB = varC;
varC = tempvarA;

console.log(varA,varB,varC);