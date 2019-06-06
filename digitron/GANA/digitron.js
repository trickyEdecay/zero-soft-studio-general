window.onload = function () {
var $button=$("button");
var $number=$("input");
var $one=$("#b,#c");
var $two=$("#a,#b,#g,#e,#d");
var $three=$("#a,#b,#c,#d,#g");
var $four=$("#b,#c,#f,#g");
var $five=$("#a,#d,#f,#g,#c");
var $six=$("#a,#f,#g,#c,#d,#e");
var $seven=$("#a,#b,#c");
var $eight=$("#a,#b,#c,#d,#e,#f,#g");
var $nine=$("#a,#b,#c,#d,#f,#g");
var $zero=$("#a,#b,#c,#d,#e,#f");
$button.click(light);
$number.keydown(function (event) {
    if (event.which === 13)
        light();
});
function light(){
    switch($number.val()){
        case "1":
             {   $eight.removeClass("light");
             $one.addClass("light");
          }break;
        case "2":
            {   $eight.removeClass("light");
        $two.addClass("light");
     }break;
        case "3":{   $eight.removeClass("light");
        $three.addClass("light");
     }break;
        case "4":{   $eight.removeClass("light");
        $four.addClass("light");
     }break;
        case "5":{   $eight.removeClass("light");
        $five.addClass("light");
     }break;
        case "6":{   $eight.removeClass("light");
        $six.addClass("light");
     }break;
        case "7":{   $eight.removeClass("light");
        $seven.addClass("light");
     }break;
        case "8":{   $eight.removeClass("light");
        $eight.addClass("light");
     }break;
        case "9":{   $eight.removeClass("light");
        $nine.addClass("light");
     }break;
        default:{   $eight.removeClass("light");
        alert("输入有误");
     }
    }
 };
}