function yourName(){
    // console.log("button has been clicked");
    var name = prompt("What is your name?");
    var age = prompt("What is your age?");
    console.log(name);
    welcome(name, age);
}

function guest(){
    var age = prompt("What is your age?");
    welcome("guest", age);
}

function welcome(x, y){
    console.log(x);
    console.log("Hello " + x + " you are " + y + " years old");
}






function register(){
    var username = prompt("Please enter a username");
    var usernameValid = validate(username, 4);
    console.log(usernameValid);
    if(usernameValid === false){
        console.log("Your username is invalid");
        return;
    }
    var password = prompt("Please enter a password");
    var passwordValid = validate(password, 6);
    console.log(passwordValid);
    if(passwordValid === false){
        console.log("Your password is invalid");
        return;
    }

    console.log("You are good to go and all registered");

}

function validate(value, minLength, max){
    if(value.length >= minLength){
        return true;
    } else {
        return false;
    }

}
