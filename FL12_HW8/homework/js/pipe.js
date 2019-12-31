function pipe(...functions){
    for(let i = 1; i < functions.length; i++){
      functions[0] = functions[i](functions[0]);
    }

    return functions[0];
}

function addOne(x) {
    return x + 1;
}  

pipe(1, addOne);
pipe(1, addOne, addOne);
pipe(1, addOne, addOne, addOne);  