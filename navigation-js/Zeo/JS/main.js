var btn=document.getElementById("btn");
var back=document.getElementById("back");
var login=document.getElementById("login");
var close_all=document.getElementById("close_all");
function add() {
  back.style.display="block";
  login.style.display="block";
}
function cancle() {
  back.style.display="none";
  login.style.display="none";
}

// function add_link(title,content,link) {

//     storage.setItem("title",title);   //标题---内容---链接
//     storage.setItem("content",content);
//     storage.setItem("link",link);
// }

  function add_link(title,content,link) {
    $content_line = $(".content-line");
    $content_line.append('\
    <a class="link-target"  href="'+'http://'+link+'"><!--采用Flex布局-->\
        <img src="ico/baidu.png">\
      <div class="Flex-col">\
        <h2>'+title+'</h2><br>\
        <p>'+content+'</p>\
      </div>\
    </a>\
    ');
  }

  $("#sure_button").click(function(){
    $titleInput = $('.add-link-title-input');
    $contentInput = $('.add-link-content-input');
    $hrefInput = $('.add-link-href-input');
    add_link($titleInput.val(),$contentInput.val(),$hrefInput.val());
    emptyContent($titleInput);   //内容置空
    emptyContent($contentInput);
    emptyContent($hrefInput);
    back.style.display="none";
    login.style.display="none";
  });

  function emptyContent(selector){
    selector.val("");
  }