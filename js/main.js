$(document).ready(function() {

	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop:true,
		margin:10,  
		nav:false, 
		mouseDrag: false,
		dotsClass:'slider__pager',
		dots: true,
		autoplay:true,  
		smartSpeed:1000,  
		autoplayTimeout:4000, 
		animateOut: 'slideOutDown',
    	/*animateIn: 'flipInX',*/

   		smartSpeed:450,
		

    	responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:1
	        },
	        768:{
	            items:1
	        }

   		 }
	});

		
	$(".next_btn").click(function() {
		owl.trigger('next.owl.carousel');
		
	});

	$(".prev_btn").click(function(){
		owl.trigger('prev.owl.carousel');
		
	});
/* ФАНСИБОК*/
	$("a.popupbox-video").fancybox({
                   type:'swf',
                   allowfullscreen: 'true'
                });

/* Вейпоинт + анимаейт сиесес*/

$('.box').waypoint( function() {
	$('.box').addClass('animated slideInLeft');
}, {
	offset: '50%'
});

$('.tracked1').waypoint( function() {
	$('.box1').addClass('animated slideInLeft');
}, {
	offset: '60%'
});


$('.tracked').waypoint( function() {
	$('.box2').addClass('animated slideInLeft');
}, {
	offset: '70%'
});

$('.tracked2').waypoint( function() {
	$('.box3').addClass('animated slideInLeft');
}, {
	offset: '99%'
});

/* Кнопка*/
	$(".menu_btn").click(function() {
		$(".main_menu ul").slideToggle();
	});

});


