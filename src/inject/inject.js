chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. QuizTeX is working on this site.");
		// ----------------------------------------------------------

		var parse = /\$.+\$/;

		$('.qDef').each(function(i, obj) {
    		var content = $(obj).text().match(parse);
    		if(content)
    			content = content[0]
    		if(content){
    			content = content.substring(1, content.length-1);
    			$(obj).html("<img src='http://latex.codecogs.com/gif.latex?\\LARGE&space;" + content + "' title='Equation' />");
			}
		});

		$('.qWord').each(function(i, obj) {
    		var content = $(obj).text().match(parse);
    		if(content)
    			content = content[0]
    		if(content){
    			content = content.substring(1, content.length-1);
    			$(obj).html("<img src='http://latex.codecogs.com/gif.latex?\\LARGE&space;" + content + "' title='Equation' />");
			}
		});

	}
	}, 10);
});