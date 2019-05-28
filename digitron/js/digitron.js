// 声明各个数码管数字变量，方便重新初始化
var preN1=0;
var preN2=0;
var preN3=0;
var preN4=0;
$("input").keyup(function(){
    var N=$("input").val().replace(/\s/g,"").toString();
    console.log(N);
    removelight();
    switch(N.length){
    case 1:
        lightfirst(N[0]);
        break;
    case 2:
        lightsecond(N[1]);
        lightfirst(N[0]);
        break;
    case 3:
        lightthird(N[2]);
        lightsecond(N[1]);
        lightfirst(N[0]);
        break;
    case 4:
        lightfourth(N[3]);
        lightthird(N[2]);
        lightsecond(N[1]);
        lightfirst(N[0]);
        break;
    default:
        $(".input-frame").val(" ");
    }
});

// 各个数码管的点亮函数
function lightfirst(single){
    $(".num-first").addClass("show-"+single);
    preN1=single;
}
function lightsecond(tens){
    $(".num-second").addClass("show-"+tens);
    preN2=tens;
}
function lightthird(hundred){
    $(".num-third").addClass("show-"+hundred);
    preN3=hundred;
}
function lightfourth(thousand){
    $(".num-fourth").addClass("show-"+thousand);
    preN4=thousand;
}
// 一次性熄灭所有数码管函数
function removelight(){
    $(".num-first").removeClass("show-"+preN1);
    $(".num-second").removeClass("show-"+preN2);
    $(".num-third").removeClass("show-"+preN3);
    $(".num-fourth").removeClass("show-"+preN4);
}