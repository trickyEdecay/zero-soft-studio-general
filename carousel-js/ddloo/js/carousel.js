function getClassName(name){
    return document.getElementsByClassName(name);
}
// function $getClassName(name){
//     return $(name);
// }
var cur = 0;                                        //当前图片位置
var next = 1;                                       //下一张图片位置
var wrap = getClassName("wrap")[0];                 
var wrapPicEle = getClassName("wrap-img")[0];
var wrapBtnEle = getClassName("wrap-btn")[0];
var nextBtnEle = getClassName("next-img")[0];
var backBtnEle = getClassName("back-img")[0];
var picList = wrapPicEle.children;

//根据图片数量创建按钮
for(var i = 0; i < picList.length; i++){
    var btn = document.createElement("button");
    btn.innerText = i + 1;
    wrapBtnEle.appendChild(btn);
}
var btnList = wrapBtnEle.children;
btnList[0].className = "actbtn";

//按钮变化
function btnAnimation(index){
    for(var i = 0; i < btnList.length; i++)
        btnList[i].className = "";
    btnList[index].className = "actbtn";
}

//图片滑动动画
function imgAnimation(){
    //下一张图片不能超出图片的总数
    if(next >= picList.length)
        next = 0;
    else if(next < 0)
        next = 3;
    // index = Number(index);
    //当前图片 - 下一张播放图片 的差 加上当前图片的位置
    var differ = cur - next;
    wrapPicEle.style.transform = "translateX("+((-cur+differ)*25)+"%)";
    cur = next;
    btnAnimation(cur);
    next++;
}
var go = setInterval("imgAnimation()", 2000);

//鼠标移入wrap时图片静止
wrap.onmouseover = function(){
    nextBtnEle.style.display = "block";
    backBtnEle.style.display = "block";
    clearInterval(go);
}

//鼠标移出wrap时图片滑动
wrap.onmouseout = function(){
    nextBtnEle.style.display = "none";
    backBtnEle.style.display = "none";
    go = setInterval("imgAnimation()", 2000);
}

//给按钮添加图片滑动
for(var i = 0; i < btnList.length; i++){
    btnList[i].onclick = function(){
        clearInterval(go);
        next = this.innerText - 1;
        go = setInterval(imgAnimation(), 2000);
    }
}

//下一张图片按钮
nextBtnEle.onclick = function(){
    clearInterval(go);
    go = setInterval(imgAnimation(), 2000);
}

//上一张图片按钮
backBtnEle.onclick = function(){
    next -= 2;
    clearInterval(go);
    go = setInterval(imgAnimation(), 2000);
}