$input=$("#input");          //输入框

$input.keydown(function(e){      //输入框按enter键时显示数字
    if(e.keyCode==13){
        showNum($input.val());
    }
})

$("#certain").click(function(){   //按按钮时显示数字
        showNum($input.val());
})

$container=$("#digitron-container");       //包含所有数码管的大盒子

function showNum(num){            //获取数字，给大盒子加类
    if(0<=num&&num<=9){            //确定输入值是否为0~9
        if($container[0].classList.length>0){       //确认之前是否有类，有类表明之前已输入值
            $container.removeClass($container[0].classList[0]);  //去除这个类，消其作用
        }
    }else{
        return;
    }
    
    if(num==0){
        $container.toggleClass("zero");
    }
    if(num==1){
        $container.toggleClass("one");
    }
    if(num==2){
        $container.toggleClass("two");
    }
    if(num==3){
        $container.toggleClass("three");
    }
    if(num==4){
        $container.toggleClass("four");
    }
    if(num==5){
        $container.toggleClass("five");
    }
    if(num==6){
        $container.toggleClass("six");
    }
    if(num==7){
        $container.toggleClass("seven");
    }
    if(num==8){
        $container.toggleClass("eight");
    }
    if(num==9){
        $container.toggleClass("nine");
    }
}