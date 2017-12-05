setTimeout(function showButton() {
	$('button').fadeIn(1500);
}, 2000);

//function for the About button to seamlessly scroll down to about section on click
$(document).ready(function (){
	$("button").click(function (){
		$('html, body').animate({
			scrollTop: $("#moreinfo").offset().top
		}, 2000);
	});
});

//function for the About Nav-bar button to seamlessly scroll down to about section on click
$(document).ready(function (){
	$("#about").click(function (){
		$('html, body').animate({
			scrollTop: $("#moreinfo").offset().top
		}, 2000);
	});
});

window.sr = ScrollReveal();

$(document).ready(function() {
	sr.reveal('#idBio', { duration: 1000 });
});

$(document).ready(function() {
	sr.reveal('.img-thumbnail', { duration: 1000 });
});

