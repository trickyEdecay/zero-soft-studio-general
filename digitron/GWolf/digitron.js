$inputNumber=$("#main-input-container");         
$enterButton=$("#enter-button");
$digitronContainer=$("#digitron-container");    
 //按enter键时显示数字
 $inputNumber.keydown(function(e){     
    if(e.keyCode==13){
        showNum($inputNumber.val());
       
    }
 })

 //按确定按钮时显示数字
$enterButton.click(function(){  
        showNum($inputNumber.val());
})

function showNum(num){          
    if(0<=num&&num<=9){           
        if($digitronContainer[0].classList.length>0){     
            $digitronContainer.removeClass($digitronContainer[0].classList[0]);  
        }
    }else{
        return;
    }
    if(num==0){
        $digitronContainer.addClass("zero");
    }
    if(num==1){
        $digitronContainer.addClass("one");
    }
    if(num==2){
        $digitronContainer.addClass("two");
    }
    if(num==3){
        $digitronContainer.addClass("three");
    }
    if(num==4){
        $digitronContainer.addClass("four");
    }
    if(num==5){
        $digitronContainer.addClass("five");
    }
    if(num==6){
        $digitronContainer.addClass("six");
    }
    if(num==7){
        $digitronContainer.addClass("seven");
    }
    if(num==8){
        $digitronContainer.addClass("eight");
    }
    if(num==9){
        $digitronContainer.addClass("nine");
    }
}


  