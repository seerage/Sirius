document.addEventListener("DOMContentLoaded", function() {

	if($(window).width() > 575) {
		$('.mobile-menu-btn').click(function() {
			$('.mobile-menu').css('right', '0');
			$('.menu-wrapper').addClass('menu-wrapper_overlay')
			$('.main').css('filter', 'blur(6px)');
		});
	
		$('.mobile-menu__cross').click(function() {
			$('.mobile-menu').css('right', '-312px');
			$('.menu-wrapper').removeClass('menu-wrapper_overlay')
			$('.main').css('filter', 'blur(0)');
		});
	} else {
		$('.mobile-menu-btn').click(function() {
			$('.mobile-menu').slideDown();
			$('.menu-wrapper').addClass('menu-wrapper_overlay')
			$('.main').css('filter', 'blur(6px)');
		});

		$('.mobile-menu__cross').click(function() {
			$('.mobile-menu').slideUp();
			$('.menu-wrapper').removeClass('menu-wrapper_overlay')
			$('.main').css('filter', 'blur(0)');
		});
	}


});
