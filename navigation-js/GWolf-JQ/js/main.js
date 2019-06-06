//设置搜索按钮和enter键
$("#search-button").click(function(){
    location.href="https://www.baidu.com/s?wd="+$("#input-search-content").val();
});
$("#input-search-content").keydown(function(e){
    if(e.keyCode==13){
        location.href="https://www.baidu.com/s?wd="+$("#input-search-content").val();
    }
});


//设置点击+号显示添加窗口
$("#add-nav-btn").click(function(){
    $("#add-nav-dialog").addClass("show");
});


//设置点击取消按钮隐藏添加窗口
$("#cancel-btn").click(function(){
    $("#add-nav-dialog").removeClass("show");
});

function serialNum(){       //计算收藏的数量
	var i=0;
	while($(".nav-main-container")[i].nextElementSibling!=undefined){
		i++;
	}
	return i;
}
//设置点击确定按钮添加导航栏并隐藏窗口

$("#enter-btn").click(function(){
    var addNavTitle=$($(".add-navmsg")[0]).val();
    var addNavDescribe=$($(".add-navmsg")[1]).val();
    var addNavLink=$($(".add-navmsg")[2]).val();
    
   if(addNavTitle.trim()==""|| addNavDescribe.trim()=="" || addNavLink.trim()=="" )
    return;

    $("#nav-container").append('\
     <a class="nav-main-container" href="http://'+addNavLink+'" target="_blank">\
        <div class="nav-main-content-container">\
            <div class="nav-icon">\
                <img src="https://i.loli.net/2019/05/08/5cd29b7449dd5.png" >\
            </div>\
            <div class="nav-content">\
                <h2>'+addNavTitle+'</h2>\
                <p>'+addNavDescribe+'</p>\
            </div>\
        </div>\
     </a>');

   $("#add-nav-dialog").removeClass("show");
   var i= serialNum();
    localStorage.setItem("addNavTitle["+i+"]",addNavTitle);
    localStorage.setItem("addNavDescribe["+i+"]",addNavDescribe);
    localStorage.setItem("addNavLink["+i+"]",addNavLink);

    window.location.reload();
});

//获得本地存储内容
var i= serialNum()+1;
while(localStorage.getItem("addNavTitle["+i+"]")!=undefined){        
    var addNavTitle=localStorage.getItem("addNavTitle["+i+"]");
    var addNavDescribe=localStorage.getItem("addNavDescribe["+i+"]");
    var addNavLink=localStorage.getItem("addNavLink["+i+"]");
    $("#nav-container").append('\
    <a class="nav-main-container" href="http://'+addNavLink+'" target="_blank">\
       <div class="nav-main-content-container">\
           <div class="nav-icon">\
               <img src="https://i.loli.net/2019/05/08/5cd29b7449dd5.png" >\
           </div>\
           <div class="nav-content">\
               <h2>'+addNavTitle+'</h2>\
               <p>'+addNavDescribe+'</p>\
           </div>\
       </div>\
    </a>');
    i++;
      }
      














