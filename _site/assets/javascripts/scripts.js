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
		    autoplay:false,
				animateOut: 'fadeOut',
		    autoplayTimeout:4500,
		    autoplayHoverPause:true,
				dots: false,
				nav: true,
				navText: ["&#10094;","&#10095;"],
		});

		$('#menu-icon').click(function(){
		$(this).toggleClass('open');
		$('.mobile-cont').toggleClass('hidden visible');
		});

		// $('.speisactivator').click(function() {
  // 	$( ".onlinesk" ).slideToggle( "slow", function() {
  //   // Animation complete.
  // 		});
		// });

		$('a.navlink').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
		});



	});




})(jQuery, this);