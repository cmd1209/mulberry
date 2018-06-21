(function ($, root, undefined) {

	$(function () {
		'use strict';

		// DOM ready, take it away

		$('.owl-mulberry').owlCarousel({
		    items:1,
		    loop:true,
		    margin:20,
		    autoplay:true,
				animateOut: 'fadeOut',
		    autoplayTimeout:4000,
		    autoplayHoverPause:true,
				dots: false,
				nav: true,
				navText: ["&#10094;","&#10095;"]
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
				nav: true,
				navText: ["&#10094;","&#10095;"]
		});

		$('#menu-icon').click(function(){
		$(this).toggleClass('open');
		$('.normal-navigation').slideToggle('fast');
		});


		$('a.navlink').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
		});

		var reserve = $(".reserve");
		var module = $(".module");
		var close = $("#close-icon");

		reserve.click(function(){
			module.toggleClass('offhidden centered');
		});
		close.click(function(){
			module.toggleClass('offhidden centered');
		});



	});


})(jQuery, this);