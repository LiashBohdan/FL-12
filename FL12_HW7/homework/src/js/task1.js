let min_length = 5;
let min_length_new_pass = 6;
let user_email = 'user@gmail.com';
let admin_email = 'admin@gmail.com';
let user_password = 'UserPass';
let admin_password = 'AdminPass';
let password;

let isKnownUser = false;
let isChangePassword = false;

let data = prompt('Input email');
if(data === ''){
    alert('Canceled');
}else if( data.length < min_length){
    alert('I don\'t know  any emails having name length less than 5 symbols');
}else{
    if(data === admin_email || data === user_email){
        isKnownUser = true;
    }else{
        alert('I don’t know you');
    }
}

if(isKnownUser){
    password = prompt('Input password');
    if(password === '' || password === null){
        alert('Canceled');
    }else{
        if(data === user_email && password === user_password){
            isChangePassword = true;
        }else if(data === admin_email && password === admin_password){
            isChangePassword = true;
        }else{
            alert('Wrong password');
        }
    }
}

if(isChangePassword){
    if(confirm('Do you want to change your password?')){
       let old_password = prompt('Input old password');
        if(old_password === password){
            let new_password = prompt('Input new passsword');
            if(new_password === '' || new_password === null){
                alert('Canceled');
            }else{
                if(new_password.length < min_length_new_pass){
                    alert('It’s too short password. Sorry.');
                }else{
                    let new_password_again = prompt('Input new password again');
                    if(new_password === new_password_again){
                        alert('You have successfully changed your password.');
                    }else{
                        alert('You wrote the wrong password.');
                    }
                }
            }
        }
    }else{
        alert('You have failed the change.');
    }
}





