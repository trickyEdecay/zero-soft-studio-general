$digitronContainer = $("#digitron-main-container");

$(".submit-btn").click(tolight)

$(".submit-num")[0].onkeydown = function(){
	if (event.keyCode==13) {
		tolight();
	}
}

function tolight(){
    if($digitronContainer[0].classList.length > 0){
        $digitronContainer[0].classList.remove($digitronContainer[0].classList[0]);
    }
    var userContent = $(".submit-num").val().trim();
    $digitronContainer.toggleClass("num"+userContent);
}
