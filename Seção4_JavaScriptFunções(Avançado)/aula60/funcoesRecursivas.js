// É uma função que se chama de volta
// Muito semelhante a um for
function recursiva(max) {
    console.log(max);
    if (max>= 20000) return;
    max++;
    recursiva(max);
}

recursiva(0);