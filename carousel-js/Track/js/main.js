/* 可移动容器 */
var slideShow = $("#inner-container")
/* 图片尺寸 */
var picWidth=400;
/* 当前位置 */
var position=0
/*  */
var indicatorBtn = $(".indicator")

var LeftBtn=$("#left-btn")

var RightBtn=$("#right-btn")
/* 计时器 */
var timer=null;

indicatorBtn.on("click",function(){
    $(this).addClass("spot1").siblings().removeClass("spot1");
    var index=$(this).index();
    console.log(iNow);
    switch(index){
        case 0:
        $("#inner-container").animate({left:0});
        break;
        case 1:
        $("#inner-container").animate({left:-(picWidth*1)});
        break;
        case 2:
        $("#inner-container").animate({left:-(picWidth*2)});
        break;
    }
})


/* 页面序号 */
var iNow=0;
indicatorBtn.eq(iNow).trigger("click");
timer=setInterval(function(){
    if(iNow>3){
        iNow=0;
    }
    indicatorBtn.eq(iNow).trigger("click");

    iNow++;
},3000)







/* 左边按钮绑定事件 */
LeftBtn.on("click",function(){
    switch(iNow){
        case 1:
        position=-(picWidth*2);
        $("#inner-container").animate({left:position});
        iNow=3;
        break;
        case 2:
        position=0;
        $("#inner-container").animate({left:position});
        iNow=1;
        break;
        case 3:
        position=-(picWidth);
        $("#inner-container").animate({left:position});
        iNow=2;
        break;
    }
})

/* 给右边绑定事件 */
RightBtn.on("click",function(){
    switch(iNow){
        case 1:
        position=-picWidth;
        $("#inner-container").animate({left:position});
        iNow=2;
        break;
        case 2:
        position=-(picWidth*2);
        $("#inner-container").animate({left:position});
        iNow=3
        break;
        case 3:
        position=0;
        $("#inner-container").animate({left:position});
        iNow=1
        break;
    }
})





