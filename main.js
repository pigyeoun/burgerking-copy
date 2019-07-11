$(document).ready(function() {

//헤더메뉴 오버 이벤트
  $(".GNBwrap").hover(function(){
    $(".header_wrap").addClass("GNB_open");
   }, function(){
     $(".header_wrap").removeClass("GNB_open");
   });

//우측 하단 탑버튼
  window.addEventListener('scroll', function() {
    var el = document.querySelector('.bt_top');

    if(window.scrollY >= 400)el.classList.add('show');
    else el.classList.remove('show');
  });

//슬라이드
var a=1;
var max=$(".slide_track").children().length;
var slide_track = $(".slide_track");
var bt = false;
var slide_pause=false;
var auto_slide = setInterval(function(){animate("right");},4000);
slide_track.css({'margin-left':-1440});

bt_active();
$(".bt_right").click(function() {
  animate("right");});
$(".bt_left").click(function() {
  animate("left");});

$(".bt_pause").click(function() {
  if (slide_pause == false) {
    slide_pause=true;
    $(".bt_pause").addClass("play");
    clearInterval(auto_slide);
  }
  else if(slide_pause == true){
    slide_pause=false;
    $(".bt_pause").removeClass("play");
    clearInterval(auto_slide);
    auto_slide = setInterval(function(){animate("right");},4000);
  }
});



function animate(ani) {
  if (ani == "right" && bt == false) {
    bt = true;
    $(".slide_track").stop().animate({
      'margin-left':-2880
    },{complete:function () {
      slide_track.append(slide_track.children()[0]);
      slide_track.css({'margin-left':-1440});
      a ++;
      if (a>4) {a=1;}
      bt_active();
      bt = false;
    }});
  }
  else if (ani == "left" && bt == false) {
    bt = true;
    $(".slide_track").stop().animate({
      'margin-left':0
    },{complete:function() {
      slide_track.prepend(slide_track.children()[max-1]);
      slide_track.css({'margin-left':-1440});
      a --;
      if (a<1) {a=4;}
      bt_active();
      bt = false
    }});
  }
}

function bt_active() {
  if (a==1) {
    $(".slide_swiper1").addClass("bt_active");
    $(".slide_swiper2").removeClass("bt_active");
    $(".slide_swiper3").removeClass("bt_active");
    $(".slide_swiper4").removeClass("bt_active");
  }
  else if (a==2) {
    $(".slide_swiper2").addClass("bt_active");
    $(".slide_swiper1").removeClass("bt_active");
    $(".slide_swiper3").removeClass("bt_active");
    $(".slide_swiper4").removeClass("bt_active");
  }
  else if (a==3) {
    $(".slide_swiper3").addClass("bt_active");
    $(".slide_swiper1").removeClass("bt_active");
    $(".slide_swiper2").removeClass("bt_active");
    $(".slide_swiper4").removeClass("bt_active");
  }
  else if(a==4){
    $(".slide_swiper4").addClass("bt_active");
    $(".slide_swiper1").removeClass("bt_active");
    $(".slide_swiper2").removeClass("bt_active");
    $(".slide_swiper3").removeClass("bt_active");
  }
}

});
