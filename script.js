$(function(){
    $("#github").click(function(){
        $("#textbox-container").slideUp(900);
    });
    $("#insta").click(function(){
        $("#textbox-container").slideUp(900);
    });
    $("#codepen").click(function(){
        $("#textbox-container").slideUp(900);
        $("#textbox-message").slideToggle(900);
    });
    $("#about").click(function(){
        $("#textbox-container").slideToggle(900);


    });
});
