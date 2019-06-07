//当前图片的索引
var i=0;
$(".circle")[i].classList.add("color");


//点圆圈后显示图片
$(".circle").click(function(){
    jump($(this));
});
//实现点圆圈后显示图片
function jump($circle){
    //是否与点的圆圈对应
    var boo=false;
    //循环找到是哪个点对应
    for(var j=0;j<$(".circle").length;j++){
        //找到后boo=true
        if($(".circle")[j]===$circle[0]){
            boo=true;
            //i等于图片的索引
            i=j;
        }
        // 找到后，后面图片如果移动过，则取消
        if(boo===true){
            if($("img")[j].classList.length===1){
                $("img")[j].classList.remove("translateX");
            }
            continue;
        }
        //找到前，如果图片没移动过，则使他移动
        if($("img")[j].classList.length===0){
            $("img")[j].classList.add("translateX");
        }
    }
}

//表明图片还没到最后一张
var zheng=true;
//定时器
var timer=null;
keyer();
function keyer() {
    timer=setInterval(function(){
        if(i===$("img").length-1){
            zheng=false;
        }
        //没到最后一张，就继续移动，到最后一张，把之前的移动取消
        if(zheng===true){
            $("img")[i].classList.add("translateX");
            if(i===$("img").length-2){
                zheng=false;
                i=-1;
            }
            i++;
        }else{
            for(var j=0;j<=$("img").length-2;j++){
                $("img")[j].classList.remove("translateX");
            }
            zheng=true;
        }
        
    },1000*3);
}

//悬停取消定时器
$("#container").mouseover(function(){
    clearInterval(timer);
})
// 不悬停开启定时器
$("#container").mouseout(function(){
    keyer();
})
// 向左移动图片
$("#left").click(function(){
    if(i===0) return;
    i--;
    $("img")[i].classList.remove("translateX");
});
// 向右移动图片
$("#right").click(function(){
    if(i===$("img").length-1) return;
    $("img")[i].classList.add("translateX");
    i++;
});



