

k=$(".nav").width();
console.log(k);
$(document).ready(function(k){
	  $(".nav_page").width($(".nav").width());

    $(".dropped").click(function(){

    	$(".submenu").slideUp(500);
        $(this).children(".submenu").toggle(500);

});

 $(window).mouseup(function(e){

    		if(e.target != $(".submenu")&& e.target.parentNode!=$(".submenu")){
    			$(".submenu").slideUp(500);
    			e.preventDefault();
    		}
    	})

});

$( "a" ).click(function( event ) {
  event.preventDefault();
})
$(document).scroll(function(){
 var d= $(".nav1").offset().top;
 console.log(d);
 var k= $(window).scrollTop() ;
 var z = document.documentElement.scrollTop;
 console.log(k);
 if(k>d/3){
 	$(".con").css("width","100%");
 	$(".nav1").css("width","100%");
 	$(".nav1").css({"top": '0', "position":'fixed',"z-index":'10'});
 }else{
 	$(".con").css("width","");
 	$(".nav1").css({"top": '', position:'relative'});
}
});
 // k=document.querySelector(".data");
 //  console.log(k.children[0]);

var sliderL=document.querySelector(".sldierL");
var h3=document.querySelectorAll(".h3");
var dot= document.querySelectorAll(".dot");
$('.dot').click(function(){
    $('.col122>.h3').removeClass('active');
    $('.col122>.h3[data-tab="'+$(this).attr("data-value")+'"]').addClass('active');
});

//section
$(".hoqqalar, .ikinci_hisse").mouseover(function(){
	$(this).find(".yazi").css("top", "-60px").css("transition", ".3s")
})
.mouseleave(function(){
	$(this).find(".yazi").css("top", "0px")
})
//sectionend
