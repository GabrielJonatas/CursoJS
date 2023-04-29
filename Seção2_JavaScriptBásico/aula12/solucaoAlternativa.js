// Solução economica

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let varD = varA;
let varE = varC;

varC = varD; // varC= 'A'
varD = varE; // varD= 'C'

varE = varB; // varE = 'B'
varB = varD; // varB='C'

varD = varE; // varD='B'
varA = varD; // varaA='B'

console.log(varA,varB,varC);