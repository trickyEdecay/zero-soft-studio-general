var searchBarEle = document.getElementById("search-bar");
var searchBtnEle = document.getElementById("search-button");

/*为搜索按钮监听事件*/
searchBtnEle.addEventListener("click",href);

/*实现跳转到百度的功能*/
function href(){
	var searchContent = searchBarEle.value;
	if(searchContent.trim() !== ""){
		location.href="https://www.baidu.com/s?wd="+searchContent;
	}
}

/*搜索框实现回车跳转功能*/
searchBarEle.onkeydown = function(){
	if (event.keyCode==13) {
		href();
	}
}

/*为+按钮添加监听事件，以实现显示 添加收藏界面 和 灰色背景 的功能*/
var addBtnEle = document.getElementsByClassName("add-button")[0];
addBtnEle.addEventListener("click",show);

/*获得需要显示和消失的两个对象*/
var allInterfaceEle = document.getElementsByClassName("all-interface")[0];
var addNavContainerEle = document.getElementsByClassName("add-nav-container")[0];

/*为 取消按钮和 添加收藏界面外部分 添加监听事件，以实现 添加收藏界面 和 灰色背景 消失的功能*/
var exitBtnEle = document.getElementsByClassName("exit-btn")[0];
exitBtnEle.addEventListener("click",disappear);
allInterfaceEle.addEventListener("click",disappear);


function show(){
	allInterfaceEle.classList.add("show");
	addNavContainerEle.classList.add("show");
}

function disappear(){
	allInterfaceEle.classList.remove("show");
	addNavContainerEle.classList.remove("show");
}

/*获得 添加收藏界面 的元素*/
var navContentEle = document.getElementsByClassName("nav-content");

/*为提交按钮添加功能*/
var submitBtnEle = document.getElementsByClassName("submit-btn")[0];
submitBtnEle.addEventListener("click",submit);

/*获得 收藏界面 的父元素*/
var navEle = document.getElementById("nav");

/*添加 收藏界面 的个数*/
var MAX_COUNT = 14;

/*localStorage键的下标*/
var count = 0;

for(var i = 0;i < MAX_COUNT;i++){
	if(localStorage.getItem("titleContent"+"["+i+"]")!=null && localStorage.getItem("pContent"+"["+i+"]")!=null 
		&& localStorage.getItem("address"+"["+i+"]")!=null){
		submit();
	}
}

function submit(){

	var title; 
	var description;
	var address;

	/*若用户有输入，则获取用户输入的标题，描述，网址，否则获取localStorage作为用户输入的标题，描述，网址*/
	(navContentEle[0].value === "") ? title = localStorage.getItem("titleContent"+"["+count+"]") : title = navContentEle[0].value;
	(navContentEle[1].value === "") ? description = localStorage.getItem("pContent"+"["+count+"]") : description = navContentEle[1].value;
	(navContentEle[2].value === "") ? address = localStorage.getItem("address"+"["+count+"]") : address = navContentEle[2].value;

	/*刚开始用户还没输入，会获取localStorage作为用户输入的标题，描述，网址*/
	/*而由于用户还没输入，故没有localStorage，所以标题，描述，网址为null*/
	if(title!=null && description!=null && address!=null){

		/*当标题，描述，网址存在时，生成界面*/
	    if(title.trim()!="" && description.trim()!="" && address.trim()!=""){
			var newAEle = document.createElement("a");
			var newDivEle1 = document.createElement("div");
			var newImgEle = document.createElement("img");
			var newDivEle2 = document.createElement("div");
			var newH2Ele = document.createElement("h2");
			var newPEle = document.createElement("p");

			newAEle.classList.add("nav-container");
			newAEle.href = address;
			navEle.appendChild(newAEle);

			newDivEle1.classList.add("img-container");
			newDivEle2.classList.add("info-container");
			newAEle.appendChild(newDivEle1);
			newAEle.appendChild(newDivEle2);

			newImgEle.src = "picture/new.png";
			newDivEle1.appendChild(newImgEle);

			var titleContent = document.createTextNode(title);
			newH2Ele.appendChild(titleContent);
			newDivEle2.appendChild(newH2Ele);

			var pContent = document.createTextNode(description);
			newPEle.appendChild(pContent);
			newDivEle2.appendChild(newPEle);

			localStorage.setItem("titleContent"+"["+count+"]",title);
			localStorage.setItem("pContent"+"["+count+"]",description);
			localStorage.setItem("address"+"["+count+"]",address);

			allInterfaceEle.classList.remove("show");
			addNavContainerEle.classList.remove("show");

			count++;
		}


	}
}
