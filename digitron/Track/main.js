


$(".input").keypress(function(){
   /*  console.log($(".digitron").hashasClass()); */
    var number=$(".input").val();
    $(".digitron").toggleClass(number);
})