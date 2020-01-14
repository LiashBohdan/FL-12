function convert( ...args){
    for(let i = 0; i < args.length; i++ ){
        if(typeof args[i] ==='string' ){
           args[i] = Number(args[i]);
        }else if(typeof args[i] ==='number'){
            args[i] = String(args[i]);
        }
    }

    return args;
}


function executeforEach(arr, func){
    for(let i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}


function mapArray(arr, callback){
    let myNewArray = [];
    executeforEach(arr, arg => myNewArray.push(callback(Number(arg))));
    return myNewArray;
}


function filterArray(arr, callback){
    let newArray = [];
    executeforEach(arr, arg => callback(arg) ? newArray.push(arg) : 0);
    return newArray;
}


function flipOver(str){
    let strReverse = '';
    for(let i = str.length-1; i >= 0; i--){
        strReverse = strReverse + str[i];
    }

    return strReverse;
}


function makeListFromRange(arr){
    let newArr = [];
    for(let i = arr[0]; i <= arr[1]; i++){
        newArr.push(i);
    }

    return newArr;
}


function getArrayOfKeys(map, field){
    let newArray = [];
    executeforEach(map, arg => newArray.push(arg[field]));
    return newArray;
}


function substitute(arr){
    let newArray = [];
    let min = 30;
    newArray = mapArray(arr, arg => arg > min ? arg : '*');
    return newArray;
}


function getPastDay(d, daysLeft){
    let newDate = new Date(d);
    newDate.setDate(newDate.getDate() - daysLeft);
    return newDate.getDate();
}


function formatDate(d){
    let min = 10;
    let newDate = new Date(d);
    let hour = newDate.getHours();
    if(hour < min){
        hour = '0' + hour;
    }
    let minute = newDate.getMinutes();
    if(minute < min){
        minute = '0' + minute;
    }

    return `${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()} ${hour}:${minute}`;
}

