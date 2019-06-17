/* 可移动容器 */
var slideShow = $("#inner-container")
/* 图片尺寸 */
var picWidth=400;
/* 当前位置 */
var position=0
/* 下面三个小店 */
var indicatorBtn = $(".indicator")
/* 左边按钮 */
var LeftBtn=$("#left-btn")
/* 右边按钮 */
var RightBtn=$("#right-btn")
/* 计时器 */
var timer=null;
/* 页面序号 */
var iNow=1;
/* 三个小店亮灭并跳转到相应页面 */
indicatorBtn.on("click",function(){
    $(this).addClass("active").siblings().removeClass("active");
    var index=$(this).index();
    iNow=index;
    switch(iNow){
        case 0:
            position=0;
            slideShow.css('transform','translateX('+position+'px)');
        break;
        case 1:
            position=-picWidth;
            slideShow.css('transform','translateX('+position+'px)')
        break;
        case 2:
            position=-picWidth*2;
            slideShow.css('transform','translateX('+position+'px)') 
        break;
    }
})
/* 计时器 */
indicatorBtn.eq(0).addClass("active").siblings().removeClass("active");
timer=setInterval(jump,3000)
function jump(){
        if(iNow>2){
            iNow=0;
        }
        indicatorBtn.eq(iNow).trigger("click");
        iNow++;
}
/* 左边按钮绑定事件 */
LeftBtn.on("click",function(){
    switch(iNow){
        case 0:
            iNow=2;
            indicatorBtn.eq(iNow).trigger("click")
        break;
        case 1:
            iNow=0;
            indicatorBtn.eq(iNow).trigger("click");   
        break;
        case 2:
            iNow=1;
            indicatorBtn.eq(iNow).trigger("click");
        break;
    }
})

/* 给右边绑定事件 */
RightBtn.on("click",function(){
    switch(iNow){
        case 0:
            iNow=1;
            indicatorBtn.eq(iNow).trigger("click")
        break;
        case 1:
            iNow=2;
            indicatorBtn.eq(iNow).trigger("click")
        break;
        case 2:
            iNow=0;
            indicatorBtn.eq(iNow).trigger("click")  
        break;
    }
})





