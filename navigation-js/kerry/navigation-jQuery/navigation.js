// 实现点搜索后跳转
function jump(){
	location.href="http://www.baidu.com/s?wd="+$("#left").val();
}
$("#right").click(jump);
// 结束

//实现回车跳转
$("#left").keydown(function(e){               //有个疑问
	if(e.keyCode==13){
		jump();
	}
});
// 结束

// 实现点+后显示窗口
$quan=$(".quan");
$("#circular").click(function(){
	$quan.show();              //为什么$(".quan").addClass("show")不行
});
// 结束

// // 实现点取消后，窗口消失
$("#cancel").click(function(){
	$quan.hide();
})
// // 结束

// // 实现点黑屏后，窗口消失
$(".mask").click(function(){
	$quan.hide();
})
// // 结束

// // 开始实现本地储存功能
$("#determine").click(addCollection);

function num(){       //计算收藏的数量
	var i=0;
	$small=$(".small");
	while($small.eq(i).length>0){
		i++;
	}
	return i;
}

function collection(title,describe,link){            //建收藏盒子
	$("#bottom").append('\
		<a class="small" href="http://'+link+'">\
			<img src="https://i.loli.net/2019/05/07/5cd1467538e35.png" \
			class="small-image">\
			<div class="small-text">\
				<h2 class="small-text-h2">'+title+'</h2>\
				<p class="small-text-p">'+describe+'</p>\
			</div>\
		</a>\
	');	
}

function addCollection(){          //取到内容，建收藏并储存
	$frame=$(".frame")
	var title=$frame.first().val().trim();          //取出各值
	var describe=$frame.eq(1).val().trim();
	var link=$frame.last().val().trim();

	if(title==""||describe==""||link=="")      //判断空格
		return;

	collection(title,describe,link);
	
	var i=num();    //i代表的是收藏盒子的数量
	// 开始本地储存
	localStorage.setItem("title["+(i-1)+"]",title);
	localStorage.setItem("describe["+(i-1)+"]",describe);
	localStorage.setItem("link["+(i-1)+"]",link);

	$quan.hide();      //清楚黑屏和窗口
	window.location.reload();      //刷新网页，实现再次填写时，不会出现上次填写的东西
}

var i=num();     //这个i代表的是刚开始盒子的数量，其实就是8
while(localStorage.getItem("title["+i+"]")!=undefined){        //这里会实现本地储存的资料以收藏显现
	collection(localStorage.getItem("title["+i+"]"),localStorage.getItem("describe["+i+"]"),localStorage.getItem("link["+i+"]"));

	i++;
}
