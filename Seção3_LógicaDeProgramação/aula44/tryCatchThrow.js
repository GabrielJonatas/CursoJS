// try{
// console(naoExisto);
// } catch(err) {
//     console.log('naoExisto não existe');
//     console.log(err);
// }

function soma(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number' ){
      throw new Error('x e y precisam ser números'); // throw new error mostrará o erro no console, throw somente mostrara a mensagem do console.log 
}

return x + y;
}

// o js tentará executar o o bloco try, se não conseguir ele irá executar o bloco catch
try{
console.log(soma('1',2));
} catch(error) {
    //console.log(error);
    console.log('Amigavel');
}

