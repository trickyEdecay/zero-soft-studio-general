var hp=100;
var myBtnEle=document.getElementById("button");
var monatweHpEle=document.getElementById("monster-hp");
function hello() {
    hp-=10;
    if(hp<0){
        return 0;
    }
    document.getElementById("monster-hp").style.width=hp+"%";
}