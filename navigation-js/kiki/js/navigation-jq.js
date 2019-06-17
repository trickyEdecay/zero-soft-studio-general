// 读取本地缓存
var html = localStorage.getItem("myFavourite");
if(html!==null){
    $(".nav-list").html(html);
}

$(".add-btn").click(function(){
    $(".modal").addClass("show");
});

$("#add-fav-cancel-btn").click(function(){
    $(".modal").removeClass("show");
});

$("#add-fav-verify-btn").click(function(){
    var title = $("#add-fav-title").val();
    var desc = $("#add-fav-desc").val();
    var link = $("#add-fav-link").val();

    if(title.trim()===""||desc.trim()===""||link.trim()===""){
        return;
    }

    $(".nav-list").append('\
    <a class="nav-item" href="http://'+link+'" target="_blank">\
        <div class="logo">\
            <img src="img/favorite.png" alt="'+title+'logo">\
        </div>\
        <div class="info-container">\
            <h2>'+title+'</h2>\
            <p>'+desc+'</p>\
        </div>\
    </a>\
    ');

    $(".modal").removeClass("show");

    $("#add-fav-title").val("");
    $("#add-fav-desc").val("");
    $("#add-fav-link").val("");

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