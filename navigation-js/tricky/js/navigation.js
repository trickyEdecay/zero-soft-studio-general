// 从本地缓存中读取
var html = localStorage.getItem("myFavourite");
if(html!==null){
    $(".nav-list").html(html);
}

$(".add-btn").click(function(){
    $(".modal").addClass("show");
});

$("#add-favourite-cancel-btn").click(function(){
    $(".modal").removeClass("show");
});


$("#add-favourite-verify-btn").click(function(){

    var title = $("#add-favourite-title").val();
    var desc = $("#add-favourite-desc").val();
    var link = $("#add-favourite-link").val();

    if(title.trim()===""||desc.trim()===""||link.trim()===""){
        return;
    }

    $(".nav-list").append('\
        <a class="nav-item" href="http://'+link+'" target="_blank">\
            <div class="logo">\
                <img src="imgs/logo-favourite.png" alt="'+title+'logo">\
            </div>\
            <div class="info-container">\
                <h2>'+title+'</h2>\
                <p>'+desc+'</p>\
            </div>\
        </a>\
    ');
    
    $(".modal").removeClass("show");

    $("#add-favourite-title").val("");
    $("#add-favourite-desc").val("");
    $("#add-favourite-link").val("");

    // 存储的功能
    var html = $(".nav-list").html();
    localStorage.setItem("myFavourite",html);
    
});


$("#search-btn").click(function(){
    var searchContent = $("#search-input").val();
    if(searchContent.trim()===""){
        return;
    }
    location.href="https://www.baidu.com/s?wd="+searchContent;
});