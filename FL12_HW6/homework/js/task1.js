let a = prompt('Input a: ');
let b = prompt('Input b: ');
let c = prompt('Input c: ');

const two = 2;
const four = 4;

if(a !=='' && b !=='' && c !=='' && !isNaN(a) && !isNaN(b) && !isNaN(c)){  
        let d = b*b-four*a*c;
        if(d > 0){
            let x1 = Math.round(-b + Math.sqrt(d))/(two*a);
            let x2 = Math.round(-b - Math.sqrt(d))/(two*a);
            console.log(`x1 = ${x1} and x2 = ${x2}`);
        }else if(d < 0){
            console.log(`no solution`);
        }else if(d === 0){
            let x = -b/(two*a);
            console.log(`x = ${x}`);
        }  
}else{
    console.log('Invalid input data');
}
