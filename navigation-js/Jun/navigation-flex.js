var mask;
var text;
var title;
var con;
var url;
var number = 0;
var temp = 0;
var text_row;
var storage = window.localStorage;

//初始化工作，以及将缓存内容显示在页面上
window.onload = function() {

	if (temp == 0) {
		text = "<h3>我的收藏</h3>";
	}
	if (temp == 0) {
		text += "<div class='nav' id='nav" + number + "'></div>";
	}
	document.getElementById("content").innerHTML = text;

	showStorage();
}
//遍历本地缓存的数据
function showStorage() {

	for (var i = 0; i < storage.length / 3; i++) {
		var title_loca = storage.getItem('title' + i);
		var url_loca = storage.getItem('url' + i);
		var con_loca = storage.getItem('con' + i);
		text_row = "<div class='row'>" +
			" <a href='" + url_loca + "'>" +
			"<div class='inside'>" +
			"<!-- 图标 -->" +
			"<div class='icon'><img width='30px' height='30px' src='img/百度.png' /></div>" +
			"<!-- 简介 -->" +
			"<div class='test'>" +
			"<h5>" + title_loca + "</h5>" +
			"<p>" + con_loca + "</p>" +
			"</div>" +
			"</div>" +
			"</a>" +
			"</div>";
		document.getElementById("nav" + number).innerHTML += text_row;

		temp++;
		console.log(temp);
		if (temp % 4 == 0) {
			number++;
			console.log(number);
			text = document.getElementById("content").innerHTML;
			text += "<div class='nav' id='nav" + number + "'></div>";
			document.getElementById("content").innerHTML = text;
		}
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
	if (temp % 4 == 0 && temp != 0) {
		number++;
		text = document.getElementById("content").innerHTML;
		text += "<div class='nav' id='nav" + number + "'></div>";
		document.getElementById("content").innerHTML = text;
	}

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
	//关闭遮罩层
	mask.style.display = "none";
}




//取消收藏函数
function nosure() {
	//关闭遮罩层
	mask.style.display = "none";
}
