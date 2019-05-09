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





// Object
var carType;
var carColour;
var carYear;

var car = {
    type: 'Honda',
    colour: 'red',
    year: 2009,
    warrent: false,
    owners: ['Sam', 'Jack', 'Jess']
}
// console.log(car);
// console.log(car.year);
// console.log(car['year']);
// car.year = 2019;
// console.log(car);
// console.log(car.year);
//
// car.km = 10000;
// console.log(car);

var items = [
    {
        name: 'Apples',
        price: 2.50,
        inStock: true
    },
    {
        name: 'Oranges',
        price: 1.45,
        inStock: false
    },
    {
        name: 'Pears',
        price: 3.00,
        inStock: true
    }
];

for (var i = 0; i < items.length; i++) {
    // console.log(items[i]);
    if(items[i].inStock === true){
        document.getElementById('list').innerHTML += '<li>' + items[i].name + ' - $' +  items[i].price+'</li>';
    }
}


var days = [
    {
        day: 'Monday',
        tasks: ['Cleaning', 'Shopping']
    },
    {
        day: 'Tuesday',
        tasks: ['Homework']
    },
    {
        day: 'Wednesday',
        tasks: ['Work', 'Gym', 'Take out Rubbish']
    }
];

for (var i = 0; i < days.length; i++) {
    console.log(days[i].day);
    // console.log(days[i].tasks);
    for (var a = 0; a < days[i].tasks.length; a++) {
        console.log(days[i].tasks[a]);
    }

}
