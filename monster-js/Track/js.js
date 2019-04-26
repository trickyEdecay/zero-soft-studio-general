var monsterhp=100;
var herohp=100;
var monsterHpEle=document.getElementById("monster-hp");
var heroHpEle=document.getElementById("hero-hp");


Math.random();
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function heroattack() {
    if(random(0,100)>50){
        monsterhp-=(random(0,10));
    }
    monsterhp-=(random(5,10));
    if(monsterhp<0){
        monsterhp=0;
        alert("The monster is dead");
    }
    monsterHpEle.style.width=monsterhp+"%";
}
function monsterattack(){
    if(random(0,100)>90){
        herohp-=(random(0,10));
    }
    herohp-=(random(5,10));
    if(herohp<0){
        herohp=0;
        alert("you are dead");
    }
    heroHpEle.style.width=herohp+"%";
}


