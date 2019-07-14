function getId(name){
    return document.getElementById(name);
}
function getClass(name){
    return document.getElementsByClassName(name);
}
var index = 0;
function onColor(){
    var digitalHeadEle = getClass("digital-head")[0];
    index = Number(index);
    switch (index){
        case(0):
            digitalHeadEle.classList.add("num-"+index);
            break;
        case(1):
            digitalHeadEle.classList.add("num-"+index);
            break;
        case(2):
            digitalHeadEle.classList.add("num-"+index);
            break;
        case(3):
            digitalHeadEle.classList.add("num-"+index);
            break;
        case(4):
            digitalHeadEle.classList.add("num-"+index);
            break;
        case(5):
            digitalHeadEle.classList.add("num-"+index);
            break;
        case(6):
            digitalHeadEle.classList.add("num-"+index);
            break;
        case(7):
            digitalHeadEle.classList.add("num-"+index);
            break;
        case(8):
            digitalHeadEle.classList.add("num-"+index);
            break;
        case(9):
            digitalHeadEle.classList.add("num-"+index);
            break;
    }
}
var key = getId("enter");
key.onkeydown = function(event){
    event = event || window.event;
    if(event.keyCode == 13){
        var digitalHeadEle = getClass("digital-head")[0];
        digitalHeadEle.classList.remove("num-"+index);
        index = key.value;
        key.value = "";
        onColor();
    }
}