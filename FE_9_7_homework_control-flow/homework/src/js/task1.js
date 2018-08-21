let userLogin = prompt('Please enter your login here!');
let res = '';

if(userLogin === '' || userLogin === null){
    res = 'Canceled!';
}else if(userLogin.length < 4){
    res = "I don't know any users having name length less than 4 symbols";
}else if(userLogin === 'User'){
    res = checkUser();
}else{
    res = "I don't know you!";
}

alert(res);

function checkUser(){
    let userPassword = prompt('Please enter your password!');
    let result = '';

    if(userPassword === 'SuperUser') {
        result = checkDayTime();
    }else{
        result = 'Wrong password';
    }

    return result;
}

function checkDayTime(){
    const dayHours = 20;
    let result = 'Good day';

    if (new Date().getHours() >= dayHours){
        result = 'Good evening';
    }

    return result;
}
