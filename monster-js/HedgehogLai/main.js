var trickyHp=100;
//定义初始血量

var trickyHpEle=document.getElementById("tricky-hp")
//定义并设置血量接口

var attackEle=document.getElementById("attack")
//定义并设置攻击接口

Math.random();
//调用random（）方法

function random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
}
//随机数取整

function attackway(){ 
      trickyHp-=(random(0,10));
      if(trickyHp<=0){
         trickyHp=0;
      }
      if(trickyHp<=20){
         trickyHpEle.style.background="red";
      }
      trickyHpEle.style.width=trickyHp+"%";
      
      if(trickyHp==0){
         alert("The tricky became a ghost");
      }
}

