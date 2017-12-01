setTimeout(function showButton() {
	$('button').fadeIn(2000);
}, 2000);

$(document).ready(function (){
	$("button").click(function (){
		$('html, body').animate({
			scrollTop: $("#moreinfo").offset().top
		}, 2000);
	});
});
