var hello;

function onLoad(){
    console.log("running onLoad function");
    hello = "hello There";
    console.log(hello);
    var name = prompt("what is your name?");
    console.log(name);
}

onLoad();
testFunction();
console.log(hello);

function anotherFunction(){
    console.log(name);
}
