var realHp;
var hp;
window.onload=function(){
	hp=document.getElementById("real-hp");	
	realHp=hp.offsetWidth;
}
function hit(){
	realHp-=Math.round(Math.random()*45)+55;
	hp.style.width=realHp+"px";			
	if(realHp<=0){	
		hp.style.width=0+"px";	
		setTimeout("alert('怪物被杀死了！');", 0);
	}
}
