function countNumbers(str){

    let numbers = makeNumber(str);
    let arr = {};

    for(let i = 0; i < numbers.length; i++){
        if(arr[numbers[i]] === undefined){
             arr[numbers[i]] = 1;
        }else{
            arr[numbers[i]] = arr[numbers[i]] + 1;
        }
    }
    
    return arr;
}

function makeNumber(str){
    
    let num_str ='';

    for(let i = 0; i < str.length; i++){
        if(!isNaN(Number(str.charAt(i)))){
            num_str +=str.charAt(i);
        }
    }

    return num_str;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers(''); 