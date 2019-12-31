function makeNumber(str){
    let num_str ='';

    for(let i = 0; i < str.length; i++){
        if(!isNaN(Number(str.charAt(i)))){
            num_str +=str.charAt(i);
        }
    }

    return num_str;
}

makeNumber('fwa231azxw1');
makeNumber('erer384jjjfd123'); 
makeNumber('123098h76gfdd'); 
makeNumber('ijifjgdj'); 
makeNumber(''); 