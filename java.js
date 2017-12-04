setTimeout(function showButton() {
	$('button').fadeIn(2000);
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

