var mask;
//添加收藏函数
function ShowAddPage(event) {
	//开启遮罩层
	mask = document.getElementById("mask");
	mask.style.display = "block";
	//阻止冒泡
	event = event || window.event;
	event.cancelBubble = false;
}

//确定提交函数
function sure(){
	//关闭遮罩层
	mask.style.display = "none";
}


//取消收藏函数
function nosure(){
	//关闭遮罩层
	mask.style.display = "none";
}

//实现点击搜索,跳转到百度相应的结果页面
function search(){
	//获得输入框文字
	var value=document.getElementById("search-text").value;
	//跳转到百度对应结果页面
	window.location="https://www.baidu.com/s?ie=UTF-8&wd="+value;
}