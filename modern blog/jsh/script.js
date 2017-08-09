

//     // $(".submenu").mouseleave(function(){
//     // 		$(".submenu").slideUp(500);
//     // 	})
//  $(window).mouseup(function(e){
    		
//     		// $(".submenu").slideUp(500);
//     		if(e.target != $(".submenu")&& e.target.parentNode!=$(".submenu")){
//     			$(".submenu").slideUp(500);
//     			e.preventDefault();
//     		}
//     	})



// $( "a" ).click(function( event ) {
//   event.preventDefault();
// })
// $(document).scroll(function(){
//  var d= $(".nav1").offset().top;
//  console.log(d);
//  var k= $(window).scrollTop() ;
//  var z = document.documentElement.scrollTop;
//  console.log(k);
//  if(k>d/3){
//  	$(".con").css("width","100%");
//  	$(".nav1").css("width","100%");
//  	$(".nav1").css({"top": '0', "position":'fixed',"z-index":'10'});
//  }else{
//  	$(".con").css("width","");
//  	$(".nav1").css({"top": '', position:'relative'});
// }
// });

 // function initMap() {
 //        var uluru = {lat: -25.363, lng: 131.044};
 //        var map = new google.maps.Map(document.getElementById('map'), {
 //          zoom: 4,
 //          center: uluru
 //        });
 //        var marker = new google.maps.Marker({
 //          position: uluru,
 //          map: map
 //        });
 //      }
//  $('.h').click(function(){
//     // $('h').removeClass('active');
//     $(this).siblings(".responsivePanel span").addClass('active');
// })
// $('.dot').click(function(){
//     $('.col122>.h3').removeClass('active');
//     $('.col122>.h3[data-tab="'+$(this).attr("data-value")+'"]').addClass('active');
// })
$('.h').click(function(e) {
    e.stopPropagation();
    $(this).addClass('active').siblings().removeClass('active');
    $('.resNav').toggleClass('rActive');
});
$('.ell').click(function() {
    $(this).addClass('active1').siblings().removeClass('active1');
    $('.resNumber').toggleClass('rActive');
});
$('.scrollTop').click(function(){
 $("body,html").animate({
     scrollTop: '0',
     
     
     /* stuff to do after animation is complete */
 },1000);  
})

$('.openList').click(function() {

    $(this).children().eq(1).toggleClass('activeDropMenu');
    // $( "ul.level-2" ).children().css( "background-color", "red" );
});
$('.searchInput').click(function() {
    /* Act on the event */
    $(".inputLabel,.inputt").toggleClass('activeLabel');
    
});
$('.icon').click(function() {
    $(this).addClass('activeCloseSearch').siblings().removeClass('activeCloseSearch');
  

});
 $(document).scroll(function(){
 var d= $(".navv").offset().top;
 // console.log(d);
 var k= $(window).scrollTop();
 console.log(k);
 var z = document.documentElement.scrollTop;
 // console.log(k);
 if(k>150){

 
        $(".navv").css({"position": "fixed", "width": "100%",   "z-index": "4","top":0,"border-radius":"0%"});
        $(".inputt").css({"width": "54vw", "margin-left": "21%"});
        $(".scrollTop").css({"display": "block"});
    

    
 }else{
    $(".navv").css({"position": "", "width": "","top":""});
    $(".inputt").css({"width": "", "margin-left": ""});
    $(".scrollTop").css({"display": ""});
  
}
});
  // $(document).click(function(e){
  //   e.stopPropagation();
  //           // $(".submenu").slideUp(500);
  //          if(!$(e.target).closest('.rMenu').length>0){
  //               $(".resNav").removeClass('rActive');
  //               $('.h').removeClass('active').siblings('span.rMenuu').addClass('active');
  //           }
  //       });