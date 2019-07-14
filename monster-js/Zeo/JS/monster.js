
myBtnEle=document.getElementById("attack-btn");   //通过document获得元素，通过Id的方式
monsterNameEle=document.getElementById("monster-name");
bloodNumberEle=document.getElementById("blood-number");
bloodHpTopEle=document.getElementById("blood-hp-top");



monsterNameEle.innerHTML="渣男";    //monser的重命名
var HpPercent = 100;

function attack() {
    var randomNumber = randomNum(5,15);
    if(bloodNumberEle.innerHTML-randomNumber<=0)
    {
        bloodNumberEle.innerHTML=0;
        bloodHpTopEle.style.width=0;
    }else {
        HpPercent -= randomNumber;
        bloodNumberEle.innerHTML-=randomNumber;
        bloodHpTopEle.style.width = (HpPercent)+"%";       
    }
}

function randomNum(minNum,maxNum){   //生成2-9的随机数
    switch(arguments.length){ 
    case 1: 
     return parseInt(Math.random()*minNum+1); 
    break; 
    case 2: 
     return parseInt(Math.random()*(maxNum-minNum+1)+minNum); 
    break; 
    default: 
     return 0; 
    break; 
    } 
}