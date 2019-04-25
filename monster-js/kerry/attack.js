
var hehpEle=document.getElementById("elder-brother-hp");
var t=hehpEle.innerHTML;

var myhpEle=document.getElementById("game-player-hp");
var x=myhpEle.innerHTML;

function myattack(){
	if(myhpEle.innerHTML==0){
		alert("你死了，再接再厉");
		return 0;
	}
	t-=random(5,10);
	if(t<0){
		t=0;
	}
	hehpEle.innerHTML=t;
	hehpEle.style.width=t+"%";
	return 0;
}
function heattack(){
	if(hehpEle.innerHTML==0){
		alert("师兄死了，嘿嘿嘿");
		return 0;
	}
	x-=random(5,10);
	if(x<0){
		x=0;
	}
	myhpEle.innerHTML=x;
	myhpEle.style.width=x+"%";
	sleep(1);
	return 0;
}

function random(lower,higher){
	return Math.floor(Math.random()*(higher-lower)+lower);
}

