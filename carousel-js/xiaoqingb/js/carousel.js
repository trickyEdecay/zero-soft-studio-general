// 定义翻滚页的当前位置，还有左右移动的值
var position=0,left=11,right=00;
// 当前页面序号
var currentPicIndex=1;
// 图片宽度
var picWidth=400;
// 在函数里的计时器2
var timer;
// 点亮悬浮的小点点
indicator(currentPicIndex);
// 定义自动翻页的计时器1
var slide=setInterval(move,3000);

// 翻页函数，跳转函数合并
function move(direction=right){
    clearInterval(slide);
    clearInterval(timer);
    removeIndicator();
    if(direction===left){
        if(currentPicIndex===1){
            position=-picWidth*3;
            currentPicIndex=4;
        }
        else{
            position+=picWidth;
            console.log("左移");
            currentPicIndex--;
        }
    }
    if(direction===right){
        if(currentPicIndex===4){
            position=0;
            currentPicIndex=1;
        }
        else{
            position-=picWidth;
            console.log("右移");
            currentPicIndex++;
        }
    }
    if(direction===1||direction===2||direction===3||direction===3)
    {
        positionHandChange(direction);
    }
    indicator(currentPicIndex);
    console.log("变换时的值："+position);
    $(".inner-container").css('transform','translateX('+position+'px)');
    timer=setInterval(move,3000);
}

// 小点点的（跳转位置和当前页面）修改函数
function positionHandChange(nth){
    console.log("小点点起作用了");
    switch(nth){
        case 1:
            position=0;
            currentPicIndex=1;
            break;
        case 2:
            position=-picWidth*1;
            currentPicIndex=2;
            break;
        case 3:
            position=-picWidth*2;
            currentPicIndex=3;
            break;
        case 4:
            position=-picWidth*3;
            currentPicIndex=4;
            break;
    }
}

// 点亮单个小点点函数
function indicator(picIndex){
    switch(picIndex){
        case 1:
        $(".indicator:nth-child(1)").addClass("indicator-on");
        break;
        case 2:
        $(".indicator:nth-child(2)").addClass("indicator-on");
        break;
        case 3:
        $(".indicator:nth-child(3)").addClass("indicator-on");
        break;
        case 4:
        $(".indicator:nth-child(4)").addClass("indicator-on");
        break;
    }
}

// 熄灭所有小点点函数
function removeIndicator(){
    $(".indicator:nth-child(1)").removeClass("indicator-on");
    $(".indicator:nth-child(2)").removeClass("indicator-on");
    $(".indicator:nth-child(3)").removeClass("indicator-on");
    $(".indicator:nth-child(4)").removeClass("indicator-on");
}


// 绑定左右切换按钮事件
$(".btn-left").click(function(){
    move(left);
    console.log(position);
});
$(".btn-right").click(function(){
    move(right);
    console.log(position);
})

// 四个小点点的切换按钮事件
$(".indicator-1").click(function(){
    move(1);
});
$(".indicator-2").click(function(){
    move(2);
});
$(".indicator-3").click(function(){
    move(3);
});
$(".indicator-4").click(function(){
    move(4);
});



