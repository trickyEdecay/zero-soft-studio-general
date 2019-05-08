
window.onload = function () {
    var searchEle = document.getElementById("search");
    var searchButtonEle = document.getElementById("search-button");
    var addButtonEle = document.getElementById("add-button");
    var addEle = document.getElementById("add");
    var maskEle = document.getElementById("mask");
    searchButtonEle.addEventListener("click", jump);
    searchEle.addEventListener("keydown",ctrlDown);

    // 跳转到搜索页面
    function jump() {
        window.open("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + searchEle.value);
    }
    function ctrlDown(event){
       if(event.keyCode===13)
       jump();
       
    }
    addButtonEle.addEventListener("click", add);
    addEle.addEventListener("click", add);
    function add() {
        maskEle.style.display = "inline";
        // 显示一个添加收藏的主页面
        var collectionMain = document.createElement("div");
        collectionMain.style.width = "480px";
        collectionMain.style.height = "353px";
        collectionMain.style.background = "#fff";
        collectionMain.style.marginLeft = "720px";
        collectionMain.style.marginTop = "340px";
        collectionMain.style.padding = "20px";
        collectionMain.style.boxSizing = "border-box";

        maskEle.append(collectionMain);

        //创建一级标题-添加收藏
        var collectionH1 = document.createElement("h1");
        collectionH1.innerHTML = "添加收藏";
        collectionH1.style.width = "72px";
        collectionH1.style.height = "25px";
        collectionH1.style.fontFamily = "PingFangSC-Medium";
        collectionH1.style.fontSize = "18px";
        collectionH1.style.color = "#000";
        collectionH1.style.margin = "0 388px 20px 0px";

        //创建导航标题
        var collectionH21 = document.createElement("h2");
        collectionH21.innerHTML = "导航标题";
        collectionH21.style.width = "56px";
        collectionH21.style.height = "20px";
        collectionH21.style.fontFamily = "PingFangSC-Medium";
        collectionH21.style.fontSize = "14px";
        collectionH21.style.color = "#333333";
        collectionH21.style.margin = "0 404px 4px 0";
        //创建标题的输入框
        var title = document.createElement("input");
        title.style.width = "440px";
        title.style.height = "36px";
        title.style.background = "#FFFFFF";
        title.style.border = "1px solid #E7E7E7";
        title.style.borderRadius = "4px";
        title.style.margin = "0 0 16px 0";

        //创建导航描述
        var collectionH22 = document.createElement("h2");
        collectionH22.innerHTML = "导航描述";
        collectionH22.style.width = "56px";
        collectionH22.style.height = "20px";
        collectionH22.style.fontFamily = "PingFangSC-Medium";
        collectionH22.style.fontSize = "14px";
        collectionH22.style.color = "#333333";
        collectionH22.style.margin = "0 0 4px 0";

        //创建描述的输入框
        var describe = document.createElement("input");
        describe.style.width = "440px";
        describe.style.height = "36px";
        describe.style.background = "#FFFFFF";
        describe.style.border = "1px solid #E7E7E7";
        describe.style.borderRadius = "4px";
        describe.style.margin = "0 0 16px 0";

        //创建导航链接
        var collectionH23 = document.createElement("h2");
        collectionH23.innerHTML = "导航链接";
        collectionH23.style.width = "56px";
        collectionH23.style.height = "20px";
        collectionH23.style.fontFamily = "PingFangSC-Medium";
        collectionH23.style.fontSize = "14px";
        collectionH23.style.color = "#333333";
        collectionH23.style.margin = "0 0 4px 0";
        //创建导航链接的输入框
        var link = document.createElement("input");
        link.style.width = "440px";
        link.style.height = "36px";
        link.style.background = "#FFFFFF";
        link.style.border = "1px solid #E7E7E7";
        link.style.borderRadius = "4px";
        link.style.margin = "0 0 20px 0";
        //创建确认按钮
        var button1 = document.createElement("button");
        button1.style.width = "120px";
        button1.style.height = "36px";
        button1.style.background = "#3F5DEA";
        button1.style.borderRadius = "4px";
        button1.style.margin = "0 0 0 184px";
        button1.innerHTML = "确定";
        //创建取消按钮
        var button2 = document.createElement("button");
        button2.style.width = "120px";
        button2.style.height = "36px";
        button2.style.borderRadius = "4px";
        button2.style.margin = "0 0 0 16px";
        button2.innerHTML = "取消";

        collectionMain.appendChild(collectionH1);
        collectionMain.appendChild(collectionH21);
        collectionMain.appendChild(title);
        collectionMain.appendChild(collectionH22);
        collectionMain.appendChild(describe);
        collectionMain.appendChild(collectionH23);
        collectionMain.appendChild(link);
        collectionMain.appendChild(button1);
        collectionMain.appendChild(button2);

        // 确认添加
        button1.addEventListener("click", sure);
        function sure() {
            maskEle.style.display = "none";
            var aa = document.createElement("a");
            aa.href = link.value;
            aa.target = "_blanck";
            aa.style.width = "310px";
            aa.style.height = "100px";
            aa.style.background = "white";
            aa.style.borderRadius = "4px";
            aa.style.marginRight = "20px";
            aa.style.verticalAlign = "bottom";
            var left = document.createElement("div");
            left.style.display = "inline-block";
            left.style.width = "60px";
            left.style.height = "60px";
            left.style.margin = "20px 0 20px 20px";
            left.style.verticalAlign = "bottom";
            var circle = document.createElement("div");
            circle.style.width = "60px";
            circle.style.height = "60px";
            circle.style.borderRadius = "50px";
            circle.style.background = "#3F5DEA";
            circle.style.textAlign = "center";
            circle.style.lineHeight = "90px";
            left.appendChild(circle);
            var right = document.createElement("div");
            right.style.display = "inline-block";
            right.style.width = "190px";
            right.style.height = "60px";
            right.style.margin = "20px";
            var addTitle = document.createElement("span");
            addTitle.innerHTML = title.value;
            addTitle.style.display = "inline-block";
            addTitle.style.width = "28px";
            addTitle.style.height = "20px";
            addTitle.style.fontSize = "14px";
            addTitle.style.color = "#000";
            addTitle.style.margin = "0px 182px 6px 0px";
            var addDescribe = document.createElement("p");
            addDescribe.innerHTML = describe.value;
            addDescribe.style.display = "inline-block";
            addDescribe.style.fontSize = "12px";
            addDescribe.style.color = "#c4c4c4";
            addDescribe.style.width = "190px";
            addDescribe.style.height = "34px";
            addDescribe.style.margin = "0";
            right.appendChild(addTitle);
            right.appendChild(addDescribe);
            aa.appendChild(left);
            aa.appendChild(right);
            document.body.appendChild(aa);

        }
        //取消添加
        button2.addEventListener("click", cancel);
        function cancel() {
            maskEle.style.display = "none";
        }
    }
}

