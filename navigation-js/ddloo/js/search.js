var inputEle = document.getElementsByClassName("input")[0];
//按下"搜索"按钮发生事件(百度搜索)
function search(){
    var value = inputEle.value;
    
    if(value == "")
        alert("什么都没输入哦");
    else{
        inputEle.value = "";
        location.href = "https://www.baidu.com/s?wd="+value;
    }
}