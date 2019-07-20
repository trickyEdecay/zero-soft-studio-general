
/*轮播图第一页的索引值 */ 
var index=0; 
/*左边箭头 */
var  leftEle=$(".arrow-box-left");
/*右边箭头 */
var  rightEle=$(".arrow-box-right");
/* 小圆点*/
var potEle=$(".pot ul li");
/* 点击小圆点的索引*/
var potindex=$(this).index();

//设计计时器，实现每3s自动播放

 var timer=setInterval(function(){
      index++;
      if(index===3){
            index=0;          
      }
      $(".sowing-content ul li").eq(index).addClass("active").siblings(".active").removeClass("active");
       $(".pot ul li").eq(index).addClass("active").siblings(".active").removeClass("active");

   },3000)



//实现点击方向箭头切换图片
 leftEle.click(leftSwitch);
 function leftSwitch(){
       
      --index;
       if(index===-1){index=3;}
       $(".sowing-content ul li").eq(index).addClass("active").siblings(".active").removeClass("active");
       $(".pot ul li").eq(index).addClass("active").siblings(".active").removeClass("active");
      }

 rightEle.click(rightSwitch);
 function rightSwitch(){
      ++index;
       if(index===4){index=0;} 
       $(".sowing-content ul li").eq(index).addClass("active").siblings(".active").removeClass("active");
       $(".pot ul li").eq(index).addClass("active").siblings(".active").removeClass("active");
      }

 //实现点击小圆点跳转
potEle.hover(function(){
      
      potindex=$(this).index();
      $(".pot ul li").eq(potindex).addClass("active").siblings(".active").removeClass("active");
      $(".sowing-content ul li").eq(potindex).addClass("active").siblings(".active").removeClass("active");
    }
);




