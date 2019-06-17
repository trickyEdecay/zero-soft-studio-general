var monster = {
    name:"tricky",
    hp:100
};
var monsterNameEle = document.getElementById("monster-name");
var monsterHpEle = document.getElementById("monster-hp");

// monsterNameEle.innerHTML = monster.name;
monsterHpEle.innerHTML = monster.hp;

var attackBtnEle= document.getElementById("attack-btn");
attackBtnEle.addEventListener("click",attack);
var hpBloodEle = document.getElementById("hp-blood");

var healTimer;

// function test(fn){
//     fn();
// }
// test(attack);

function attack(){
    // if(monsterStatus==="dead"){
    //     return;
    // }

    monster.hp-=random(5,25);
    if(monster.hp<=20){
        hpBloodEle.classList.add("dying");
        // alert("小怪兽血量低于20%");
    }
    if(monster.hp<0){
        monster.hp=0;
        clearInterval(healTimer);
        // monsterStatus="dead";
        // attackBtnEle.removeEventListener("click",attack);
        alert("小怪兽死了");
    }
    hpBloodEle.style.width = monster.hp+"%";
    monsterHpEle.innerHTML = monster.hp;
}
function changeName(){
    var monsterNameInputEle = document.getElementById("monster-name-input");
    var newName = monsterNameInputEle.value;
    if(newName.trim()===""){
        return;
    }
    monster.name = newName;
    monsterNameEle.innerHTML = monster.name;
}
function random(lower,upper){
    return Math.floor(Math.random() * (upper-lower))+lower;
}
/*实现怪兽的回血*/
healTimer = setInterval(function(){
    if(monster.hp<=0){
        return;
    }
    monster.hp+=5;
    if(monster.hp>=100){
        monster.hp = 100;
    }
    hpBloodEle.style.width = monster.hp+"%";
    monsterHpEle.innerHTML = monster.hp;
},1000);