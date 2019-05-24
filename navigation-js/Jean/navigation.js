var searchContentEle=document.getElementById("search-content");
var searchButtonEle=document.getElementById("search-button");
//搜索栏监听器
searchButtonEle.addEventListener("click",search);

function search(){
   var searchContent=searchContentEle.value;
    location.href="https://www.baidu.com/s?wd="+searchContent;
}
//原保留收藏夹跳转界面
function skip(){
     location.href="http://www.baidu.com/";
}
function weibo(){
    location.href="http://www.sina.com/";
}
function github(){
    location.href="http://www.github.com/";
}



//弹窗设置
var modalEle=document.getElementById("modal");
var addlEle=document.getElementById("add");
var closeEle=document.getElementById("button-close");
var sureEle=document.getElementById("button-sure");
//打开弹窗
addlEle.addEventListener("click",pop);
 function pop(){
     modalEle.style.display="block";
    
 }
 //关闭弹窗
 closeEle.addEventListener("click",close);
 function close(){
      modalEle.style.display="none";

 }
//添加收藏
var containEle=document.getElementById("contain");
var titleEle=document.getElementById("title");
var describleEle=document.getElementById("describle");
var linkEle=document.getElementById("link");

//确定按键进行监听
sureEle.addEventListener("click",sure);

//点击确定按键跳转功能
function sure(){
    //创建收藏的大盒子
      var newdivboxEle=document.createElement("div");
      newdivboxEle.classList.add("box");
      containEle.appendChild(newdivboxEle);
      //设置id
      newdivboxEle.setAttribute("id",GenNonDuplicateID(5))
      var a=newdivboxEle.getAttribute("id");
      //得到id，进行监听，使其实现导航链接跳转
      var boxEle=document.getElementById(a);
      boxEle.addEventListener("click",handle);
    //创建收藏的图标部分
      var diviconEle=document.createElement("div");
      diviconEle.classList.add("box-icon");
      newdivboxEle.appendChild(diviconEle);
      var icontuEle=document.createElement("div");
      icontuEle.classList.add("box-icon-a");
      diviconEle.appendChild(icontuEle);

    //插入照片
       var imgEle=document.createElement("img");
        icontuEle.appendChild(imgEle);
       imgEle.src="img/ge.png";

    //创建收藏的文字部分
    var divpartEle=document.createElement("div");
    divpartEle.classList.add("box-part2");
    newdivboxEle.appendChild(divpartEle);

   //创建文字部分的标题
   var boxfontEle=document.createElement("h3");
   boxfontEle.classList.add("box-font");
   boxfontEle.innerHTML=titleEle.value;
   divpartEle.appendChild(boxfontEle);

  //创建文字部分的简介
  var boxpEle=document.createElement("p");
  boxpEle.classList.add("box-p");
  boxpEle.innerHTML=describleEle.value;
  boxfontEle.appendChild(boxpEle);
//关闭窗口
 close();
}

// 创建的新的收藏夹自动生成一个不重复的ID
function GenNonDuplicateID(randomLength){
    return Number(Math.random().toString().substr(3,randomLength) + Date.now()).toString(36)
   }


//新创建的收藏夹的监听跳转事件
function handle(){
     location.href="http://"+linkEle.value;   
}

//localStorage缓存添加的网址
   var key = GenNonDuplicateID(5);
  localStorage.setItem(key,linkEle.value);
