var animations = {
	fadeIn: function(el) {
		console.log("fadeIn() function called");
		
		var kickoff, first, second, third;
		kickoff = $.Deferred(); 

		first = kickoff.then(function(){
			return el.hide();
		});

		second = first.then(function(){
			console.log("\tfadeIn: fadeIn()");
			return el.fadeIn(1000);
			
		});

		third = second.then(function(){
			console.log("\tfadeIn: delay()");
			return el.delay(3000);			
		});

		kickoff.resolve();   
		
		return third;
	},
	displayCredits: function(el) {
		var kickoff, first;
		var credits = $("#credits");
		el.html("");

		kickoff = $.Deferred(); 

		first = kickoff.then(function(){
			console.log("\displayCredits: fadeIn()");
			credits.fadeIn(1000);
		});

		kickoff.resolve(); 
		return first;
	},
	instructions: function(el) {
		var kickoff, first, second, third;
		kickoff = $.Deferred(); 

		first = kickoff.then(function(){
			console.log("\tinstructions: header fadeIn()");
			var instructHeader = $(".instructions").find("h2");			
			return instructHeader.animate({
				opacity: 1
			}, 500);
		});

		second = first.then(function(){
			console.log("\tinstructions: p fadeIn()");
			var instructContent = $(".instructions").find("p");	
			return instructContent.animate({
				opacity: 1
			}, 1000);
		}); 

		third = second.then(function(){
			console.log("\tinstructions: delay()");
			return el.delay(3000);			
		});
		
		kickoff.resolve();
		return third;
	}

};	