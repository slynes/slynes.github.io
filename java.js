setTimeout(function showButton() {
	$('#aboutButton').fadeIn(1500);
}, 2000);

//function for the About button to seamlessly scroll down to about section on click
$(document).ready(function (){
	$("#aboutButton").click(function (){
		$('html, body').animate({
			scrollTop: $("#moreinfo")[0].scrollHeight
		}, 2000);
	});
});

//function for the About Nav-bar button to seamlessly scroll down to about section on click
$(document).ready(function (){
	$("#about").click(function (){
		$('html, body').animate({
			scrollTop: $("#moreinfo")[0].scrollHeight
		}, 2000);
	});
});

//function for the arrow at bottom of more info div to go down to Stevens div
$(document).ready(function (){
	$(".arrow-down").click(function (){
		$('html, body').animate({
			scrollTop: $("#stevens").offset().top
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

setTimeout($(document).ready(function() {
	sr.reveal('.arrow-down', { duration: 1000 });
}), 3000);

$(document).ready(function() {
	sr.reveal('#stevensInfo', { duration: 1000 });
});

$(document).ready(function() {
	sr.reveal('#stevensButton', { duration: 1000 });
});

$(document).ready(function() {
	sr.reveal('#stevensClassButton', { duration: 1000 });
});

$(document).ready(function() {
	sr.reveal('.img-thumbnail', { duration: 1000 });
});


