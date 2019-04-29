/*获取按钮find元素*/
var findEle=document.getElementById("find");
/*获取输入框元素*/
var inputEle=document.getElementById("entry");

/*跳转到网页*/

function seek() {
    var a;
    a = inputEle.value;
    findEle=location.href="https://www.baidu.com/s?wd="+a;
}
/*给按钮添加事件监听器*/
findEle.addEventListener('click',seek);
/*给输入框添加一个回车键触发事件*/
inputEle.onkeydown = function(){
    if(event.keyCode == 13){
        seek();
    }
}


/*获取+号元素*/
var addEle=document.getElementById("add");

/*点击+号会产生遮罩层*/
function eject(){
    document.getElementById("shade").classList.add('appear')
    document.getElementById("collection").classList.add('appear')

}
/*给+号添加一个点击事件监听器*/
addEle.addEventListener('click',eject);




/*获得取消按钮元素*/
var disappearBtnEle=document.getElementById("false-btn");
/*点击按钮会移除遮罩层*/
function disappear(){
    document.getElementById("shade").classList.remove('appear')
    document.getElementById("collection").classList.remove('appear')
}
/*给取消按钮添加一个点击监听器*/
disappearBtnEle.addEventListener('click',disappear);

/*产生相应*/
function construct() {
    var layoutMainEle = document.getElementById("abc").parentElement;
    var newaEle = document.createElement("a");
    layoutMainEle.append(newaEle);


    var newContainerEle = document.createElement("div");
    newaEle.append(newContainerEle);
    newContainerEle.setAttribute("class", "container");

    var newContainerLeftEle = document.createElement("div")
    newContainerEle.append(newContainerLeftEle);
    newContainerLeftEle.setAttribute("class","container-left");

    var newContainerRightEle = document.createElement("div")
    newContainerEle.append(newContainerRightEle);
    newContainerRightEle.setAttribute("class","container-right");

    /*container-left*/
    var circularEle = document.createElement("div");
    newContainerLeftEle.append(circularEle);
    circularEle.setAttribute("class", "yuan");

    var pictureEle = document.createElement("div");
    circularEle.append(pictureEle);
    pictureEle.setAttribute("class", "picture");

    var imgEle = document.createElement("img");
    pictureEle.append(imgEle);
    imgEle.setAttribute("src", "aixin.png");

    /*container-right*/
    var titleEle = document.createElement("div");
    newContainerRightEle.append(titleEle);
    titleEle.setAttribute("class", "title")

    var describeEle = document.createElement("div");
    newContainerRightEle.append(describeEle);
    describeEle.setAttribute("class","describe");





    var inputTitleEle=document.getElementById("add-title");
    var inputDescribeEle=document.getElementById("add-describe");
    var inpuLinkEle=document.getElementById("add-link");
    var b,
        c,
        d;
    b=inputTitleEle.value;
    c=inputDescribeEle.value;
    d=inpuLinkEle.value;

    titleEle.innerHTML=b;
    describeEle.innerHTML=c
    newaEle.setAttribute("href","https://"+d);

    /*var addTitleEle=titleEle.document.createTextNode("b");
    var addescribeEle=describeEle.document.createTextNode("c");

    inputTitleEle.appendChild(addTitleEle);
    inputDescribeEle.appendChild(addescribeEle);*/



}

var trueBtnEle=document.getElementById("true-btn");




trueBtnEle.addEventListener('click',construct);
trueBtnEle.addEventListener('click',disappear);

