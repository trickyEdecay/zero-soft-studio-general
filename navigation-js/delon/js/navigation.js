
//搜索输入内容
var searchBtEle = document.getElementById('search-bt');
var searchNvEle = document.getElementById('search-nav');

searchBtEle.onclick = function(){
    searchBtEle.href='http://www.baidu.com/s?wd=' + "我为何如此沙雕";
}
//搜索输入内容 END

//弹窗开关
var addBtEle = document.getElementById('add-bt');
var popupWrapEle = document.getElementById('popup-wrap');
var confirmBtEles = document.getElementsByClassName('confirm-bt');
var cancelBtEles = document.getElementsByClassName('cancel-bt');
var popupEle = document.getElementById('popup');

addBtEle.onclick = function (){
    // popupWrapEle.classList.remove('invisible');   不知道那个方法好！！？？
    // popupWrapEle.classList.add('show');
    popupWrapEle.className = 'show-wrap';
    popupEle.className = 'showpopup';
}

cancelBtEles[0].onclick = function (){
    // popupWrapEle.classList.remove('show');
    // popupWrapEle.classList.add('invisible');
    popupWrapEle.className = 'invisible';
    popupEle.className = '';
}
//弹窗快关 END

// 添加收藏
var mainContentELe = document.getElementsByClassName('main-content');
var labelVal =document.getElementsByClassName('label-intp'),
linkVal = document.getElementsByClassName('link-intp'),
descriptionVal = document.getElementsByClassName('description-intp');

confirmBtEles[0].onclick = function (){
    var colletionNode = document.createElement("a");
    colletionNode.innerHTML = '<p class\=\"head-img\"><img src\=\"icons/wangyi.png\" alt\=\"head\">\
    </p><div class\=\"innercontainer\"><h2 class\=\"nav-block-title\">' + labelVal[0].value + '</h2>\
    <p class\=\"nav-block-description\">' + descriptionVal[0].value + '</p></div>';
    mainContentELe[0].appendChild(colletionNode);
    colletionNode.href = 'http://'+linkVal[0].value;
    colletionNode.className = 'container';
    popupWrapEle.className = 'invisible';
    popupEle.className = '';
    labelVal[0].value = '';
    linkVal[0].value = '';
    descriptionVal[0].value = '';
}
//添加收藏 END