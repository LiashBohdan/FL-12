function Fighter({name, damage, hp, strength, agility}){
    
    this.getName = function(){
        return name;
    }

    this.getDamage = function(){
        return damage;
    } 

    this.getHealth = function(){
        return hp;
    };

    this.getStrength = function(){
        return strength;
    }

    this.getAgility = function(){
        return agility;
    }

    let wins = 0;
    let losses = 0;
    let fighterTotalHp = hp;
    let totalStrenge = 100;
    let randomUpperBound = 101;
    
    this.attack = function(defender){
        let defenderProtection = totalStrenge - (defender.getStrength() + defender.getAgility());
        let attackChance = Math.random() * randomUpperBound;

        if(defenderProtection < attackChance){
            console.log(`${this.getName()} attack missed`);
        }else{
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
            defender.dealDamage(this.getDamage());
        }
    }


    this.dealDamage = function(countDamage){
        let hpAfterDamage = this.getHealth() - countDamage;
        if(hpAfterDamage < 0){
            hp = 0;
        }else{
            hp = hpAfterDamage;
        }
    }

    this.logCombatHistory = function(){
        console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
    };


    this.addWin = function(){
        wins++;
    }  
     this.addLoss = function(){
        losses++;
     } 

    this.heal = function(countHeal){
        let hpAfterHeaf = this.getHealth() + countHeal;
        if(hpAfterHeaf < fighterTotalHp){
            hp = hpAfterHeaf;
        }else{
            hp = fighterTotalHp;
        }
     }
    
}

function battle(fighter1, fighter2){
    if(fighter1.getHealth() === 0){
        console.log(`${fighter1.getName()} is dead and can't fight.`);
    }else if(fighter2.getHealth() === 0){
        console.log(`${fighter2.getName()} is dead and can't fight.`);
    }else{
        while(fighter2.getHealth() !== 0 && fighter1.getHealth() !== 0){
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
            if(fighter2.getHealth() === 0){
                fighter1.addWin();
                fighter2.addLoss();
                console.log(`${fighter1.getName()} has won!`);
            }else if(fighter1.getHealth() === 0){
                fighter2.addWin();
                fighter1.addLoss();
                console.log(`${fighter2.getName()} has won!`);
            }
        }
    }
}
