$(document).ready(function() {
	var pageNum = -1;	
	var page;

	hidePageElements();

	$(".next").click(nextPage);			
	$(".prev").click(prevPage);

	$("body").keyup(function(event){
		if(event.which === 37) {
			prevPage(event);
		}
		else if(event.which === 39) {
			nextPage(event);	
		}
	});

	$("#togglePlay").click(function(){
		$(this).find("i").toggleClass("fa-play fa-pause");
	});

	function prevPage(event){
		/*event.preventDefault();*/
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
		/*event.preventDefault();*/
		if(pageNum < 0) { 
			$(".page .title-screen").hide(); 
			$(".controls").show();
		}

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
		$(".page .instructions").hide();
		$(".page .credits").hide();
	};

	function updatePage() {
		switch(page.pageType) {
			case "image":
				hidePageElements();
				$(".page img").attr("src", pages[pageNum].src);
				$(".page img").fadeIn();
				console.log("page type: image", pageNum);
				break;
			case "command":
				hidePageElements();
				$(".page .command").html(pages[pageNum].command);
				$(".page .command").fadeIn();
				console.log("page type: command", pageNum);
				break;	
			case "instructions":
				hidePageElements();
				$(".page .instructions").html(pages[pageNum].text);
				$(".page .instructions").fadeIn();
				console.log("page type: instructions", pageNum);
				break;
			case "credits":
				hidePageElements();
				$(".page .credits").fadeIn();
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
		pageType: "instructions",
		text: "<h2>COMMAND RUSH</h2><p>For the duration of this encounter you may directly command <span class='keyword'>any</span> party member.</p>"			
	},
	{
		pageType: "command",
		command: "<p><span class='keyword'>Everyone</span>: Put as much distance between you and the window. Maybe head for the hall if possible.</p>"
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
		command: "<p><span class='keyword'>Everyone</span>: Back away from the window. Test out the entity's abilities by throwing a pillow at them!</p>"
	},	
	{
		pageType: "image",
		src: "images/8.png"		
	},
	{
		pageType: "image",
		src: "images/9.png"		
	},	
	{
		pageType: "image",
		src: "images/10.png"		
	},
	{
		pageType: "image",
		src: "images/11.png"		
	},	
	{
		pageType: "image",
		src: "images/12.png"		
	},
	{
		pageType: "image",
		src: "images/13.png"		
	},	
	{
		pageType: "image",
		src: "images/14.png"		
	},
	{
		pageType: "command",
		command: "<p><span class='keyword'>Weiss</span>: Check who that might be real quick! We may assume its Ren, but you can never be too safe.</p>"	
	},	
	{
		pageType: "image",
		src: "images/16.png"		
	},
	{
		pageType: "image",
		src: "images/17.png"		
	},	
	{
		pageType: "image",
		src: "images/18.png"		
	},
	{
		pageType: "image",
		src: "images/19.png"		
	},
	{
		pageType: "command",
		command: "<p><span class='keyword'>Everyone</span>: Quick inventory check.</p>"	
	},	
	{
		pageType: "image",
		src: "images/21.png"		
	},
	{
		pageType: "instructions",
		text: "<h2>COMMAND RUSH CONTINUES</h2><p>You may still directly command any party member. Please remeber to specify who you are directing.</p>"			
	},
	{
		pageType: "command",
		command: "<p><span class='keyword'>Pyrrha</span> and <span class='keyword'>Velvet</span>: Pull a sick maneuver where <span class='keyword'>Pyrrha</span> tosses <span class='keyword'>Velvet</span> behind <span class='keyword'>Blitz Blockade</span> so <span class='keyword'>Velvet</span> can use...</p>"			
	},	
	{
		pageType: "command",
		command: "<p>...<span class='keyword'>Red Death Killer Heels</span> to slice up <span class='keyword'>Blitz Blockade</span>'s leg ligaments.</p>"
	},
	{
		pageType: "image",
		src: "images/24.png"		
	},
	{
		pageType: "image",
		src: "images/25.png"		
	},
	{
		pageType: "image",
		src: "images/26.png"		
	},
	{
		pageType: "image",
		src: "images/27.png"		
	},	
	{
		pageType: "image",
		src: "images/28.png"		
	},
	{
		pageType: "image",
		src: "images/29.png"		
	},
	{
		pageType: "image",
		src: "images/30.png"		
	},
	{
		pageType: "image",
		src: "images/31.png"		
	},	
	{
		pageType: "image",
		src: "images/32.png"		
	},
	{
		pageType: "image",
		src: "images/33.png"		
	},
	{
		pageType: "image",
		src: "images/34.png"		
	},
	{
		pageType: "command",
		command: "<p><span class='keyword'>Yang</span> and <span class='keyword'>Cardin</span>: When it's distracted, knock it on its back with <span class='keyword'>Mace</span> and <span class='keyword'>Ember Celica</span> so the...</p>"		
	},	
	{
		pageType: "command",
		command: "<p>...blood jets are less of a threat and try to pin it down.</p>"		
	},
	{
		pageType: "image",
		src: "images/36.png"		
	},
	{
		pageType: "image",
		src: "images/37.png"		
	},	
	{
		pageType: "image",
		src: "images/38.png"		
	},
	{
		pageType: "image",
		src: "images/39.png"		
	},	
	{
		pageType: "image",
		src: "images/40.png"		
	},
	{
		pageType: "image",
		src: "images/41.png"		
	},	
	{
		pageType: "image",
		src: "images/42.png"		
	},
	{
		pageType: "command",
		command: "<p><span class='keyword'>Blake</span>: Try to restrain the entity's arms. Maybe with <span class='keyword'>Gambol Shroud</span>.</p>"	
	},	
	{
		pageType: "image",
		src: "images/44.png"		
	},
	{
		pageType: "command",
		command: "<p><span class='keyword'>Yang</span>: Slam that guy into the ground using <span class='keyword'>Ember Celiclaw</span>, making sure his blood spurters are facing the wall.</p>"	
	},
	{
		pageType: "image",
		src: "images/46.png"		
	},
	{
		pageType: "image",
		src: "images/47.png"		
	},
	{
		pageType: "image",
		src: "images/48.png"		
	},
	{
		pageType: "image",
		src: "images/49.png"		
	},
	{
		pageType: "image",
		src: "images/50.png"		
	},
	{
		pageType: "image",
		src: "images/51.png"		
	},
	{
		pageType: "credits"
	}
];