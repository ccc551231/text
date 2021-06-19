import $ from "https://cdn.skypack.dev/jquery@3.6.0";

$(window).scroll(function(evt){ 
//console.log($(window).scrollTop());
  if($(window).scrollTop()<=0){
    $(".explore").addClass('at_top');
  }
  else{$('.explore').removeClass('at_top');}
})


$(window).scroll(function(evt){
if($(window).scrollTop()>0)
{$('.navbar').removeClass('color'); 
}
else {$('.navbar').addClass('color');} })

$(window).mousemove(function(evt){
  var pagex= evt.pageX;
  var pagey= evt.pageY;
  //console.log(pagex,pagey);
  
  $('.follow_icon').css("transform","translateX("+(pagex/-20+50)+"px)");
  
 
  
  $('.word1').css("transform","translateX("+(pagex/30)+"px)");
  $('.word2').css("transform","translateX("+(pagex/20)+"px)");
  $('.word3').css("transform","translateX("+(pagex/10)+"px)");
  $('.flo1').css("transform","translateX("+(pagey/-10)+"px)");
  $('.flo2').css("transform","translateX("+(pagey/-20)+"px)");
  $('.flo3').css("transform","translateX("+(pagey/-30)+"px)");
 
})


$('.img1').click(function(){
  $('.wrap').fadeIn(250);
event.preventDefault();
})

$('.closs').click(function(){
  $('.wrap').fadeOut(250);
 event.preventDefault();
})


var screenleft=0;
$('.circle').click(function(){
  screenleft=screenleft+1;
  if(screenleft>2){
    screenleft=0;
  }
  $('.img1, .img2, .img3, .img4').css('left','-'+screenleft*100+'%');
event.preventDefault();
})






$(window).mousemove(function(evt){
  var pagex=evt.pageX;
  var pagey=evt.pageY;
  //var x= pagex-$('#section-contect').offset().left;
  //var y= pagey-$('#section-contect').offset().top;
  console.log(pagex,pagey);
  
  //if(pagey<0 || pagey>$('#section-contect').outerHeight())
    //$('#Watering').css('opacity','0');
  //else $('#Watering').css('opacity','1');
  //$('#Watering').css('left',pagex+'px');
  //$('#Watering').css('top',pagey+'px');
  
 var catplace = $("#cat").offset().left+$('#cat').width()/2;
  if (pagex<catplace-200) 
    $('#cat').attr("src","https://i.imgur.com/MfQocQu.png");
  else if (pagex>catplace+200)
   $('#cat').attr("src","https://i.imgur.com/bQQUQyM.png");
  
   else $('#cat').attr("src","https://i.imgur.com/7YqWy6Z.png");
  
  
  
  function detect_flower(flower_id,pagex){
    var flowerplace = $(flower_id).offset().left+$(flower_id).width()/2;
    if(Math.abs(pagex-flowerplace)<80)
      $(flower_id).css("bottom","0px");
    else
      $(flower_id).css("bottom","-40px");
  }
  
  detect_flower("#flower_1",pagex);
  detect_flower("#flower_2",pagex);
  detect_flower("#flower_3",pagex);
  
})


$(document).on('click','a',function(event){
  event.preventDefault();
  var target=$(this).attr('href');
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500);
  
})