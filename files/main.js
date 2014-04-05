/* JS Document - Developed by Fabio Rocha (http://fabiorochafg.github.io | fabiorochafg@gmail.com) */

$(document).ready(function() {

	$("#top-of-the-page").click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});

});