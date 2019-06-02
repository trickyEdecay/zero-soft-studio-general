$searchBar=$("#search-bar")
$("#search-button").click(href);

function href(){
    if($searchBar.val().trim() !== ""){
		location.href="https://www.baidu.com/s?wd="+$searchBar.val();
	}
}

/*搜索框实现回车跳转功能*/
$searchBar[0].onkeydown = function(){
	if (event.keyCode==13) {
		href();
	}
}

$(".add-button").click(show);

function show(){
    $(".all-interface").show();
    $(".add-nav-container").show();
}

$(".exit-btn").click(disappear);
$(".all-interface").click(disappear);

function disappear(){
    $(".all-interface").hide();
    $(".add-nav-container").hide();
}

$addNavContainer = $(".add-nav-container");
$(".submit-btn").click(submit);

/*添加 收藏界面 的个数*/
var MAX_COUNT = 14;

/*localStorage键的下标*/
var count = 0;

for(var i = 0;i < MAX_COUNT;i++){
	if(localStorage.getItem("titleContent["+i+"]")!=null && localStorage.getItem("pContent["+i+"]")!=null 
		&& localStorage.getItem("address["+i+"]")!=null){
		submit();
    }
    else break;
}

function submit(){
    var title , description , address;
    var userTitle = $addNavContainer.children(".nav-content").first().val();
    var userDescription = $addNavContainer.children(".nav-content").eq(1).val();
    var userAddress = $addNavContainer.children(".nav-content").eq(2).val();

	/*若用户有输入，则获取用户输入的标题，描述，网址，否则获取localStorage作为用户输入的标题，描述，网址*/
	(userTitle === "") ? title = localStorage.getItem("titleContent["+count+"]") : title = userTitle;
	(userDescription === "") ? description = localStorage.getItem("pContent["+count+"]") : description = userDescription;
	(userAddress === "") ? address = localStorage.getItem("address["+count+"]") : address = userAddress;

	/*刚开始用户还没输入，会获取localStorage作为用户输入的标题，描述，网址*/
	/*而由于用户还没输入，故没有localStorage，所以标题，描述，网址为null*/
	if(title!=null && description!=null && address!=null){

		/*当标题，描述，网址存在时，生成界面*/
	    if(title.trim()!="" && description.trim()!="" && address.trim()!=""){
            
            $("#nav").append('\
            <a class="nav-container" href="'+address.trim()+'">\
			<div class="img-container"><img src="picture/new.png"></div>\
			<div class="info-container">\
				<h2>'+title+'</h2>\
				<p class="content">'+description+'</p>\
			</div>\
            </a>\
            ')

            localStorage.setItem("titleContent["+count+"]",title);
			localStorage.setItem("pContent["+count+"]",description);
			localStorage.setItem("address["+count+"]",address);

            $(".all-interface").hide();
            $(".add-nav-container").hide();

            count++;

        } 
    }       
}

