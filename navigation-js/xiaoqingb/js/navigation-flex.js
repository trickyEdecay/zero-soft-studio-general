// 获取搜索框内容
var searchContentEle;
// 获取容纳全部导航栏的大容器
var urlBoxELe=document.getElementById("url-box");

// -------------------------各按钮和监听器部分------------------------
// 获取搜索按钮
var searchBtnEle=document.getElementById("search-btn");
// 建立搜索按钮监听器
searchBtnEle.addEventListener("click",search);

// 获取添加按钮
var addBtnEle=document.getElementById("add-btn");
// 建立添加按钮监听器
addBtnEle.addEventListener("click",popup);

// 获取添加收藏中的取消按钮
var cancelBtnEle=document.getElementById("btn-cancel");
// 建立取消收藏监听器
cancelBtnEle.addEventListener("click",cancel);

// 获取添加收藏中的确认按钮
var confirmEle=document.getElementById("btn-confirm");
confirmEle.addEventListener("click",confirmGetIfoToAdd);
// -------------------------各按钮和监听器部分【完】------------------------

// 获取阴影
var grayBgEle=document.getElementById("gray-bg");

// -------------------------------添加窗口的内容--------------------------
// 获取添加窗口
var addCollectEle=document.getElementById("add-collect");
// 导航标题，描述，链接
var addUrlTitleEle=document.getElementById("add-url-title");
var addUrlDecEle=document.getElementById("add-url-dec");
var addUrlEle=document.getElementById("add-url");
// -------------------------------添加窗口的内容【完】--------------------------
var num=0,title,url;

// 搜索跳转函数
function search(){
    searchContentEle=document.getElementById("search-content").value;
    if(searchContentEle){
        location.href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+searchContentEle+"&rsv_pq=93ca1cc50019cace&rsv_t=299ff6KbDcKTK64yfkkDY7VT5HF0MdL%2BhTEk6fM4HZJnFRK1m7awWyk4H5o&rqlang=cn&rsv_enter=0&rsv_sug3=7&rsv_sug1=4&rsv_sug7=100&inputT=1069&rsv_sug4=1069";
    }
    else{
        location.reload();
    }
}

// 进入弹窗函数
function popup(){
    console.log("弹出窗口");
    addCollectEle.classList.add("appear");
    grayBgEle.classList.add("appear");
}

// 确认添加新链接
function confirmGetIfoToAdd(){
    var Url=document.getElementById("add-url").value;
    var Title=document.getElementById("add-url-title").value;
    var Dec=document.getElementById("add-url-dec").value;
    console.log("获取内容成功");
    confirmAdd(Url,Title,Dec);
    
}
function confirmAdd(Url,Title,Dec){
    // ---------------------------------单独的一个完整链接框框-----------------------
    // 添加白色框框
    var newUrlContainerEle=document.createElement("a");
    newUrlContainerEle.classList.add("url-container");
    newUrlContainerEle.href="https://"+Url;
    urlBoxELe.appendChild(newUrlContainerEle);
    // 添加图像蓝框
    var newUrlIconContainerEle=document.createElement("div");
    newUrlIconContainerEle.classList.add("url-icon");
    newUrlContainerEle.appendChild(newUrlIconContainerEle);
    // 添加图像，链接名,和注释
    var newUrlIconEle=document.createElement("img");
    newUrlIconEle.src="img/BAT.png";
    newUrlIconEle.classList.add("url-img");
    newUrlIconContainerEle.appendChild(newUrlIconEle);
    // 添加链接右部分框框
    var newUrlRightContainerEle=document.createElement("div");
    newUrlRightContainerEle.classList.add("container-right");
    newUrlContainerEle.appendChild(newUrlRightContainerEle);
    // 添加链接名
    var newUrlName=document.createElement("h2");
    newUrlName.classList.add("url-name");
    newUrlName.innerHTML=Title;
    newUrlRightContainerEle.appendChild(newUrlName);
    // 添加注释
    var newUrldec=document.createElement("span");
    newUrldec.classList.add("url-dec");
    newUrldec.innerHTML=Dec;
    newUrlRightContainerEle.appendChild(newUrldec);
    // ---------------------------------单独的一个完整链接框框【完】-----------------------

    // 存入本地仓库
    if(num==0&&localStorage.getItem("Num")) {
        num= parseInt(localStorage.getItem("Num"));
        console.log("重新赋值成功")
    }
    localStorage.setItem("title"+num,newUrlName.innerHTML);
    localStorage.setItem("dec"+num,newUrldec.innerHTML);
    localStorage.setItem("url"+num,"https://"+Url);
    // 重置添加的个数
    console.log("输出内容成功");
    localStorage.setItem("Num",num+=1);
    //console.log(localStorage.getItem("title1"));//输出
    // 添加完成自动退出窗口，并初始化
    cancel();
}

// 退出弹窗
function cancel(){
    addCollectEle.classList.remove("appear");
    grayBgEle.classList.remove("appear");
    // 取消后自动还原默认内容！！
    addUrlTitleEle.value="百度";
    addUrlDecEle.value="百度，全球最大的中文搜索引擎、最大的中文网站";
    addUrlEle.value="www.baidu.com";
}

setTimeout(initedSetUrl,10);

function initedSetUrl(){
    // 先判断是否已经储存了键值对
    if(localStorage.getItem("Num")){
        console.log(typeof(localStorage.getItem('Num')));
        console.log("存在键值对"+localStorage.getItem('Num'));
        i=0;
        while(i!=localStorage.getItem("Num"))
        {
            i=i.toString();
            console.log(localStorage.getItem("title"+i));
            putUrl(i);
            Number(i);
            i++;
        }
    console.log("调用成功");
    }
}


function putUrl(i){
      // ---------------------------------单独的一个完整链接框框-----------------------
    // 添加白色框框
    var newUrlContainerEle=document.createElement("a");
    newUrlContainerEle.classList.add("url-container");
    newUrlContainerEle.href=localStorage.getItem("url"+i);
    urlBoxELe.appendChild(newUrlContainerEle);
    // 添加图像蓝框
    var newUrlIconContainerEle=document.createElement("div");
    newUrlIconContainerEle.classList.add("url-icon");
    newUrlContainerEle.appendChild(newUrlIconContainerEle);
    // 添加图像，链接名,和注释
    var newUrlIconEle=document.createElement("img");
    newUrlIconEle.src="img/BAT.png";
    newUrlIconEle.classList.add("url-img");
    newUrlIconContainerEle.appendChild(newUrlIconEle);
    // 添加链接右部分框框
    var newUrlRightContainerEle=document.createElement("div");
    newUrlRightContainerEle.classList.add("container-right");
    newUrlContainerEle.appendChild(newUrlRightContainerEle);
    // 添加链接名
    var newUrlName=document.createElement("h2");
    newUrlName.classList.add("url-name");
    newUrlName.innerHTML=localStorage.getItem("title"+i);
    newUrlRightContainerEle.appendChild(newUrlName);
    // 添加注释
    var newUrldec=document.createElement("span");
    newUrldec.classList.add("url-dec");
    newUrldec.innerHTML=localStorage.getItem("dec"+i);
    newUrlRightContainerEle.appendChild(newUrldec);
    // ---------------------------------单独的一个完整链接框框【完】-----------------------

}
