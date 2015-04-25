$.preloadImages = function(pages) {
	var page;
	var layers;
	for(var i = 0; i < pages.length; i++) {
		page = pages[i];
		if(page.pageType === "image") {
			$("<img />").attr("src", page.src);

			layers = page.layers;
			if(layers) {
				for(var j = 0; j < layers.length; j++) {
					$("<img />").attr("src", layers[j].src);
				}
			}
		}
	}
};

$.preloadImages(content.pages);