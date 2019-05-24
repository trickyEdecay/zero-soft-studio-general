/*给搜索按钮添加页面跳转*/
var $entry=$("#entry");
$("#find").click(function () {
    location.href="https://www.baidu.com/s?wd="+$($entry).val();
});
/*给输入内容添加跳转到百度相应关键词*/
$entry.keydown(function () {
    location.href="https://www.baidu.com/s?wd="+$($entry).val();
});

/*点击+号弹出遮罩层*/
var $shade=$("#shade");
var $collection=$("#collection");
var $trueBtn=$("#true-btn");
$("#add").click(function () {
    $($shade).show();
    $($collection).show();
});
/*点击确定遮罩层消失*/
$($trueBtn).click(function () {
    $($shade).hide();
    $($collection).hide();
});

/*点击取消遮罩层消失*/
$("#false-btn").click(function () {
    $($shade).hide();
    $($collection).hide();
});

/*给确定添加一个点击事件：可以产生一个样式*/
$($trueBtn).click(function () {
    $(".layout-main").append('<a href="https://'+$("#add-link").val()+'/">\n' +
        '                    <div class="container">\n' +
        '                        <div class="container-left">\n' +
        '                            <div class="yuan">\n' +
        '                                <div class="picture">\n' +
        '                                    <img src="aixin.png">\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="container-right">\n' +
        '                            <div class="title">\n' +
        '                                '+$("#add-title").val()+'\n' +
        '                            </div>\n' +
        '                            <div class="describe">\n' +
        '                                '+$("#add-describe").val()+'\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </a>')
});


