let a = Number(prompt('Input a: '));
let b = Number(prompt('Input b: '));
let c = Number(prompt('Input c: '));

console.log(a);

if(a !=='' && b !=='' && c !=='' && Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)){
    if(a <= 0 || b <= 0 || c <= 0){
        console.log('A triangle must have 3 sides with a positive definite length');
    }else{
        if(a + b > c || b + c > a || c + a > b){
            if(a === b && b === c){
                console.log('Equilateral triangle');
            }else if(a === b || b === c || c === a){
                console.log('Isosceles triangle');
            }else{
                console.log('Scalene trianlge');
            }
        }else{
            console.log('Triangle doesn\'t exist');
        }
    }
}else{
    console.log('input values should be ONLY numbers');
}