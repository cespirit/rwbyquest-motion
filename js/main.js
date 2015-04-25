$(document).ready(function() {
	var pageNum = 1;	
	var page, pageType;	
	var pageElem = $("#page");
	var lastPage = content.pages.length - 1;

	var runAnimation = function(page, newHTML){
		$.when(page.animation(pageElem, newHTML, page.options))
		.then(function(){
			console.log("runAnimation() - nextPage()");				
			nextPage(); 							
		})
		.fail(function(){
			alert("An ERROR occurred. runAnimation() Failed");
			pageElem.clearQueue();
			pageElem.stop(true, true);
		});
	};

	var updatePage = function() {		
		var newHTML = "";
		page = content.pages[pageNum];
		if(page) {
			pageType = page.pageType;
			
			if(pageType) {				

				switch(pageType) { 
					case "image":
						console.log("Update() - Image page, pageNum: " + pageNum);						
						newHTML = "<div class='pageContent' data-pagenum='" + pageNum + "'><img class='panel-img' alt='' src='"+ page.src + "'/></div>";
						runAnimation(page, newHTML);
						break; 
					case "command":
						console.log("Update() - Command page, pageNum: " + pageNum);
						newHTML = "<div class='command pageContent' data-pagenum='"+ pageNum +"'>" + page.command + "</div>";
						runAnimation(page, newHTML);
						break;					
					case "instructions":
						console.log("Update() - Instructions page, pageNum: " + pageNum);
						newHTML = "<div class='instructions pageContent' data-pagenum='"+ pageNum +"'>" + page.instructions + "</div>";
						runAnimation(page, newHTML);
						break;
					case "message": 
						console.log("Update() - Instructions page, pageNum: " + pageNum);
						newHTML = "<div class='message pageContent' data-pagenum='"+ pageNum +"'>" + page.message + "</div>";
						runAnimation(page, newHTML);
						break;
					case "credits":
						console.log("Update() - Credits page, pageNum: " + pageNum);
						runAnimation(page, newHTML);
						break;
					default:
						alert("Something went wrong. Please contact charlenerespiritu@gmail.com and message them saying there was a problem on page: " + pageNum +".");
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
			console.log("No next page.");
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