var searchContentEle;
var searchBtnEle=document.getElementById("search-btn");
searchBtnEle.addEventListener("click",search);

function search(){
    searchContentEle=document.getElementById("search-content").value;
    if(searchContentEle){
        location.href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+searchContentEle+"&rsv_pq=93ca1cc50019cace&rsv_t=299ff6KbDcKTK64yfkkDY7VT5HF0MdL%2BhTEk6fM4HZJnFRK1m7awWyk4H5o&rqlang=cn&rsv_enter=0&rsv_sug3=7&rsv_sug1=4&rsv_sug7=100&inputT=1069&rsv_sug4=1069";
    }
    else{
        location.reload();
    }
}
