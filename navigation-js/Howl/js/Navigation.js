// 监听事件
document.getElementById("search-btn").addEventListener("click",search);
document.getElementById("add-nav").addEventListener("click",pop);
document.getElementById("cancel").addEventListener("click",disappear);
document.getElementById("confirm").addEventListener("click",createnav);

// 弹出函数
function pop() {
	document.getElementById('pop-dark').style.display="block";
	document.getElementById('pop-windows').style.display="block";
}
// 消失函数
function disappear() {
	document.getElementById('pop-dark').style.display="none";
	document.getElementById('pop-windows').style.display="none";
	document.getElementById('pop-head').value="百度";
	document.getElementById('pop-desc').value="百度，全球最大的中文搜索引擎、最大的中文网站";
	document.getElementById('pop-link').value="http://www.baidu.com";
}

// 回车/按键 搜索函数
document.getElementById("search-text").setAttribute("onkeypress","if (event.keyCode == 13) search()");
function search() {
	var search = document.getElementById("search-text").value;
	// location.href= "https://www.baidu.com/s?wd="+search;
	window.open("https://www.baidu.com/s?wd="+search,"_blank");  
}

// 创建单个导航
function createnav() {
	// 创建元素节点
	var aEle   = document.createElement("a");
	var imgEle = document.createElement("img");
	var divEle = document.createElement("div");
	var h1Ele  = document.createElement("h1");
	var pEle  = document.createElement("p");
	
	// 创建文本节点
	var h1textEle = document.createTextNode(document.getElementById("pop-head").value);
	var ptextEle  = document.createTextNode(document.getElementById("pop-desc").value);
	var atextEle  = document.getElementById("pop-link").value;
	h1Ele.appendChild(h1textEle);
	pEle.appendChild(ptextEle);
	
	// 添加属性
	aEle.setAttribute("class", "block");
	aEle.setAttribute("target", "_blank");
	aEle.setAttribute("href", atextEle);
	imgEle.setAttribute("class","logo-img");
	imgEle.setAttribute("src","img/default.png");
	divEle.setAttribute("class","title");
	h1Ele.setAttribute("class","t1");
	pEle.setAttribute("class","t2");
	
	// 追加节点 
	document.getElementById("nav").appendChild(aEle);
	aEle.appendChild(imgEle);
	aEle.appendChild(divEle);
	divEle.appendChild(h1Ele);
	divEle.appendChild(pEle);
	
	// 窗口隐藏
	disappear();
}