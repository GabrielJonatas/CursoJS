/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.8 de altura e seu IMC é de 25.92592
Luiz Otávio nasceu em 1980
*/

const nome= "Gabriel Jonatas Almada";
const sobrenome= 'da Silva';
const idade= 22;
const peso= 67;
const alturaEmM= 1.7; //em m

let indiceMassaCorporal;
indiceMassaCorporal = peso/(alturaEmM*alturaEmM);

let anoNascimento;
anoNascimento= 2022-idade;

/*console.log(nome, sobrenome,'tem', idade, 'anos,', 'pesa', peso, 'kg,' , 'tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);*/

// tornando tudo string

/*console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg, tem ' + alturaEmM + ' de altura e seu IMC é de ' + indiceMassaCorporal);
console.log(nome + ' ' + sobrenome + ' nasceu em ' + anoNascimento);*/

// template strings (modelo mais atual)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);

