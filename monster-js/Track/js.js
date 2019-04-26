var monsterhp=100;
var herohp=100;
var monsterHpEle=document.getElementById("monster-hp");
var critEle=document.getElementById("crit");

Math.random();
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function heroattack() {
    critEle.style.opacity="0.0";
    if(random(0,100)>50){
        monsterhp-=(random(0,10));
        critEle.style.opacity="1.0";
    }
    monsterhp-=(random(5,10));

    monsterHpEle.style.width=monsterhp+"%";
    if(monsterhp<0){
        monsterhp=0;
        alert("The monster is dead");
    }
}


