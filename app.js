
$(document).ready(function() {
	var aString = "Is this what you want, Brian?!\
	\nCause this is what I built\
	";
	
	//Set i as indicator of string position
	var i = 0;
	//Start animation on document ready, refresh 70/1000 sec
	animate = setInterval(
		function(){
			//run until whole string has been printed
			if(i < aString.length){
				printSubString(aString, i);
				i++;
			}
		} , 70);

	//Print partial string to 'p' tag in html. index, end position of substring
	function printSubString(text, index){
		var nString = text.substring(0,index);
		$('p').text(nString + "_");
	}

});

