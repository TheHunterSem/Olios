$('.main-screen').slick({
	dots: true,
	arrows: false
});

$(document).ready(function() { 
	$('a#right-menu-hamburger').click( function(event){ 
		event.preventDefault();
		 	$('#icon-menu').toggle();
		 	$('#icon-cancel').toggle();
		 		$('#main-right-menu').toggle();
		 			
		});
	});
