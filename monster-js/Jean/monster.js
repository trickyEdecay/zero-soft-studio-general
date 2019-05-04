var monster={
    name:"浣小熊",
    hp:100,
}
var healTime;
var monsterNameEle=document.getElementById("monster-name");
var monsterHpEle=document.getElementById("monster-hp");
var monsterHpBloodEle=document.getElementById("monster-hp-blood");
var attackEle=document.getElementById("attack");
monsterNameEle.innerHTML= monster.name;
monsterHpEle.innerHTML= monster.hp;

 attackEle.addEventListener("click",attack);
//攻击
function attack(){   
    monster.hp-=Random(8,25);
    if(monster.hp<0)
        {  monster.hp=0;
          clearInterval(healTime);
          alert("sorry！你的妖怪阵亡");
        
      }
    if(monster.hp<=25){
        monsterHpBloodEle.classList.add("dying");
      }
    monsterHpBloodEle.style.width=monster.hp+"%";
    monsterHpEle.innerHTML ="hp:"+ monster.hp;
}
//随机数
function Random(lower,upper){
   return Math.floor(Math.random()*(upper-lower))+lower;
}
//回血
healTime=setInterval(function(){
  monster.hp+=Random(5,10);
  if(monster.hp>=100){
     monster.hp=100;
  }
   monsterHpBloodEle.style.width=monster.hp+"%";
   monsterHpEle.innerHTML ="hp:"+ monster.hp;
},1000);

var changenameEle=document.getElementById("change-name");
changenameEle.addEventListener("click",change);
function change(){
   var changeInputEle=document.getElementById("monster-name-input");
   var newName=changeInputEle.value;
  if(newName.trim()===""){
     return;
  }
  monster.name=newName;
  monsterNameEle.innerHTML=monster.name;
}