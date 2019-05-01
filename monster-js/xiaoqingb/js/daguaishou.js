// 初始血量
var initialHealth=100;
var health=initialHealth;
// 获取复活按钮，初始不激活
var reviveEle=document.getElementById("revive");
// 获取血量
var bloodEle=document.getElementById("remain-blood");
// 获取血条
var volumnEle=document.getElementById("blood-volumn");
// 获取猜拳界面
var gameWindow=document.getElementById("Rock-paper-scissors");
// 定义出拳及复活次数
var myGuess,computerGuess,num=3;
// 获取猜拳情况
var decGame=document.getElementById("dec-game");
// 用户出拳
var fingerGuessingChoice={
    scissors:1
    ,rock:2
    ,paper:3
}
// 伤害函数
function hurt(){
    // 设置0为下限
    if(health<=0)
    {
        bloodEle.innerHTML="dead";
        document.getElementById("blood-volumn").style.width=0;
        // 弹窗询问是否复活,前提是还有复活次数
        if(num>0){
            if (confirm("他已经死翘翘了，要复活他不？")){
                alert("想救人？？？需进行猜拳");
                gameWindow.style.visibility="visible";
                // var ui = document.getElementById("Rock-paper-scissors");
                // ui.style.visibility="hidden";
                // reviveEle.onclick=bloodMaxed();
                // reviveEle.style.background="#FF6666";
            }
        }
    }
    else{
        // 计算掉血后剩余血量
        health-=randomNum(20,10);
        gameWindow.style.visibility="hidden";
        // 必须在这里提前置零，因为如果在弹窗处置零的话，会在弹窗后才会血量置零
        if(health<0){
            health=0;
        }           
        bloodEle.innerHTML="Hp:"+health;
        document.getElementById("blood-volumn").style.width=health+"%";
        
    }
}
// 扣血量函数
function randomNum(x,y){
    var a;
    a=parseInt((Math.random()*(x-y)+y));
    return a;
}
// 复活函数
function bloodMaxed(){
    health=100;
    document.getElementById("blood-volumn").style.width=health+"%";
    bloodEle.innerHTML=health;
    console.log(health);
    document.getElementById("dec").innerHTML="剩余复活次数："+(num-=1);
    gameWindow.style.visibility="hidden";
    if(num===0){
        alert("复活次数已经用完，再打死就复活不了喽");
    }
}

// 用户出拳
function scissors(){
    computerGuess=randomNum(4,1);
    if(fingerGuessingChoice.scissors===computerGuess){
        decGame.innerHTML="你和电脑都出了剪刀，复活失败";
    }
    else if(computerGuess===2){
        decGame.innerHTML="你出了剪刀，电脑出了石头，复活失败";
    }
    else if(conputerQuan===3){
        decGame.innerHTML="";
        alert("复活成功");
        bloodMaxed();
    }
}
function rock(){
    computerGuess=randomNum(4,1);
    if(fingerGuessingChoice.rock===computerGuess){
        decGame.innerHTML="你和电脑都出了石头，复活失败";
    }
    else if(computerGuess===1){
        decGame.innerHTML="";
        alert("复活成功");
        bloodMaxed();       
    }
    else if(conputerQuan===3){
        decGame.innerHTML="你出了石头，电脑出了布，复活失败";
    }
}
function paper(){
    computerGuess=randomNum(4,1);
    if(fingerGuessingChoice.paper===computerGuess){
        decGame.innerHTML="你和电脑都出了布，复活失败";
    }
    else if(computerGuess===1){
        
        decGame.innerHTML="你出了布，电脑出了剪刀，复活失败";      
    }
    else if(conputerQuan===2){
        decGame.innerHTML="";
        alert("复活成功");
        bloodMaxed(); 
    }
}

setInterval(addblood,300);
function addblood(){
    if(0<health&&health<100){
    health+=10;
    if(health>=100) health=100;
    bloodEle.innerHTML="Hp:"+health;
    document.getElementById("blood-volumn").style.width=health+"%";
    }
    if(65>health) document.getElementById("blood-volumn").style.backgroundColor="pink";
    if(health<35) document.getElementById("blood-volumn").style.backgroundColor="green";
}