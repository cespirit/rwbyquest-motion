$.preloadImages = function(pages) {
	var page;
	for(var i = 0; i < pages.length; i++) {
		page = pages[i];
		if(page.pageType === "image") {
			$("<img />").attr("src", page.src);
		}
	}
};

$.preloadImages(content.pages);