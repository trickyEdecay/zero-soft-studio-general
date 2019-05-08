var mask;
var con;
var text;
var title;
var con;
var url;
var number = 0;
var temp = 0;
var text_row;
window.onload = function() {
	con = document.getElementById("content");
	if (temp == 0) {
		text = "<h3>我的收藏</h3>";
	}
	con.innerHTML = text;
}
//添加收藏函数
function ShowAddPage(event) {

	//开启遮罩层
	mask = document.getElementById("mask");
	mask.style.display = "block";
	//阻止冒泡
	event = event || window.event;
	event.cancelBubble = false;


	if (temp % 4 == 0) {
		text += "<div class='nav' id='nav" + number + "'></div>";
		con.innerHTML = text;
	}
}

//确定提交函数
function sure() {
	title = document.getElementById("title").value;
	url = document.getElementById("url").value;
	con = document.getElementById("con").value;
	text_row = "<div class='row'>" +
		" <a href='" + url + "'>" +
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
	if (temp % 4 == 0) {
		number++;
		text = document.getElementById("content").innerHTML;
	}
	//关闭遮罩层
	mask.style.display = "none";
}




//取消收藏函数
function nosure() {
	//关闭遮罩层
	mask.style.display = "none";
}

//实现点击搜索,跳转到百度相应的结果页面
function search() {
	//获得输入框文字
	var value = document.getElementById("search-text").value;
	//跳转到百度对应结果页面
	window.location = "https://www.baidu.com/s?ie=UTF-8&wd=" + value;
}
