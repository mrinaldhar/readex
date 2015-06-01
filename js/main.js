var dontHide = 0;
$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top - $('#menubar').height()
    }, 1000);
  });
}
function scrollto(posid) {
	$(posid).scrollView();
}
function doFunc(count, scrollPos) {
	if (count < 2) {
		var percentScroll = (scrollPos)/$('.page').height();
    	$('#centerpiece h1').css({"opacity": 1-percentScroll});
    	$('#me_img').css({"opacity": 1-percentScroll});
	}
	if (count == 1) {
		$('#centerpiece').show();
	}
	if (count == 2) {
		$('#centerpiece').fadeOut("slow");
			
		
	}
	if (count >= 2) {
		$('#centerpiece').hide();
		var percentScroll = (scrollPos - (count-1) * $('.page').height())/$('.page').height();
		$('#page'+(count+1)+' p').filter(":onScreen").css({"opacity": percentScroll});
	}
}
$('.logos td img').hover(function() {
	switch(this.id) {
		case 'twitter':
			$('#contactdet').html("twitter.com/mrinaldhar");
			break;
		case 'facebook':
			$('#contactdet').html("facebook.com/mrina23");
			break;
		case 'mail':
			$('#contactdet').html("E-120, OBH Palash Niwas, IIIT-Hyderabad<br />Gachibowli, Hyderabad, Andhra Pradesh - 500032.");
			break;
		case 'email':
			$('#contactdet').html("mrinal.dhar@gmail.com<br />mrinal.dhar@research.iiit.ac.in");
			break;
		case 'github':
			$('#contactdet').html("github.com/mrinaldhar");
			break;
		case 'bitbucket':
			$('#contactdet').html("bitbucket.org/mrinaldhar");
			break;
	}
});
function getPagePlacer(scrollPos) {
	var count=0;
	var scroll = scrollPos;
	var pageHeight = $('.page').height();

	while(scroll>0) {
		count += 1;
		scroll = parseInt(scroll-pageHeight);
	}

		doFunc(count, scrollPos);
	if (count < 5) {
		dontHide = 0;
		$('#scrolltext').html('Scroll down for more');

		return "About Me";
	}
	else if (count >= 5 && count < 7) {
		$('#scrolltext').html('Scroll down for more');

		dontHide = 0;

		return "My design philosophy";
	}
	else if (count >= 7 && count < 8) {
		$('#scrolltext').html('Scroll down for more');

		dontHide = 0;

		return "Some of my work";
	}
	else if (count >= 8 && count < 9) {
		$('#scrolltext').html('Scroll down for more');

		dontHide = 0;

		return "Technical Skills";
	}
	else if (count >= 9 && count < 10) {
		$('#scrolltext').html('But there is One More Thing.<br /><small>Keep scrolling down.</small>');
		dontHide = 1;
		$('#scrolltext').fadeIn();
		return "Get in touch";
	}
	else if (count >= 10 && count < 50) {

		$('#scrolltext').fadeOut();

		return "Steve Jobs";
	}
}
var prevScroll = 0;
var timer = window.setInterval(function() {
    	var scrollPos = $(this).scrollTop();
    	$('#placer p').html(getPagePlacer(scrollPos));
}, 1000);
    $(document).scroll(function() {
    	var docHeight = $(document).height();
    	var scrollPos = $(this).scrollTop();

    	$('#placer p').html(getPagePlacer(scrollPos));
    	if (scrollPos > 100) {
    		$('#placer').fadeIn();
    		if (dontHide == 0)
    		{
    		$('#scrolltext').fadeOut();
    	}
    	}
    	else {
    		$('#placer').fadeOut();
    		$('#scrolltext').fadeIn();
    	}

    });

var projIndex = -1;

    var counter = 0;
var does_ar = ["write", "imagine", "learn", "design", "create", "code", "invent", "develop"];
			var timer = window.setInterval(function() {
			$('#mid').animate({"opacity": 0}, function() {
				$('#mid').html(does_ar[counter%8]);
				counter += 1;
			});
			$('#mid').animate({"opacity": 1});
			}, 2000);
			var navHeight = $('#placer').height();

			$('#smallnav').css({"top": (navHeight/2)});
			$('#smallnav').css({"bottom": (navHeight/2)});
			$('#picture img').css({"max-height": $('.page').filter(':onScreen').height()-100});
			$('.tech').css({"max-height": $('.page').filter(':onScreen').height()/4});

var projects = [
					{
						"title":"Eve",
						"url":"./img/eve.png",
						"desc":"An artificially intelligent, digital assistant. It's platform independant, and works by listening to what you say or what you type."	
					}, 
					{
						"title":"CloudHub",
						"url":"./img/cloudhub.png",
						"desc":"An online file backup and management applicaiton. <br />It allows users to upload and view their photos, videos, music and other files - all in the browser."
					},
					{
						"title":"WaveTuner",
						"url":"./img/wave.png",
						"desc":"An artistic music wave generator inspired by the Siri wave visual."
					},
					{
						"title":"LTRC portal",
						"url":"./img/ltrc2.png",
						"desc":"The central portal which links to all other websites under LTRC, IIIT-Hyderabad."
					},
					{
						"title":"IASNLP 2015",
						"url":"./img/ltrc.png",
						"desc":"Website for the annually organised summer school for Natural Language Processing projects at IIIT-Hyderabad."
					},
					{
						"title":"Gratifi",
						"url":"./img/gratifi.png",
						"desc":"Backend website for a startup that plans to bring free wifi services to consumers at many popular retail locations."
					},
					{
						"title":"PixelSpotter",
						"url":"./img/pixel.png",
						"desc":"An HTML5 canvas based game, with multiple difficulty options, that runs off the browser."
					},
					{
						"title":"CarromGL",
						"url":"./img/carrom.png",
						"desc":"A multi-threaded, multi-platform, Open-GL based game that simulates the popular board game carrom. "
					},
					{
						"title":"VoiceBuy",
						"url":"./img/voicebuy.png",
						"desc":"An Android app for a startup that plans to simplify the process of online shopping for consumers, while integrating an in-house speech engine."
					},
					{
						"title":"Felicity",
						"url":"./img/felicity.png",
						"desc":"An Android app for Felicity, the annual college festival at IIIT-Hyderabad."
					},
					
				]
				    function nextproj() {
				    	

				    	$('#picture').animate({"opacity": 0}, function() {
				    		$('#picture img').attr('src', projects[projIndex%10]['url']);
				    	});
				    	$('#detail').animate({"opacity": 0}, function() {
				    	$('#projtitle').html(projects[projIndex%10]['title']);
				    	$('#projdetails').html(projects[projIndex%10]['desc']);
				    	});
				    	$('#picture').animate({"opacity": 1});
				    	$('#detail').animate({"opacity":1});
				    	projIndex++;
				    	$('#cache').attr('src', projects[projIndex%10]['url']);
				    	if (projIndex == 0) {
				    		$('#prevBtn').fadeOut();
				    	}
				    	else {
				    		$('#prevBtn').fadeIn();
				    	}
    				}
    				function prevproj() {
    					projIndex--;
    					if (projIndex == 0) {
				    		$('#prevBtn').fadeOut();
				    	}
				    	else {
				    		$('#prevBtn').fadeIn();
				    	}
    					$('#picture').animate({"opacity": 0}, function() {
				    		$('#picture img').attr('src', projects[projIndex%9]['url']);
				    	});
				    	$('#detail').animate({"opacity": 0}, function() {
				    	$('#projtitle').html(projects[projIndex%9]['title']);
				    	$('#projdetails').html(projects[projIndex%9]['desc']);
				    	});
				    	$('#picture').animate({"opacity": 1});
				    	$('#detail').animate({"opacity":1});
    				}
    nextproj();

    $('.techskills table tr td img').hover(function() {
						if (this.id!='no') {
							$('#tooltip').html(this.id);
						}
						});
					$('.techskills table tr td img').mousemove(function(event) {
						if (this.id!='no') {

	$('#tooltip').css("opacity", "1");
	
	$('#tooltip').css("top", event.pageY-10);
	$('#tooltip').css("left", event.pageX);
}
});
$('.techskills table tr td img').mouseout(function() {
						if (this.id!='no') {

	$('#tooltip').css("opacity", "0");
}
});
window.setTimeout(function() {
for(var x=0; x<10; x++ ) {
	new Image().src = projects[x]['url'];
}
}, 2000)