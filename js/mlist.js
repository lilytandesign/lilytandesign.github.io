var menu = 
	'<li><a href="index.html">Portfolio</a></li>' + 
	'<li><a href="contact.html">Contact</a></li>';

var footer = 
	'<li class="box-social"><a href="https://www.linkedin.com/in/lilytannl/"><i class="ion-social-linkedin"></i></a></li>' + 
	'<li class="box-social"><a href="mailto:lilytan.design@gmail.com?subject=Hello%20Lily!" target="_blank"><i class="ion-email"></i></a></li>';

var copyright = '© Lily Tan Design 2017';

$(document).on('ready', function() {						
	$( "#menux" ).append(menu);
	$( ".footer-ul" ).append(footer);
	$(".copyright").append(copyright);
});