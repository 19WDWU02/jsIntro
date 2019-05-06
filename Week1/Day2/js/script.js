var value = 10;
// console.log(value + 2);
// console.log(value - 2);
// console.log(value * 2);
// console.log(value / 2);
//
// console.log(++value);
//
// var newValue = value++;
// console.log(newValue);

// console.log(--value);

// +=
// -=
// *=
// /=

// var inputNumber = prompt("Please give me a number");
// if(inputNumber > 6){
//     console.log(inputNumber + " is greater than 6");
// } else {
//     console.log(inputNumber + " is less than 6");
// }

// > greater than
// < less than
// >= greater than or equals
// <= less than or equals
//
// == equals to
// === equals to and same data type
// != does not equal
// !== does not equal, or not same data type

// var randomNumber = prompt("Please enter the number 6");
// if(randomNumber == 6){
//     console.log("well done, you listened");
// } else {
//     console.log("you put in the wrong number");
// }


// When the child is under, or 5 there is no charge.
// For children who are older than 5 then the charge is $3.
// var childAge = prompt("how old is your child");
// if(childAge > 5){
//     console.log("you are charged $3");
// } else {
//     console.log("there is no charge");
// }


// When the mark is more than 49 the person gets a A grade.
// When the mark is less the person gets an F grade.
// var mark = prompt("what was your grade?")
// if(mark > 49){
//     console.log("you got an A");
// } else{
//     console.log("you got a F");
// }


// If someone earns more than $100 they pay tax at 10% of gross.
// For less than this, tax is charged at 9% of gross.
// What is the amount of tax
// var earnings = prompt("How much did you earn?");
// if(earnings > 100){
//     var tax = earnings * 0.10;
//     console.log("you have to pay $" + tax + " tax")
// } else {
//     var tax = earnings * 0.09;
//     console.log("you have to pay $" + tax + " tax")
// }
// var tax;
// if(earnings > 100){
//     tax = earnings * 0.10;
// } else {
//     tax = earnings * 0.09;
// }
// console.log("you have to pay $" + tax + " tax")

// When the mark is more than 49 the person gets a A grade.
// When the mark is less the person gets an F grade.
// var mark = prompt("what was your grade?")
// if(mark == 0){
//     console.log("fail")
// }
// if(mark < 30){
//     console.log("fail")
// }
// if(mark > 49){
//     console.log("you got an A");
// }
//
// if(mark == 0){
//     console.log("You got a F");
// } else if(mark < 30){
//     console.log("you got a C")
// } else if(mark < 60){
//     console.log("you got a B")
// } else {
//     console.log("you have passed");
// }

// if(mark < 0){
//     console.log("error, you must input a number greater than 0");
// } else if(mark > 100){
//     console.log("error, you must input a number less than 100");
// } else if(mark >= 90){
//     console.log("you get an A");
// } else if(mark >= 80){
//     console.log("you get a B");
// }


// %
// console.log(10%2);
// console.log(10%3);
// console.log(10%4);
// console.log(10%5);
// console.log(10%6);


// When the cost of the meal is more than $100
// there is no service charge. For other meals the service charge is 10%
// There are 3 people at your table all ordering different meals (3 prompts)
// Show the price for all 3 and then the total

// var person1 = prompt("how much is person 1's meal?");
// // console.log( parseInt(person1)  );
// // turns string into a number
// if(person1 < 100){
//     var person1Service = person1 * 0.10;
//     var person1Total = parseInt(person1) + person1Service;
// } else {
//     var person1Total = parseInt(person1);
// }
//
// var person2 = prompt("how much is person 2's meal?");
// if(person2 < 100){
//     var person2Service = person2 * 0.10;
//     var person2Total = parseInt(person2) + person2Service;
// } else {
//     var person2Total = parseInt(person2);
// }
// //
// var person3 = prompt("how much is person 3's meal?");
// if(person3 < 100){
//     var person3Service = person3 * 0.10;
//     var person3Total = parseInt(person3) + person3Service;
// } else {
//     var person3Total = parseInt(person3);
// }
//
// console.log("Person 1 Spends $" + person1Total);
// console.log("Person 2 Spends $" + person2Total);
// console.log("Person 3 Spends $" + person3Total);
// var total = person1Total + person2Total + person3Total;
// console.log("The total cost is $"+total);

var person1 = parseInt(prompt("how much is person 1's meal?"));
if(person1 < 100){
    person1 = (person1 * 0.10) + person1;
}

var person2 = parseInt(prompt("how much is person 2's meal?"));
if(person2 < 100){
    person2 = (person2 * 0.10) + person2;
}

var person3 = parseInt(prompt("how much is person 3's meal?"));
if(person3 < 100){
    person3 = (person3 * 0.10) + person3;
}

console.log("Person 1 Spends $" + person1);
console.log("Person 2 Spends $" + person2);
console.log("Person 3 Spends $" + person3);
var total = person1 + person2 + person3;
console.log("The total cost is $"+total);
