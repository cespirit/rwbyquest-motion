$(document).ready(function() {
	var pageNum = 0;	
	var page;

	hidePageElements();
	$(".page .command").fadeIn();

	$(".next").click(nextPage);	
	$(".prev").click(prevPage);

	function prevPage(event){
		event.preventDefault();
		pageNum--;
		page = pages[pageNum];

		if(page) {
			updatePage();
		}
		else {
			pageNum++;
			console.log("No previous pages");
		}
	}

	function nextPage(event){
		event.preventDefault();
		pageNum++;
		page = pages[pageNum];

		if(page) {
			updatePage();
		}
		else {
			pageNum--;
			console.log("No next page");
		}
	}	

	function hidePageElements() {
		// Hide all other page elements
		$(".page img").hide();
		$(".page .command").hide();
	};

	function updatePage() {
		switch(page.pageType) {
			case "image":
				hidePageElements();
				$(".page img").attr("src", pages[pageNum].src);
				$(".page img").fadeIn();
				console.log("page type: image");
				break;
			case "command":
				hidePageElements();
				$(".page .command").html("<p>"+ pages[pageNum].command +"</p>");
				$(".page .command").fadeIn();
				console.log("page type: command");
				break;	
			default:
				console.log("Something went wrong with page: " + pageNum);
				// Add a contact info with this page number for fixing
				break;
		}
	};

});

var pages = [	
	{
		pageType: "command",
		command: "EVERYONE: Put as much distance between you and the window. Maybe head for the hall if possible."
	},
	{
		pageType: "image",
		src: "images/3.png"		
	},
	{
		pageType: "image",
		src: "images/4.png"		
	},
	{
		pageType: "image",
		src: "images/5.png"		
	},	
	{
		pageType: "image",
		src: "images/6.png"		
	},
	{
		pageType: "command",
		command: "Everyone back away from the window. Test out the entity's abilities by throwing a pillow at them!"
	},	
	{
		pageType: "image",
		src: "images/8.png"		
	}
];

