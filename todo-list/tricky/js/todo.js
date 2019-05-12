function addToDoItem(title){
    $toDoList=$("#todo-list");
    $toDoList.append('\
        <div class="todo-list-item">\
            <div class="default-checkbox">\
                <input type="checkbox" class="checkbox">\
                <div class="checkbox-border">\
                    <div class="checkbox-icon">√</div>\
                </div>\
            </div>\
            <p>'+title+'</p>\
            <div class="remove-btn">x</div>\
        </div>\
    ');

    $(".default-checkbox:not(.done)").click(function(){
        checkTodo($(this));
    });
}

function addDoneItem(title){
    $doneList=$("#done-list");
    $doneList.append('\
        <div class="todo-list-item done">\
            <div class="default-checkbox done">\
                <input type="checkbox" class="checkbox" checked>\
                <div class="checkbox-border">\
                    <div class="checkbox-icon">√</div>\
                </div>\
            </div>\
            <p>'+title+'</p>\
            <div class="remove-btn">x</div>\
        </div>\
    ');
}


$("#add-todo-btn").click(function(){
    $todoInput = $("#todo-input");
    addToDoItem($todoInput.val());
    $todoInput.val("");
});

function checkTodo($checkBox){
    var title = $checkBox.next().html();
    // console.log($checkBox);
    $checkBox.parent().remove();
    addDoneItem(title);
}

$(".default-checkbox:not(.done)").click(function(){
    checkTodo($(this));
});

$("#todo-title").click(function(){
    $("#todo-list").slideToggle();
});