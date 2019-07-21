var index = 0;
var autoplay = setInterval(gonext,3000);
$("span").eq(0).css('background','#4A90E2');

function change(){
    var change = -400 * index;
    $('ul').css('transform', "translateX(" + change + "px)");
}

function gonext() {
    $("span").eq(index).css('background', '#fff');
    index++;
    if (index === $("li").length) { index = 0; }
    change();
    window.index = index;
    $("span").eq(index).css('background', '#4A90E2');  
}
$("#gonext").on("click",gonext);


$("#gopre").on("click",goprev);
function goprev(){
    $("span").eq(index).css('background','#fff');
    index--;
    if(index < 0) {index = $("li").length-1;}
    change();
    window.index = index; 
    $("span").eq(index).css('background','#4A90E2');   
}

$("span").click (function display(){   
    $("span").eq(index).css('background','#fff');
    index = $(this).index();
    change();
    window.index = index; 
    $("span").eq(index).css('background','#4A90E2');   
})


$(".main-container").mouseover(function () {
    // 移入
    clearInterval(autoplay);   
});

$(".main-container").mouseout(function(){
    autoplay = setInterval(gonext,3000);
    window.autoplay = autoplay;
  });




