var mask; //遮罩层
var text; //插入的内容
var title; //收藏的标题
var con; //收藏描述内容
var url; //收藏的网址
var number = 0; //内容的行数
var temp = 0; //收藏的个数
var text_row; //插入的收藏内容
var storage = window.localStorage; //本地缓存

//初始化工作，以及将缓存内容显示在页面上
window.onload = function() {
	if (temp == 0)
		text = "<h3>我的收藏</h3>" + "<div class='nav' id='nav" + number + "'></div>";
	document.getElementById("content").innerHTML = text;
	showStorage();
}

//遍历本地缓存的数据
function showStorage() {
	for (var i = 0; i < storage.length / 3; i++) {
		title = storage.getItem('title' + i);
		url = storage.getItem('url' + i);
		con = storage.getItem('con' + i);
		showRow();
		if (temp % 4 == 0)
			logicalOperation();
	}
}

//添加收藏函数
function ShowAddPage(event) {
	//开启遮罩层
	mask = document.getElementById("mask");
	mask.style.display = "block";
	//阻止冒泡
	event = event || window.event;
	event.cancelBubble = false;
	if (temp % 4 == 0 && temp != 0)
		logicalOperation();
}

//确定提交函数
function sure() {
	title = document.getElementById("title").value;
	url = document.getElementById("url").value;
	con = document.getElementById("con").value;
	//使用localStorage将收藏内容缓存到本地
	storage.setItem("title" + temp, title);
	storage.setItem("url" + temp, url);
	storage.setItem("con" + temp, con);
	showRow();
	//关闭遮罩层
	mask.style.display = "none";
}

//取消收藏函数
function nosure() {
	//关闭遮罩层
	mask.style.display = "none";
}

//将每一个收藏内容的表示抽取成方法
function showRow() {
	text_row = "<div class='row'>" +
		" <a href='https://" + url + "'>" +
		"<div class='inside'>" +
		"<!-- 图标 -->" +
		"<div class='icon'><img width='30px' height='30px' src='img/百度.png' /></div>" +
		"<!-- 简介 -->" +
		"<div class='test'>" +
		"<h5>" + title + "</h5>" +
		"<p>" + con + "</p>" +
		"</div>" +
		"</div>" +
		"</a>" +
		"</div>";
	document.getElementById("nav" + number).innerHTML += text_row;
	temp++;
}

//将重复逻辑操作抽取成方法
function logicalOperation() {
	number++;
	text = document.getElementById("content").innerHTML;
	text += "<div class='nav' id='nav" + number + "'></div>";
	document.getElementById("content").innerHTML = text;
}

//实现点击搜索,跳转到百度相应的结果页面
function search(){
	//获得输入框文字
	var value=document.getElementById("search-text").value;
	//跳转到百度对应结果页面
	window.location="https://www.baidu.com/s?ie=UTF-8&wd="+value;
} 
