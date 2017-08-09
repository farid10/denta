
k=$(".nav").width();
console.log(k);
$(document).ready(function(k){
	  $(".nav_page").width($(".nav").width());
    
    $(".dropped").click(function(){

    	$(".submenu").slideUp(500);
        $(this).children(".submenu").toggle(500);
        
});
    // $(".submenu").mouseleave(function(){
    // 		$(".submenu").slideUp(500);
    // 	})
 $(window).mouseup(function(e){
    		
    		// $(".submenu").slideUp(500);
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
 k=document.querySelector(".data");
  console.log(k.children[0]);

// var pos = document.querySelector(".nav1");

// document.addEventListener("scroll",function(){
//     var topValue = document.querySelector(".nav1").offsetTop;
//     console.log(topValue);
//     if(document.body.scrollTop > topValue){
//      pos.style.position = "fixed";
//      pos.style.top = 0 + "px";
//     }else if(document.body.scrollTop < topValue){
//         pos.style.position = "absolute";
//         pos.style.top = "32px";
//     }
// });
// var sliderL= document.querySelector(".sliderL");
var sliderL=document.querySelector(".sldierL");
var h3=document.querySelectorAll(".h3");
var dot= document.querySelectorAll(".dot");
$('.dot').click(function(){
    $('.col122>.h3').removeClass('active');
    $('.col122>.h3[data-tab="'+$(this).attr("data-value")+'"]').addClass('active');
})
// $(document).ready(function(k){
//     $('.dropdown-toggle').dropdown();
// });

// for(var i=0;i<dot.length;i++){
//     dot[i].addEventListener("click",function(){
//     // for(var j=0;j<h3.length;j++){
//     //     h3[j].classList.remove("active");
//     //     if(!h3[j].classList.contains('active'))
//     //         h3[j].classList.add('active');
//     // }
//    console.log(this)
  
//     // val=this.getAttribute("data-value");
    
//     // d=k.children[val];
//     // console.log(d);
//     })
// }
