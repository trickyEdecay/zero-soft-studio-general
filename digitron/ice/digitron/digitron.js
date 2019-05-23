$("input").keydown(function (e) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e.keyCode == 13) {
      var num = $("input").val();
      if(num ==1 ) num = "one";
      if(num ==2 ) num = "two";
      if(num ==3 ) num = "three";
      if(num ==4 ) num = "four";
      if(num ==5 ) num = "five";
      if(num ==6 ) num = "six";
      if(num ==7 ) num = "seven";
      if(num ==8 ) num = "eight";
      if(num ==9 ) num = "nine";
      $("#digitron-container").removeClass();
      $("#digitron-container").addClass(num);    
    }
});

