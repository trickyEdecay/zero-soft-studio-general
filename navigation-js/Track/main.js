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



var shadeEle=document.getElementById("shade");

/*点击遮罩层会取消该窗口*/
function Return() {
    document.getElementById("shade").classList.remove('appear');
    document.getElementById("collection").classList.remove('appear');

}
/*给遮罩层添加一个点击事件*/
shadeEle.addEventListener('click',Return);
/*给第三个输入框 输入完后按回车就会直接产生一个导航栏*/
document.getElementById("add-link").onkeydown = function(){
    if(event.keyCode == 13){
        construct();
        Return();
    }
}



/*产生相应导航栏*/
function construct() {
    var layoutMainEle = document.getElementById("first").parentElement;
    var newaEle = document.createElement("a");
    layoutMainEle.append(newaEle);


    var newContainerEle = document.createElement("div");
    newaEle.append(newContainerEle);
    newContainerEle.classList.add('container');

    var newContainerLeftEle = document.createElement("div");
    newContainerEle.append(newContainerLeftEle);
    newContainerLeftEle.classList.add('container-left');

    var newContainerRightEle = document.createElement("div");
    newContainerEle.append(newContainerRightEle);
    newContainerRightEle.classList.add('container-right');

    /*container-left*/
    var circularEle = document.createElement("div");
    newContainerLeftEle.append(circularEle);
    circularEle.classList.add('yuan');

    var pictureEle = document.createElement("div");
    circularEle.append(pictureEle);
    pictureEle.classList.add('picture');

    var imgEle = document.createElement("img");
    pictureEle.append(imgEle);
    imgEle.setAttribute("src","aixin.png");

    var titleEle = document.createElement("div");
    newContainerRightEle.append(titleEle);
    titleEle.classList.add('title');

    var describeEle = document.createElement("div");
    newContainerRightEle.append(describeEle);
    describeEle.classList.add('describe');



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
    describeEle.innerHTML=c;
    newaEle.setAttribute("href","https://"+d);



    var number;
    number=i+1;

    localStorage.setItem("number",number);
    localStorage.setItem("title"+i,b);
    localStorage.setItem("describe"+i,c);
    localStorage.setItem("link"+i,d);
    i++;
}

var i=0;




var trueBtnEle=document.getElementById("true-btn");
/*给添加按钮添加一个事件监听器 按下时候遮罩层会取消*/
trueBtnEle.addEventListener('click',construct);
trueBtnEle.addEventListener('click',disappear);


/*本地存储
* 如果没有设置就不会出来
* 设置后F5将会存储中取出构成样式*/
function read(){
    if(localStorage.getItem("title"+i)!=null){
        for (var t=0;t<localStorage.getItem("number");t++){
            var layoutMainEle = document.getElementById("first").parentElement;
            var newaEle = document.createElement("a");
            layoutMainEle.append(newaEle);


            var newContainerEle = document.createElement("div");
            newaEle.append(newContainerEle);
            newContainerEle.classList.add('container');

            var newContainerLeftEle = document.createElement("div");
            newContainerEle.append(newContainerLeftEle);
            newContainerLeftEle.classList.add('container-left');

            var newContainerRightEle = document.createElement("div");
            newContainerEle.append(newContainerRightEle);
            newContainerRightEle.classList.add('container-right');

            /*container-left*/
            var circularEle = document.createElement("div");
            newContainerLeftEle.append(circularEle);
            circularEle.classList.add('yuan');

            var pictureEle = document.createElement("div");
            circularEle.append(pictureEle);
            pictureEle.classList.add('picture');

            var imgEle = document.createElement("img");
            pictureEle.append(imgEle);
            imgEle.setAttribute("src","aixin.png");

            var titleEle = document.createElement("div");
            newContainerRightEle.append(titleEle);
            titleEle.classList.add('title');
            titleEle.innerHTML=localStorage.getItem('title'+t);

            var describeEle = document.createElement("div");
            newContainerRightEle.append(describeEle);
            describeEle.classList.add('describe');
            describeEle.innerHTML=localStorage.getItem('describe'+t);



            newaEle.setAttribute("href","https://"+localStorage.getItem('link'+t));
        }

    }
}
read();






