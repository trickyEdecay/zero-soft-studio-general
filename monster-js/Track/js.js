var hp=100;
var monsterHpEle=document.getElementById("monster-hp");
Math.random();
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function attack() {
    if(random(0,100)>69){
        hp-=(random(0,10));
        return;
    }
    hp-=(random(5,10));
    if(hp<0){
        hp=0;
        alert("The monster is dead");
    }
    monsterHpEle.style.width=hp+"%";

}

