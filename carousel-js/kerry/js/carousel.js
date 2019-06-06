var i=0;

// $("#images-container").addClass("translateX");
$(".circle").click(function(){
    jump($(this));
});

function jump($circle){
    var boo=false;
    for(var j=0;j<$(".circle").length;j++){
        if($(".circle")[j]===$circle[0]){
            boo=true;
            i=j;
        }

        if(boo===true){
            if($("img")[j].classList.length===1){
                $("img")[j].classList.remove("translateX");
            }
            continue;
        }

        if($("img")[j].classList.length===0){
            $("img")[j].classList.add("translateX");
        }
    }
}

var zheng=true;
var timer=null;
keyer();
function keyer() {
    timer=setInterval(function(){
        if(i===$("img").length-1){
            zheng=false;
        }
        if(zheng===true){
            $("img")[i].classList.add("translateX");
            if(i===$("img").length-2){
                zheng=false;
                i=-1;
            }
            i++;
        }else{
            for(var j=0;j<=$("img").length-2;j++){
                $("img")[j].classList.remove("translateX");
            }
            zheng=true;
        }
        
    },1000*2);
}


$("#container").mouseover(function(){
    clearInterval(timer);
})

$("#container").mouseout(function(){
    keyer();
})

$("#left").click(function(){
    if(i===0) return;
    i--;
    $("img")[i].classList.remove("translateX");
});

$("#right").click(function(){
    if(i===$("img").length-1) return;
    $("img")[i].classList.add("translateX");
    i++;
});


