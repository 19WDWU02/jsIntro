// String
// Number
// undefined

// Boolean
// var variable1 = true;
// var variable2 = false;
//
//
// if(variable1 === true){
//     console.log("variable 1 is true");
// } else {
//     console.log("variable 1 is false");
// }
//
// if(variable1){
//     console.log("variable 1 is true");
// } else{
//     console.log("variable 1 is false");
// }
//
// if(variable2 === false){
//     console.log("variable 2 is false");
// }
//
// if(!variable2){
//     console.log("variable 2 is false");
// }


// Array
var itemList = ["Item 1" , "Item 2", "Item 3", "Item 4", "Item 5"];
// console.log(itemList);
itemList.push("Item 6");
// console.log(itemList);

itemList[2] = "This has been edited";
console.log(itemList)

// itemList[10] = "Item 7";
// console.log(itemList);
// console.log(itemList.length);
// console.log(itemList[4]);
// var welcome = "Hello there";
// console.log(welcome.length);


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = arr.splice(2,1);
console.log(arr);
console.log(removed);
