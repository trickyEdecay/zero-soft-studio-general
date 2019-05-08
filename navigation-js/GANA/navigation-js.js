
window.onload = function () {
    var mainEle = document.getElementById("main");
    var searchEle = document.getElementById("search");
    var searchButtonEle = document.getElementById("search-button");
    var addButtonEle = document.getElementById("add-button");
    var addEle = document.getElementById("add");
    var maskEle = document.getElementById("mask");
    searchButtonEle.addEventListener("click", jump);
    searchEle.addEventListener("keydown", ctrlDown);

    // 跳转到搜索页面
    function jump() {
        window.open("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + searchEle.value);
    }
    function ctrlDown(event) {
        if (event.keyCode === 13)
            jump();

    }
    addButtonEle.addEventListener("click", add);
    addEle.addEventListener("click", add);
    function add() {
        maskEle.style.display = "inline";
        // 显示一个添加收藏的主页面
        var collectionMain = document.createElement("div");
        collectionMain.className = "collectionmain";
        maskEle.append(collectionMain);

        //创建一级标题-添加收藏
        var collectionH1 = document.createElement("h1");
        collectionH1.innerHTML = "添加收藏";
        collectionH1.className = " collectionh1";

        //创建导航标题
        var collectionH21 = document.createElement("h2");
        collectionH21.innerHTML = "导航标题";
        collectionH21.className = "collectionh21";
        //创建标题的输入框
        var title = document.createElement("input");
        title.className = "input";
        //创建导航描述
        var collectionH22 = document.createElement("h2");
        collectionH22.innerHTML = "导航描述";
        collectionH22.className = "collectionh22";
        //创建描述的输入框
        var describe = document.createElement("input");
        describe.className = "input";
        //创建导航链接
        var collectionH23 = document.createElement("h2");
        collectionH23.innerHTML = "导航链接";
        collectionH23.className = "collectionh23";
        //创建导航链接的输入框
        var link = document.createElement("input");
        link.className = "input";
        link.style.margin = "0 0 20px 0";
        //创建确认按钮
        var button1 = document.createElement("button");
        button1.className = "button";
        button1.innerHTML = "确定";
        //创建取消按钮
        var button2 = document.createElement("button");
        button2.className = "button";
        button2.style.margin = "0 0 0 16px";
        button2.style.background = "white";
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
            aa.tagName = "a";
            var left = document.createElement("div");
            left.className = "left";
            var circle = document.createElement("div");
            circle.className = "circle";
            left.appendChild(circle);
            var right = document.createElement("div");
            right.className = "right";
            var addTitle = document.createElement("span");
            addTitle.innerHTML = title.value;
            addTitle.tagName = "span";
            var addDescribe = document.createElement("p");
            addDescribe.innerHTML = describe.value;
            addDescribe.tagName = "p";
            right.appendChild(addTitle);
            right.appendChild(addDescribe);
            aa.appendChild(left);
            aa.appendChild(right);
            mainEle.appendChild(aa);
        }
        //取消添加
        button2.addEventListener("click", cancel);
        function cancel() {
            maskEle.style.display = "none";
        }
    }
}

