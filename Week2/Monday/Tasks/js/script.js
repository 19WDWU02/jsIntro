$(document).ready(function(){

    var navOpen = false;
    console.log(navOpen);
    $('#ham').click(function(){
        $('.navBar').toggleClass('open');
        if(navOpen == false){
            navOpen = true;
        } else {
            navOpen = false;
        }
        console.log(navOpen);
    });

    $("#circle").click(function(){
        if(navOpen == true){
            $("#circle").addClass('red').removeClass('blue');
        } else {
            $("#circle").addClass('blue').removeClass('red');
        }
    })

    var list = [];
    var clickNumber = 0;
    $("#button").click(function(){
        clickNumber++;
        list.push(clickNumber);
        console.log(list);
    })




});
