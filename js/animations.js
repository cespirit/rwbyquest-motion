var animations = {
	fadeIn: function(el) {
		console.log("fadeIn() function called");
		
		var kickoff, first, second, third;
		kickoff = $.Deferred(); 

		first = kickoff.then(function(){
			console.log("\tfadeIn: hide()");
			return el.hide();
		});

		second = first.then(function(){
			console.log("\tfadeIn: fadeIn()");
			return el.fadeIn(3000);
		});

		kickoff.resolve();   
		return second;

		//el.hide().fadeIn(3000);	
	}
};	

/*
var fadeIn = function(el) {
	var promise = $(el).animate({
		opacity: 1
	}, 1500);
	// The promise will be resolved when the animation completes
	return promise.promise();	
};

var kickoff, firstFadeOut, firstFadeIn, secondFadeOut;

kickoff = $.Deferred();

firstFadeOut = kickoff.then(function(){
	console.log("Fading out the first time");
	return fadeOut("#divToFadeOut");
});

firstFadeIn = firstFadeOut.then(function(){
	console.log("Fading in");
	return fadeIn("#divToFadeOut");
});

secondFadeOut = firstFadeIn.then(function(){
	console.log("Fading out the second time");
	return fadeOut("#divToFadeOut");
});

kickoff.resolve();
*/