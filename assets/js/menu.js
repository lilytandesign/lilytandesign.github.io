var menu = 
	'<ul><li><a href="index.html">Home</a></li>' + 
	'<li><a href="works.html">My Works</a></li>' + 
	'<li><a href="contact.html">Contact</a></li></ul>';

	$(document).on('ready', function() {						
		$( "#menu" ).append(menu);
	 });