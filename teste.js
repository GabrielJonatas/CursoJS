let maior = 0;

for(let i = 1; i<=100000; i++) {
    let max = 1;
    let coll = i;

    while(coll>1) {
        if((coll%2) == 0) {
            coll = coll/2;
        } else {
            coll = (3*coll) + 1;
        }
        max++;
    }

    if(max>maior) {
        maior = max;
    }
}

console.log(maior);
