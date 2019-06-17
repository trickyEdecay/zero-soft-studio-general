window.onload = function () {
   var time = setInterval(downmove, 3000);
   $(".next").click(downmove);
   $(".last").click(upmove);
   var currentPicIndex = 0;
   currentPicIndex1();
   function downmove() {
      ++currentPicIndex;
      if (currentPicIndex < 3) {
         // transition:all .3s;
         $(".inner-container").css('transform', 'translateX(-' + (currentPicIndex * 400) + 'px)');
         $(".inner-container").css('transition', 'all .3s');
      } else {
         currentPicIndex = 0;
         $(".inner-container").css('transform', 'translateX(-' + (currentPicIndex * 400) + 'px)');
         $(".inner-container").css('transition', 'all .0s');
      }
      currentPicIndex1();
   }
   function upmove() {
      --currentPicIndex;
      if (currentPicIndex > -1) {
         $(".inner-container").css('transform', 'translateX(-' + (currentPicIndex * 400) + 'px)');
         $(".inner-container").css('transition', 'all .3s');
      } else {
         currentPicIndex = 2;
         $(".inner-container").css('transform', 'translateX(-' + (currentPicIndex * 400) + 'px)');
         $(".inner-container").css('transition', 'all .0s');
      }
      currentPicIndex1();
   }
   var $first = $("#first");
   $first.click(function () {
      currentPicIndex = 0; move();
   });
   var $second = $("#second");
   $second.click(function () {
      currentPicIndex = 1; move();
   });
   var $third = $("#third");
   $third.click(function () {
      currentPicIndex = 2; move();
   });
   function move() {
      currentPicIndex1();
      $(".inner-container").css('transform', 'translateX(-' + (currentPicIndex * 400) + 'px)');
   }
   function currentPicIndex1() {
      switch (currentPicIndex) {
         case 0: {
            $(".indicator").css("background", "white");
            $("#first").css("background", "red");
         } break;
         case 1: {
            $(".indicator").css("background", "white");
            $("#second").css("background", "red");
         } break;
         case 2: {
            $(".indicator").css("background", "white");
            $("#third").css("background", "red");
         }
      }
   }
}