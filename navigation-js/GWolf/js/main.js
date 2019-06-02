//设置搜索按钮和enter键
var inputSearchContentEle=document.getElementById("input-search-content");
var  searchButtonEle=document.getElementById("search-button");
function search(){
    var inputSearchContent=inputSearchContentEle.value;
    location.href="https://www.baidu.com/s?wd="+inputSearchContent;
}
searchButtonEle.addEventListener("click",search);

inputSearchContentEle.addEventListener("keydown",function(e){
    if(e.keyCode==13){
        search();
    }
});

//设置点击+号显示添加窗口
var addNavBtnEle=document.getElementById("add-nav-btn");
var addNavDialogEle=document.getElementById("add-nav-dialog");
addNavBtnEle.addEventListener("click",function (){
    addNavDialogEle.classList.add("show");
});

//设置点击取消按钮隐藏添加窗口
var cancelBtnEle=document.getElementById("cancel-btn");  
cancelBtnEle.addEventListener("click",function(){
    addNavDialogEle.classList.remove("show");
});

function serialNum(){       //计算收藏的数量
	var i=0;
	var navMainContainerEle=document.getElementsByClassName("nav-main-container");
	while(navMainContainerEle[i].nextElementSibling!=undefined){
		i++;
	}
	return i;
}
//实现添加新的导航栏
function addnavbar(addNavTitleEle,addNavDescribeEle,addNavLink)
{
//创建a标签并赋名
var aNodeEle=document.createElement("a");
aNodeEle.classList.add("nav-main-container");
//创建div标签并赋名
var contentDivEle=document.createElement("div");
contentDivEle.classList.add("nav-main-content-container");
//创建div标签并赋名
var iconDivEle=document.createElement("div");
iconDivEle.classList.add("nav-icon");
//创建div标签并赋名
var mainContentDivEle=document.createElement("div");
mainContentDivEle.classList.add("nav-content");
//创建img标签
var imgEle=document.createElement("img");
//创建h2标签
var h2NodeEle=document.createElement("h2");
//创建p标签
var  pNodeEle=document.createElement("p");
//得到外边大盒子
var navContainerEle=document.getElementById("nav-container");
//向外边大盒子添加a标签
navContainerEle.appendChild(aNodeEle);
//向a标签添加内容盒子
aNodeEle.appendChild(contentDivEle);
//向内容盒子中添加两个div，一个放图片，一个放内容
contentDivEle.appendChild(iconDivEle);
contentDivEle.appendChild(mainContentDivEle);
// 向放图片的盒子添加图片
imgEle.src="https://i.loli.net/2019/05/08/5cd29b7449dd5.png";
iconDivEle.appendChild(imgEle);
//向放内容的div添加h2和p标签
mainContentDivEle.appendChild(h2NodeEle);
mainContentDivEle.appendChild(pNodeEle);

//将获得的输入信息进行添加
h2NodeEle.appendChild(addNavTitleEle);
pNodeEle.appendChild( addNavDescribeEle);
aNodeEle.href=addNavLink;
  
}
//设置点击确定按钮添加导航栏并隐藏窗口
var enterBtnEle=document.getElementById("enter-btn"); 
enterBtnEle.addEventListener("click", function(){
    
    //获得输入的信息
var addNavTitle=document.getElementsByClassName("add-navmsg")[0].value.trim();
var addNavTitleEle=document.createTextNode(addNavTitle);
var addNavDescribe=document.getElementsByClassName("add-navmsg")[1].value.trim();
var addNavDescribeEle=document.createTextNode(addNavDescribe);
var addNavLink=document.getElementsByClassName("add-navmsg")[2].value.trim();

if(addNavTitle==""|| addNavDescribe=="" || addNavLink=="" )
     return;

addnavbar(addNavTitleEle,addNavDescribeEle,addNavLink);
var addNavDialogEle=document.getElementById("add-nav-dialog");
addNavDialogEle.classList.remove("show");
var i= serialNum();
localStorage.setItem("addNavTitle["+i+"]",addNavTitle);
localStorage.setItem("addNavDescribe["+i+"]",addNavDescribe);
localStorage.setItem("addNavLink["+i+"]",addNavLink);

window.location.reload();
});
//获得本地存储内容
var i= serialNum()+1;
while(localStorage.getItem("addNavTitle["+i+"]")!=undefined){        
    var addNavTitleEle=document.createTextNode(localStorage.getItem("addNavTitle["+i+"]")) ;
    var addNavDescribeEle=document.createTextNode(localStorage.getItem("addNavDescribe["+i+"]"));
    var addNavLink=localStorage.getItem("addNavLink["+i+"]");
    addnavbar(addNavTitleEle,addNavDescribeEle,addNavLink);
    i++;
      }
      














