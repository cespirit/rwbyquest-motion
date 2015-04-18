$(document).ready(function() {
	var started = false;
	var autoPlayOn = true;
	var pageNum = -1;	
	var page;
	var pageType;	
	var pageElem = $("#page");
	var lastPage = content.pages.length - 1;	

	var updatePage = function() {		
		page = content.pages[pageNum];
		if(page) {
			pageType = page.pageType;
			
			if(pageType) {				

				switch(pageType) { 
					case "instructions":
						console.log("Instructions page, pageNum: " + pageNum);
						pageElem.html("<div class='instructions'>" + page.instructions + "</div>");
						pageElem.data("pageNum", pageNum);
						$.when(page.animation(pageElem)).then(function(){
							if(autoPlayOn) { 
								nextPage(); 							
							}
							else {
								pageElem.stop(true, false);
								pageElem.show();
							}
						});
						break;
					case "command":
						console.log("Command page, pageNum: " + pageNum);
						pageElem.html("<div class='command'>" + page.command + "</div>");
						pageElem.data("pageNum", pageNum);
						$.when(page.animation(pageElem)).then(function(){
							if(autoPlayOn) { 
								nextPage(); 							
							}
							else {
								pageElem.stop(true, false);
								pageElem.show();
							}
						}); 
						break;
					case "image":
						console.log("Image page, pageNum: " + pageNum);						
						pageElem.html("<div><img class='panel-img' alt='' src='"+ page.src + "'/></div>");
						pageElem.data("pageNum", pageNum);
						$.when(page.animation(pageElem)).then(function(){
							if(autoPlayOn) { 
								nextPage(); 						
							}
							else {
								pageElem.stop(true, false);
								pageElem.show();
							}
						});
						break; 
					case "credits":
						console.log("Credits page, pageNum: " + pageNum);
						$("#page").html("");
						$("#togglePlay").find("i").removeClass("fa-pause");
						$("#togglePlay").find("i").addClass("fa-play");						
						$("#credits").css("display", "block");
						break;
					default:
						console.log("Error in updatePage(). Page type is not valid for page: " + pageNum);
						break;
				}
			}
		} else {
			console.log("Error in updatePage() at page number: " + pageNum);
			return;
		}
	};

	var prevPage = function() {
		console.log("Clicked PREV");

		if(pageNum === lastPage) { 
			$("#credits").css("display", "none");
		}
		pageNum--;
		(pageNum < 0) ? ++pageNum : updatePage();		
	};

	var nextPage = function() {
		console.log("Clicked NEXT"); 
		pageNum++;
		if(pageNum > lastPage) {
			--pageNum;	
		} else {  
			updatePage();
		}
	};

	var togglePlay = function() {
		var togglePlayBtn = $(this).find("i");
		var isPaused = togglePlayBtn.hasClass("fa-play");

		if(isPaused && pageNum != lastPage) {
			autoPlayOn = true;	
			togglePlayBtn.removeClass("fa-play");
			togglePlayBtn.addClass("fa-pause");			
			nextPage();
			console.log("Pressed to PLAY, pageNum: ", pageNum);	
		} 
		else if(!isPaused){
			autoPlayOn = false;	
			togglePlayBtn.removeClass("fa-pause");
			togglePlayBtn.addClass("fa-play");	
			//updatePage();				
			console.log("Pressed to PAUSE, pageNum: ", pageNum);			
		}			
	}

	$("#btnStart").click(function(){
		console.log("Clicked START");		
		$("#titleScreen").css("display", "none");
		$("#controls").css("display", "block");
		pageElem.css("display", "block");  
		started = true;
		nextPage();
	});

	$("#togglePlay").click(togglePlay);	

	$("#prev").on("click", function(){
		
		autoPlayOn = false;	
		var togglePlayBtn = $("#togglePlay").find("i");
		togglePlayBtn.removeClass("fa-pause");
		togglePlayBtn.addClass("fa-play");	

		prevPage();
	});			

	$("#next").on("click", function(){
				
		autoPlayOn = false;	
		var togglePlayBtn = $("#togglePlay").find("i");
		togglePlayBtn.removeClass("fa-pause");
		togglePlayBtn.addClass("fa-play");	

		nextPage();
	}); 

	$("#page").on("click", function(){
				
		autoPlayOn = false;	
		var togglePlayBtn = $("#togglePlay").find("i");
		togglePlayBtn.removeClass("fa-pause");
		togglePlayBtn.addClass("fa-play");	

		nextPage();
	});				
	
	$("body").keyup(function(event){
		if(started) {
			if(event.which === 37) {
						
				autoPlayOn = false;	
				var togglePlayBtn = $("#togglePlay").find("i");
				togglePlayBtn.removeClass("fa-pause");
				togglePlayBtn.addClass("fa-play");	

				prevPage();
			}
			else if(event.which === 39) {
						
				autoPlayOn = false;	
				var togglePlayBtn = $("#togglePlay").find("i");
				togglePlayBtn.removeClass("fa-pause");
				togglePlayBtn.addClass("fa-play");	

				nextPage();
			}
		}
	});	
});