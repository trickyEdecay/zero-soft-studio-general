var hehpEle=document.getElementById("elder-brother-hp");
var t=100;
hehpEle.innerHTML=t;

var myhpEle=document.getElementById("game-player-hp");
var x=100;
myhpEle.innerHTML=x;

function attack(){
	myattack();
	hisattack();
}

function myattack(){
	t-=random(5,10);
	if(t<0){
		t=0;
		alert("师兄死了，再接再厉");
	}
	hehpEle.innerHTML=t;
	hehpEle.style.width=t+"%";
	return 0;
}
function hisattack(){
	x-=random(5,10);
	if(x<0){
		x=0;
		alert("你死了，嘿嘿嘿");
	}
	myhpEle.innerHTML=x;
	myhpEle.style.width=x+"%";
	return 0;
}

function random(lower,higher){
	return Math.floor(Math.random()*(higher-lower)+lower);
}