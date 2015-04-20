$(document).ready(function() {
	var autoPlayOn = true;
	var pageNum = 51;	
	var page;
	var pageType;	
	var pageElem = $("#page");
	var lastPage = content.pages.length - 1;
	var clickedControls = false;	

	var runAnimation = function(animation){
		$.when(animation(pageElem))
		.then(function(){
			if(autoPlayOn) { 
				console.log("runAnimation - autoPlayOn for nextPage()");				
				nextPage(); 							
			}
		})
		.fail(function(){
			alert("An ERROR occurred. runAnimation() Failed");
			pageElem.clearQueue();
			pageElem.stop(true, true);
		});
	};

	var updatePage = function() {		
		page = content.pages[pageNum];
		if(page) {
			pageType = page.pageType;
			
			if(pageType) {				

				switch(pageType) { 
					case "instructions":
						console.log("Instructions page, pageNum: " + pageNum);
						pageElem.html("<div class='instructions pageContent' data-pagenum='"+ pageNum +"'>" + page.instructions + "</div>");
						runAnimation(page.animation);
						break;
					case "command":
						console.log("Command page, pageNum: " + pageNum);
						pageElem.html("<div class='command pageContent' data-pagenum='"+ pageNum +"'>" + page.command + "</div>");
						runAnimation(page.animation);
						break;
					case "image":
						console.log("Image page, pageNum: " + pageNum);						
						pageElem.html("<div class='pageContent' data-pagenum='" + pageNum + "'><img class='panel-img' alt='' src='"+ page.src + "'/></div>");
						runAnimation(page.animation);
						break; 
					case "message": 
						console.log("Instructions page, pageNum: " + pageNum);
						pageElem.html("<div class='message pageContent' data-pagenum='"+ pageNum +"'>" + page.message + "</div>");
						runAnimation(page.animation);
						break;
					case "credits":
						console.log("Credits page, pageNum: " + pageNum);
						$("#page").html("");
						runAnimation(page.animation);
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

	var nextPage = function(animation) {
		console.log("----- NEXT -----"); 
		pageNum++;
		if(pageNum > lastPage) {
			--pageNum;	
		} else {  
			updatePage();
		}
	};
	
	$("#btnStart").click(function(){
		console.log("Clicked START");		
		$("#titleScreen").css("display", "none");
		pageElem.css("display", "block");  
		nextPage();	
	});
});