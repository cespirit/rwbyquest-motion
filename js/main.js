$(document).ready(function() {
	var started = false;
	var autoPlayOn = false;
	var pageNum = -1;	
	var page;
	var pageType;	
	var pageElem = $("#page");
	var lastPage = pages.length - 1;

	var updatePage = function() {
		
		$("#page").css("display", "block");  // TODO only when press start
		
		page = pages[pageNum];

		if(page) {
			pageType = page.pageType;
			if(pageType) {
				switch(pageType) {
					case "instructions":
						console.log("Instructions page");
						$("#page").html("<div class='instructions'>" + page.instructions + "</div>");
						break;
					case "command":
						console.log("Command page");
						$("#page").html("<div class='command'>" + page.command + "</div>");
						break;
					case "image":
						console.log("Image page");						
						$("#page").html("<img class='panel-img' alt='' src='"+ page.src +"'/>");
						break;
					case "credits":
						console.log("Credits page");
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
		(pageNum > lastPage) ? --pageNum : updatePage();	
	};

	var togglePlay = function() {
		var togglePlayBtn = $(this).find("i");
		var pressedPlay;
		togglePlayBtn.toggleClass("fa-play fa-pause");
		pressedPlay = togglePlayBtn.hasClass("fa-pause");

		if(pressedPlay) {
			autoPlayOn = true;	
			console.log("Pressed to PLAY");				
		}
		else {
			autoPlayOn = false;
			console.log("Pressed to PAUSE");
		}
	}

	$("#btnStart").click(function(){
		console.log("Clicked START");		
		$("#titleScreen").css("display", "none");
		$("#controls").css("display", "block");
		started = true;
		nextPage();
	});

	$("#togglePlay").click(togglePlay);	

	$("#prev").on("click", function(){
		prevPage();
	});			

	$("#next").on("click", function(){
		nextPage();
	}); 				
	
	$("body").keyup(function(event){
		if(started) {
			if(event.which === 37) {
				prevPage();
			}
			else if(event.which === 39) {
				nextPage();
			}
		}
	});	

});

var pages = [	
	{
		pageType: "instructions",
		instructions: "<h2>COMMAND RUSH</h2><p>For the duration of this encounter you may directly command <span class='keyword'>any</span> party member.</p>"			
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
	}/*,
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
		instructions: "<h2>COMMAND RUSH CONTINUES</h2><p>You may still directly command any party member. Please remember to specify who you are directing.</p>"			
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
		pageType: "instructions",
		instructions: "<p><span class='keyword'>To be continued...</span></p>"			
	}*/,
	{
		pageType: "credits"
	}
];