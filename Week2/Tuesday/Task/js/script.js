
var items = [];
function addToList(){

    // console.log("adding to list");
    var newItem = prompt("What item are you wanting to add to the list?");
    if(newItem.length > 0){
        document.getElementById("List").innerHTML += "<li>" + newItem + "</li>";
        items.push(newItem);
        console.log(items);
    } else {
        console.log("Please make sure you input a value");
    }
}
