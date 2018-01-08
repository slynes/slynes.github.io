//all functions that wil happen when the document is created
$(document).ready(function (){

	setTimeout(function showButton() {
		$('#aboutButton').fadeIn(1500);
	}, 2000);

	$("#aboutButton").click(function (){
		$('html, body').animate({
			scrollTop: $("#moreinfo")[0].scrollHeight
		}, 2000);
	});

	$("#about").click(function (){
		$('html, body').animate({
			scrollTop: $("#moreinfo")[0].scrollHeight
		}, 2000);
	});

	$("#contact").click(function (){
		$('html, body').animate({
			scrollTop: $("#socialmedia").offset().top
		}, 2000);
	});

	var heightIncreaser = 0;
	if(screen.width > 1824) {
		// Code for bigger screens...
		heightIncreaser = 680;
	  } else {
		heightIncreaser = 475;
	  }

	$("#arrow1").click(function (){
		$('html, body').animate({
			scrollTop: $("#stevens")[0].scrollHeight + heightIncreaser
		}, 2000);
	});

	$("#arrow2").click(function (){
		$('html, body').animate({
			scrollTop: $("#socialmedia").offset().top
		}, 2000);
	});

	window.sr = ScrollReveal();

	sr.reveal('#idBio', { duration: 1000 });

	sr.reveal('.img-thumbnail', { duration: 1000 });

	setTimeout(
		sr.reveal('.arrow-down', { duration: 1000 }) , 3000);

	sr.reveal('#stevensInfo', { duration: 1000 });

	sr.reveal('#stevensButton', { duration: 1000 });

	sr.reveal('#stevensClassButton', { duration: 1000 });

	sr.reveal('#infocolumn', { duration: 1000 });

	newFunction();

});



function newFunction() {
	document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
}

