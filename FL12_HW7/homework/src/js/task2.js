let user_balance = 0;
let user_pocket;
let number;
let attempts = 3;
let attempts_increment = 4;
let prize_first = 100;
let prize_second = 50;
let prize_third = 25;
let prize = [prize_first, prize_second, prize_third];
let prize_multiplier = 2;
let continue_game = true;
let max_range = 8;
let isWin = false;
 
if(confirm('Do you want to play a game?')){
    while(continue_game){   
        number = Math.floor(Math.random() * (max_range + 1));
        for(let i = 0; i < attempts; i++){
            user_pocket = prompt(`Choose a roulette pocket number from 0 to ${max_range}` +
            `\nAttempts left: ${attempts-i}` +
            `\nTotal prize: ${user_balance}$` +
            `\nPossible prize on current attempt: ${prize[i]}$`);
            if(Number(user_pocket) === number){
                user_balance += prize[i];
                isWin = true;
                if(confirm('Congratulation, you won!'+
                ' Your prize is:' + user_balance + ' $. Do you want to continue?')){
                   isWin =true;
                }else{
                    continue_game = true;
                    max_range += attempts_increment;
                    for(let i = 0; i < attempts; i++){
                        prize[i] = prize[i] * prize_multiplier;
                    }
                }
                break;
            }else{
               isWin = false;
            }
        }
        if(!isWin){
            alert('Thank you for your participation. Your prize is: ' + user_balance + ' $');
            if(confirm('Play again?')){
                continue_game = true;
                user_balance = 0;
            }else{
                continue_game = false;
            }
        }
    }
}else{
    alert('You did not become a billionaire, but can.');
}