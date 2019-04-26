// 初始血量
var newblood=100;
// 获取复活按钮，初始不激活
var reviveEle=document.getElementById("revive");
// 获取血量
var bloodEle=document.getElementById("remain-blood");
// 获取血条
var volumnEle=document.getElementById("blood-volumn");
// 定义出拳及复活次数
var myGuess,computerGuess,num=3;
// 伤害函数
function hert(){
    // 设置0为下限
    if(newblood<=0)
    {
        bloodEle.innerHTML="dead";
        document.getElementById("blood-volumn").style.width=0;
        // 弹窗询问是否复活,前提是还有复活次数
        if(num>0){
            if (confirm("他已经死翘翘了，要复活他不？")){
                alert("想救人？？？需进行猜拳");
                document.getElementById("Rock-paper-scissors").style.visibility="visible";
                // var ui = document.getElementById("Rock-paper-scissors");
                // ui.style.visibility="visible";
                // reviveEle.onclick=bloodMaxed();
                // reviveEle.style.background="#FF6666";
            }
        }
    }
    else{
        // 计算掉血后剩余血量
        newblood-=bloodLoss();
        document.getElementById("Rock-paper-scissors").style.visibility="hidden";
        // 必须在这里提前置零，因为如果在弹窗处置零的话，会在弹窗后才会血量置零
        if(newblood<0){
            newblood=0;
        }           
        bloodEle.innerHTML="Hp:"+newblood;
        document.getElementById("blood-volumn").style.width=newblood+"%";
        
    }
}
// 扣血量函数
function bloodLoss(){
    var a;
    a=parseInt(Math.random()*(20-10)+10);
    return a;
}
// 复活函数
function bloodMaxed(){
    newblood=100;
    document.getElementById("blood-volumn").style.width=newblood+"%";
    bloodEle.innerHTML=newblood;
    console.log(newblood);
    document.getElementById("dec").innerHTML="剩余复活次数："+(num-=1);
    document.getElementById("Rock-paper-scissors").style.visibility="hidden";
    if(num===0){
        alert("复活次数已经用完，再打死就复活不了喽");
    }
}

// 猜拳游戏 剪刀石头布分别为1，2，3
// 电脑出拳
function computer(){
    computerGuess=parseInt(Math.random()*(4-1)+1);
    console.log(computerGuess);
}

// 用户出拳
function scissors(){
    myGuess=1;
    computer();
    if(myGuess===computerGuess){
        document.getElementById("dec-game").innerHTML="你和电脑都出了剪刀，复活失败";
    }
    else if(computerGuess===2){
        document.getElementById("dec-game").innerHTML="你出了剪刀，电脑出了石头，复活失败";
    }
    else if(conputerQuan===3){
        document.getElementById("dec-game").innerHTML="";
        alert("复活成功");
        bloodMaxed();
    }
}
function rock(){
    myGuess=2;
    computer();
    if(myGuess===computerGuess){
        document.getElementById("dec-game").innerHTML="你和电脑都出了石头，复活失败";
    }
    else if(computerGuess===1){
        document.getElementById("dec-game").innerHTML="";
        alert("复活成功");
        bloodMaxed();       
    }
    else if(conputerQuan===3){
        document.getElementById("dec-game").innerHTML="你出了石头，电脑出了布，复活失败";
    }
}
function paper(){
    myGuess=3;
    computer();
    if(myGuess===computerGuess){
        document.getElementById("dec-game").innerHTML="你和电脑都出了布，复活失败";
    }
    else if(computerGuess===1){
        
        document.getElementById("dec-game").innerHTML="你出了布，电脑出了剪刀，复活失败";      
    }
    else if(conputerQuan===2){
        document.getElementById("dec-game").innerHTML="";
        alert("复活成功");
        bloodMaxed(); 
    }
}
