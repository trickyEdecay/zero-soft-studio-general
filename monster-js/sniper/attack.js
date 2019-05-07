var MAX_BLOOD = 200;
/*自定义怪物名和血量*/
var monster = {
	name:"monster",
	bloodValue:MAX_BLOOD,
}

/*对怪物名和血量进行初始化*/
var bloodValueEle = document.getElementById("blood-value");
var monsterNameEle = document.getElementById("monster-name");
bloodValueEle.innerHTML = monster.bloodValue;
monsterNameEle.innerHTML = monster.name;

/*获得攻击按钮元素*/
var attackBtnEle = document.getElementById("attack-btn");

/*治疗的控制*/
var healTimer;

/*为攻击按钮元素添加事件监听器*/
attackBtnEle.addEventListener("click",attack);

function attack(){
	var blood = document.getElementById("blood");
	monster.bloodValue -= randomValue(15,35);
	/*当血量小于35时改变其颜色*/
	if(monster.bloodValue <= 35){
		blood.classList.add("dying");
	}

	if(monster.bloodValue <= 0){
		monster.bloodValue = 0;
		clearInterval(healTimer);
	}
	bloodValueEle.innerHTML = monster.bloodValue;
	blood.style.width = (monster.bloodValue/2)+"%";
	if(monster.bloodValue == 0){
		setTimeout(function(){
			alert(monster.name+"被击败!!!");
			removeEventListener("click",attack); 
		},0);
	}
}

/*生成一个在(lower,upper]区间的随机数*/
function randomValue(lower,upper){
	return Math.floor(Math.random()*(upper-lower)+lower)
}

/*让monster每一秒恢复一定血量*/
healTimer = setInterval(function(){
	monster.bloodValue += 6;
	/*当血量大于最大血量时，使其为最大血量*/
	if(monster.bloodValue >= MAX_BLOOD)
		monster.bloodValue = MAX_BLOOD;

	bloodValueEle.innerHTML = monster.bloodValue;
	blood.style.width = (monster.bloodValue/2)+"%";
	if(monster.bloodValue > 35)
		blood.classList.remove("dying");
},1000);


/*获得设置怪物名的input元素和按钮元素*/
var setNameEle = document.getElementById("set-name");
var changeNameEle = document.getElementById("change-name");

/*设置按钮效果*/
changeNameEle.addEventListener("click",setMonsterName);

/*实现回车设置名字效果*/
setNameEle.onkeydown = function(){
	if (event.keyCode==13) {
		setMonsterName();
	}
}

/*设置怪物的名称*/
function setMonsterName(){
	var name = setNameEle.value;
	if(name.trim() == ""){
		return;
	}
	else{
		monster.name = name;
		monsterNameEle.innerHTML = monster.name;
	}	
}