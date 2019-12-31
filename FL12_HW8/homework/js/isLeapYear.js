function isLeapYear(date){
    let year = new Date(date).getFullYear();
    if(!isNaN(year)){
        if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
            return `${year} is a leap year`;
        }else{
            return `${year} is not a leap year`;
        }
    }else{
        return 'Invalid Date';
    }    
}

isLeapYear('2020-01-01 00:00:00'); 
isLeapYear('2021-01-01 00:00:00'); 
isLeapYear(1213131313135465656654564646542132132131); 
isLeapYear(1213131313); 