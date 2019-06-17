/*从输入框中获取信息然后添加到一个待完成中*/
$(".bottom").click(function () {
        title=$(".todo-input").val();
        addTodoListItem(title) ;
    }

);
/*从输入框内按下回车添加到待完成中*/
$(".todo-input").keypress(function () {
    title=$(".todo-input").val();
    addTodoListItem(title) ;
});
function addTodoListItem(title){
    $("#todo-list").append('<div class="todo-list-item">\n' +
        '                        <div class="checkbox-container">\n' +
        '                            <input type="checkbox" class="checkbox">\n' +
        '                            <div class="checkbox-border">\n' +
        '                                <div class="checkbox-border-icon">√</div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="todo-list-word">'+title+'</div>\n' +
        '                        <div class="remove-btn">×</div>\n' +
        '                    </div>');

    $(".checkbox-container:not(.done)").click(function(){
        checkTodo($(this));
    });
}
/*从待完成添加到已完成*/
function addDoneListItem(title){
    $("#done-list").append('<div class="todo-list-item done">\n' +
        '                        <div class="checkbox-container done">\n' +
        '                            <input type="checkbox" class="checkbox">\n' +
        '                            <div class="checkbox-border">\n' +
        '                                <div class="checkbox-border-icon">√</div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="todo-list-word">'+title+'</div>\n' +
        '                        <div class="remove-btn">×</div>\n' +
        '                    </div>')
    $(".done").click(function(){
        checkDone($(this));
    });

}

function checkTodo($checkBox){
    var title = $checkBox.next().html();
    $checkBox.parent().remove();
    addDoneListItem(title);
}
function checkDone($checkBox){
    var title = $checkBox.next().html();
    $checkBox.parent().remove();
    addTodoListItem(title);
}



$(".checkbox-container:not(.done)").click(function(){
    checkTodo($(this));
});

$(".done").click(function(){
    checkDone($(this));
});

/*点击待完成将待办事项收起来*/
$("#todo-title").click(function () {
    $("#todo-list").toggle();
});

/*点击完成将待办事项收起来*/
$("#done-title").click(function () {
    $("#done-list").toggle();
});

/*点击×就会消失*/
$(".remove-btn").click(function () {
   $(this).parent().remove();
});
