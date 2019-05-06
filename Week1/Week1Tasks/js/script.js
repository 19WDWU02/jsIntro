// var coffeePrice = 3.50;
// var order = parseInt(prompt("How many coffees are you ordering?"));
// var total;
// if(order >= 10){
//     total = coffeePrice * order;
//     var discount = total * 0.15;
//     total = total - discount;
// } else {
//     total = coffeePrice * order;
// }
// console.log(total);



// var muffins = parseInt(prompt("how many muffins are you ordering?"));
// var muffinPrice;
// if(muffins < 10){
//     muffinPrice = 2.35;
// } else if(muffins < 25){
//     muffinPrice = 2.10;
// } else {
//     muffinPrice = 1.90;
// }
// var total = muffins * muffinPrice;
// console.log(total);


var numberOfSteaks = parseInt(prompt("How many steaks are you ordering?"));
var steakPrice = 25.60;
var numberOfFree, totalNumberOfSteaks, totalPrice;
// var totalNumberOfSteaks;
// var totalPrice;

// if(numberOfSteaks == 0){
//     console.log("please get out");
// }

if(numberOfSteaks % 3 === 0){
    numberOfFree = numberOfSteaks / 3;
    totalNumberOfSteaks = numberOfSteaks;
} else {
    var remainder = numberOfSteaks % 3;
    var numberOfPaid = numberOfSteaks - remainder;
    totalNumberOfSteaks = numberOfSteaks;
    numberOfFree = numberOfPaid / 3;
    if(remainder === 2){
        console.log("You get a free Steak no matter what");
        totalNumberOfSteaks++;
        numberOfFree++;
    }
    console.log(remainder);
}
totalPrice = (totalNumberOfSteaks - numberOfFree) * steakPrice;

console.log("You have recieved " + totalNumberOfSteaks + " of steaks");
console.log("You get " + numberOfFree + " free Steaks");
console.log("Your total price is $" +totalPrice);
