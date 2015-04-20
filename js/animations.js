var animations = {
	fadeIn: function(el) {
		console.log("fadeIn() function called");
		
		var kickoff, first, second, third;
		kickoff = $.Deferred(); 

		first = kickoff.then(function(){
			console.log("\tfadeIn: fadeIn()");
			return el.fadeIn(1000);
		});

		second = first.then(function(){
			console.log("\tfadeIn: delay()");
			return el.delay(3000);
		});

		third = second.then(function(){
			return el.hide();
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
	}

};	