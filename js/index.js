$(document).ready(function() {
	$(".button-collapse").sideNav();
	$('.materialboxed').materialbox();
	particlesJS.load('particles-js', 'js/particles.json', function() {
		console.log('callback - particles.json config loaded');
	});
	var details_string = "Name: Utkarsh Patil<br>";
	details_string += "Age: 19<br><br>";
	details_string += "Education:<br>";
	details_string += "National Institute of Technology Karnataka, Surathkal<br>";
	details_string += "B.Tech. in Information Technology (IT)<br>";
	details_string += "2016 - present<br><br>";
	details_string += "The Indian High School, Dubai<br>";
	details_string += "Grades 3 - 12<br>";
	details_string += "2006 - 2016<br><br>";
	details_string += "Website: https://utkarsh23.github.io/"
	$(".details-print").typed({
		strings: [
			details_string,
		],
		typeSpeed: 0,
	});
	$("#quotes-print").typed({
		strings: [
			"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
			"Stay Hungry. Stay Foolish.",
			"Nothing is work unless you'd rather be doing something else.",
			"The past cannot be changed. The future is yet in your power.",
			"If you're going through hell, keep going.",
			"You got one shot, do not miss your chance to blow!",
			"If opportunity doesn't knock, build a door."
		],
		typeSpeed: 0,
		loop: true,
		backDelay: 2000,
		backSpeed: 0,
		shuffle: true
	});
	$("#nitkgal").vegas({
		slides: [
			{ src: "images/nitk_gallery/3.jpg" },
			{ src: "images/nitk_gallery/5.jpg" },
			{ src: "images/nitk_gallery/4.jpg" },
			{ src: "images/nitk_gallery/2.jpg" },
			{ src: "images/nitk_gallery/1.jpg" },
		],
		overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.0/overlays/08.png',
		animation: 'kenburns'
	});
	$('#terminal-like').height($('#aboutmecontent').height());
	$('#inspired-id').height($('#links-id').height());
	if (screen.width > 600)
	{
		$('#black-screen').height($('#terminal-like').height() - 25);
	}
});

$(window).scroll(function() {
	if (($('#aboutmecontainer').offset().top - $(window).scrollTop() <= 40) && ($("#nitkgal").offset().top - $(window).scrollTop() > 40)) {
		$('.nav-color-change').removeClass('white-text').addClass('indigo-text').addClass('text-darken-4');
	}
	else {
		$('.nav-color-change').removeClass('indigo-text').removeClass('text-darken-4').addClass('white-text');
	}
});