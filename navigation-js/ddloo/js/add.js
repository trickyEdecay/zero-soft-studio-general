//显示“添加收藏”
function add(){
    var opacity = 0;
    var add = document.getElementById("add");
    add.style.display = "block";
    //add.style.opacity = "1";              //直接设opacity没有动画效果
    var ok = setInterval(function(){
        opacity += 0.3;
        add.style.opacity = "" + opacity;
        if(opacity >= 1)
            clearInterval(ok);
    }, 20);
    //add.style.height = "100%";
}
//隐藏“添加收藏”
function hide(){
    var add = document.getElementById("add");
    add.style.display = "none";
    add.style.opacity = "0";
    //add.style.height = "0";
    //初始化
    refresh();
    errorHide();
}
//按下“确定”键发生添加事件
function add2(){
    var titleEle = document.getElementById("nav-title").value;
    var describeEle = document.getElementById("nav-describe").value;
    var linkEle = document.getElementById("nav-link").value;
    if(titleEle == ""){
        var errorEle = document.getElementById("errorInformation");
        errorEle.innerText = "导航标题没写哟~";
        errorEle.style.opacity = "1";
    }
    else if(linkEle == ""){
        var errorEle = document.getElementById("errorInformation");
        errorEle.innerText = "导航链接没写哟~";
        errorEle.style.opacity = "1";
    }
    else{
        //创建样式
        var creDivlist = document.getElementsByClassName("link");
        var creDiv = creDivlist[0];
        var creAList = document.getElementsByClassName("link-a");
        var creA = creAList[0].cloneNode(true);
        creDiv.appendChild(creA);
        //插入文本
        var creLink = document.getElementsByClassName("link-a");
        creLink[creLink.length-1].href = linkEle;
        var creTitle = document.getElementsByClassName("content-title");
        creTitle[creTitle.length-1].innerHTML = titleEle;
        var creDescribe = document.getElementsByClassName("content-text");
        creDescribe[creDescribe.length-1].innerHTML = describeEle;
        //创建后刷新输入框
        refresh();
    }
}
// window.onscroll = function(){

// }
//刷新输入框
function refresh(){
    var reTitle = document.getElementById("nav-title");
    var reDescribe = document.getElementById("nav-describe");
    var reLink = document.getElementById("nav-link");
    reTitle.value = "";
    reDescribe.value = "";
    reLink.value = "";
    // var addTextEle = document.getElementsByClassName("add-input");
    // for(var i = 0; i < 3; i++)
    //     addTextEle[i].value = "";
}
//add光标事件,将error隐藏起来
function errorHide(){
    var errorEle = document.getElementById("errorInformation");
    errorEle.style.opacity = "0";
}