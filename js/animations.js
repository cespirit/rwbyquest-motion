var animations = {
	timer: null,
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
			return el.fadeIn(1000);
		});

		third = second.then(function(){
			console.log("\tfadeIn: delay()");
			return el.delay(3000);
		});


		kickoff.resolve();   
		
		return third;
	}
};	