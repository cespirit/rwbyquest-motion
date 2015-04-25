var animations = {
	showDialogue: function(pageElem, newHTML, pageOptions) {
		console.log("showtext() function called");

		var defaultOptions = {
			fadeInTime: 200,			
			dialogueDelay: 1000,
			delayTime: 3000
		};

		var options = $.extend({}, defaultOptions, pageOptions);		
		var kickoff, first, second, third;
		kickoff = $.Deferred(); 
		pageElem.html(newHTML);

		first = kickoff.then(function(){
			return pageElem.hide();
		});

		second = first.then(function(){
			console.log("\tfadeIn: fadeIn()");
			pageElem.html(newHTML);
			return pageElem.fadeIn(options.fadeInTime).delay(options.dialogueDelay);			
		});

		third = second.then(function(){
			pageElem.append("<img class='panel-img dialogue' alt='' src='" + options.dialogue + "'/>");

			return pageElem.find(".dialogue").animate({
				opacity: 1
			}, 400);

		});

		fourth = third.then(function(){
			return pageElem.delay(options.delayTime);	
		});

		kickoff.resolve();   		
		return fourth;

	},
	fadeIn: function(pageElem, newHTML, pageOptions) {
		console.log("fadeIn() function called");

		var defaultOptions = {
			fadeInTime: 200,
			delayTime: 2000
		};

		var options = $.extend({}, defaultOptions, pageOptions);		
		var kickoff, first, second, third;
		kickoff = $.Deferred(); 

		first = kickoff.then(function(){
			return pageElem.hide();
		});

		second = first.then(function(){
			console.log("\tfadeIn: fadeIn()");
			pageElem.html(newHTML);
			return pageElem.fadeIn(options.fadeInTime);
			
		});

		third = second.then(function(){
			console.log("\tfadeIn: delay()");
			return pageElem.delay(options.delayTime);			
		});

		kickoff.resolve();   		
		return third;
	},
	instructions: function(pageElem, newHTML, pageOptions) {

		var defaultOptions = {
			headerFadeInTime: 400,
			contentFadeInTime: 800,
			delayTime: 4000
		};

		var options = $.extend({}, defaultOptions, pageOptions);	
		var kickoff, first, second, third;
		
		kickoff = $.Deferred(); 
		pageElem.html(newHTML);

		first = kickoff.then(function(){
			console.log("\tinstructions: header fadeIn()");
			var instructHeader = $(".instructions").find("h2");			
			return instructHeader.animate({
				opacity: 1
			}, options.headerFadeInTime);
		});

		second = first.then(function(){
			console.log("\tinstructions: p fadeIn()");
			var instructContent = $(".instructions").find("p");	
			return instructContent.animate({
				opacity: 1
			}, options.contentFadeInTime);
		}); 

		third = second.then(function(){
			console.log("\tinstructions: delay()");
			return pageElem.delay(options.delayTime);			
		});
		
		kickoff.resolve();
		return third;
	},
	displayCredits: function(pageElem, newHTML, pageOptions) {

		var defaultOptions = {
			fadeInTime: 1000
		};

		var options = $.extend({}, defaultOptions, pageOptions);	
		var kickoff, first;
		var credits = $("#credits");
		
		pageElem.html(newHTML);
		kickoff = $.Deferred(); 

		first = kickoff.then(function(){
			console.log("\displayCredits: fadeIn()");
			credits.fadeIn(options.fadeInTime);
		});

		kickoff.resolve(); 
		return first;
	}

};	