//获取元素
var searchBtnEle = document.getElementById("search-btn");
var searchEle = document.getElementById("search");
var jumpEle = document.getElementById("jump");
//var turnIntoEle = document.getElementById("turninto");

//搜索键跳转
searchBtnEle.onclick = function () {
    jumpEle.href = "https://www.baidu.com/s?wd=" + searchEle.value.trim();
    //清空value值
    searchEle.value = "";
};


//回车键跳转
searchEle.onkeydown = function (e) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e.keyCode == 13) {
        window.location.href = "https://www.baidu.com/s?wd=" + searchEle.value.trim();
        //清空value值
        searchEle.value = "";    
    } 
};
//当前页面跳转正常



//定制个性化收藏，获取元素
var allEle = document.getElementById("all");
var coverEle = document.getElementById("cover");
var addNavEle = document.getElementById("add-nav");
var addPageEle = document.getElementById("add-page");
var sureBtnEle = document.getElementById("sure-btn");
var quitBtnEle = document.getElementById("quit-btn");
var linkEle = document.getElementById("link");
var titleEle = document.getElementById("title");
var desEle = document.getElementById("des");


//点击加号的函数
addNavEle.onclick = function (){
    //设置覆盖层 
    coverEle.style.display="block";
    addPageEle.style.display="block";


    //确认键跳转函数
    sureBtnEle.onclick = function (){
        //添加超链接
        var aEle = document.createElement("a");
        allEle.appendChild(aEle);
        aEle.href = "https://" + linkEle.value;
        aEle.target = "_blank";
        
        
        //添加nav div
        var navEle = document.createElement("div");
        aEle.appendChild(navEle);
        navEle.setAttribute("class","nav");

        //添加icon div
        var iconEle = document.createElement("div");
        navEle.appendChild(iconEle);
        iconEle.setAttribute("class","icon");

        //添加name div
        var nameEle = document.createElement("div");
        navEle.appendChild(nameEle);
        nameEle.setAttribute("class","name");
        nameEle.innerHTML = titleEle.value;
        

        //添加infor div
        var inforEle = document.createElement("div");
        navEle.appendChild(inforEle);
        inforEle.setAttribute("class","infor");
        inforEle.innerHTML = desEle.value;
        

        //添加png div
        var pngEle = document.createElement("div");
        iconEle.appendChild(pngEle);
        pngEle.setAttribute("class","png");

        //添加img 
        var imgEle = document.createElement("img");
        pngEle.appendChild(imgEle);
        imgEle.src="https://i.loli.net/2019/05/07/5cd0cbdebdc07.png";

        addPageEle.style.display = "none";
        coverEle.style.display="none";

        //清空值
        linkEle.value = "";
        desEle.value = "";
        titleEle.value = "";
    };

    //取消键返回
    quitBtnEle.onclick =function (){
        console.log("quit");
        addPageEle.style.display = "none";
        coverEle.style.display="none";
    };
    
};

//清除空白文本节点，排版美观，网上复制
function removeWhiteSpace(elem){
    let el = elem || document,
        cur = el.firstChild,
        temp,
        reg = /\S/;
    while(null != cur){
      temp = cur.nextSibling;
      if( 3 === cur.nodeType && !reg.test(cur.nodeValue) ){
        el.removeChild(cur);
      }else if( 1 === cur.nodeType ){
        removeWhiteSpace(cur);
      }
      cur = temp;
    }
  }

  removeWhiteSpace();






 



