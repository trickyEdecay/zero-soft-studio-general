// 实现点搜索后跳转
var searchContentEle=document.getElementById("left");
var searchEle=document.getElementById("right");
searchEle.addEventListener("click",jump);
function jump(){
	var searchContent=searchContentEle.value;
	location.href="http://www.baidu.com/s?wd="+searchContent;
}
// 结束

//实现回车跳转
document.getElementById("left").onkeydown=function(e){
	if (e.keyCode==13) {
		jump();
	}
}
// 结束


// 实现点+后显示窗口
var circularEle=document.getElementById("circular");
var quanEle=document.getElementsByClassName("quan");
circularEle.addEventListener("click",dialogOut);
function dialogOut(){
	quanEle[0].classList.add("show");
}
// 结束

// 实现点取消后，窗口消失
var cancelEle=document.getElementById("cancel");
cancelEle.addEventListener("click",dialogCancel);
function dialogCancel(){
	quanEle[0].classList.remove("show");
}
// 结束

// 实现点黑屏后，窗口消失
var maskEle=document.getElementsByClassName("mask");
maskEle[0].addEventListener("click",dialogCancel);
// 结束

// 开始实现本地储存功能
var determineEle=document.getElementById("determine");
determineEle.addEventListener("click",addCollection);  //给确定按钮加监听器

function num(){       //计算收藏的数量
	var i=0;
	var smallEle=document.getElementsByClassName("small");
	while(smallEle[i].nextElementSibling!=undefined){
		i++;
	}
	return i+1;
}

function collection(titleEle,describeEle,link){     	//创建收藏盒子
	var aEle=document.createElement("a");
	aEle.className=document.getElementsByClassName("small")[0].className;
	aEle.href="http://"+link;
	document.getElementById("bottom").appendChild(aEle);

	var imgEle=document.createElement("img");
	imgEle.className=document.getElementsByClassName("small-image")[0].className;
	imgEle.src="https://i.loli.net/2019/05/07/5cd1467538e35.png";
	aEle.appendChild(imgEle);

	var divEle=document.createElement("div");
	divEle.className=document.getElementsByClassName("small-text")[0].className;
	aEle.appendChild(divEle);

	var h2Ele=document.createElement("h2");
	h2Ele.className=document.getElementsByClassName("small-text-h2")[0].className;
	h2Ele.appendChild(titleEle);
	divEle.appendChild(h2Ele);

	var pEle=document.createElement("p");
	pEle.className=document.getElementsByClassName("small-text-p")[0].className;
	pEle.appendChild(describeEle);
	divEle.appendChild(pEle);
}


function addCollection(){          //取到内容，建收藏并储存
	//取出填写的内容
	var title=document.getElementsByClassName("frame")[0].value.trim();
	var titleEle=document.createTextNode(title);
	var describe=document.getElementsByClassName("frame")[1].value.trim();
	var describeEle=document.createTextNode(describe);
	var link=document.getElementsByClassName("frame")[2].value.trim();

	if(title==""||describe==""||link=="")
		return;

	collection(titleEle,describeEle,link);	
	
	var i=num();    //i代表的是收藏盒子的数量
	// 开始本地储存
	localStorage.setItem("title["+(i-1)+"]",title);
	localStorage.setItem("describe["+(i-1)+"]",describe);
	localStorage.setItem("link["+(i-1)+"]",link);

	dialogCancel();      //清楚黑屏和窗口
	window.location.reload();      //刷新网页，实现再次填写时，不会出现上次填写的东西
}

var i=num();     //这个i代表的是刚开始盒子的数量，其实就是8
while(localStorage.getItem("title["+i+"]")!=undefined){        //这里会实现本地储存的资料以收藏显现
	var titleEle=document.createTextNode(localStorage.getItem("title["+i+"]"));
	var describeEle=document.createTextNode(localStorage.getItem("describe["+i+"]"));
	var link=localStorage.getItem("link["+i+"]");

	collection(titleEle,describeEle,link);

	i++;
}
