(function ($, root, undefined) {

	$(function () {
		'use strict';

		// DOM ready, take it away

		$('.owl-one').owlCarousel({
		    items:1,
		    loop:true,
		    margin:0,
		    autoplay:true,
				animateOut: 'fadeOut',
		    autoplayTimeout:8000,
		    autoplayHoverPause:true,
				dots: false,
		});

		$('.owl-two').owlCarousel({
		    items:1,
		    loop:true,
		    margin:0,
		    autoplay:true,
				animateOut: 'fadeOut',
		    autoplayTimeout:4500,
		    autoplayHoverPause:true,
				dots: true,
				nav: false,
		});

		$('#menu-icon').click(function(){
		$(this).toggleClass('open');
		$('.mobile-cont').toggleClass('hidden visible');
		});

		$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});



	});




})(jQuery, this);


