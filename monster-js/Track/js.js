var hp=100;
var monsterHpEle=document.getElementById("monster-hp");
function attack() {
    hp-=10;
    if(hp<0){
        hp=0;
        alert("The monster is dead")
    }
    monsterHpEle.style.width=hp+"%";
}