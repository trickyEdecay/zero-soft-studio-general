var searchContentEle=document.getElementById("search-content");
var searchButtonEle=document.getElementById("search-button");
searchButtonEle.addEventListener("click",search);

function search(){
    var searchContent=searchContentEle.value;
    location.href="https://www.baidu.com/s?wd="+searchContent;
}

var moreELe=document.getElementById("more");
var onOffEle=document.getElementById("back-more")
moreELe.addEventListener("click",open);
function open(){
    onOffEle.style.display="block";
}

var closeEle=document.getElementById("cancel");
closeEle.addEventListener("click",close);
function close(){
    onOffEle.style.display="none";
}

var oadd3=document.getElementById("add3");
var sureEle=document.getElementById("sure");
var close1Ele=document.getElementById("close1");
sureEle.addEventListener("click",close);
close1Ele.addEventListener("click",close);
sureEle.addEventListener("click",add);    
function add(){
    var titleval=document.getElementsByClassName("more-content-input")[0].value;   
    document.getElementsByClassName("more-content-input")[0].value="";
    var descriptionval=document.getElementsByClassName("more-content-input2")[0].value;  
    document.getElementsByClassName("more-content-input2")[0].value="";
    var linkval=document.getElementsByClassName("more-content-input3")[0].value;
    document.getElementsByClassName("more-content-input3")[0].value="";
    var objectdiv='<a href='+linkval+' target="_blanck"><div class="content"><div class="logo"><img src="https://i.loli.net/2019/04/17/5cb6787f76ad0.png"></div> <div class="words"><p>'+titleval+'</p><p>'+descriptionval+'</p></div></div></a>'
    oadd3.innerHTML+=objectdiv;                                   
}             
