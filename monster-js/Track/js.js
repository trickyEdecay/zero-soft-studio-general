var hp=100;
var myBtnEle=document.getElementById("button");
var monatweHpEle=document.getElementById("MonsterHp");
function hello() {
    hp-=10;
    document.getElementById("MonsterHp").style.width=hp+"%";
}