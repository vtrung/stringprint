
$(document).ready(function() {
	var aString = "Is this what you want, Brian?!\nCause this is what I built\n";
	var subStringIndex = 0;
	
	//Print partial string to 'p' tag in html. index, end position of substring
	function printStringIndex(text, index){
		var nString = text.substring(0,index);
		$('p').text(nString + "_");
	}

	function checkSubStringPosition() {
		//run until whole string has been printed
		if(subStringIndex < aString.length) {
			printStringIndex(aString, subStringIndex);
			subStringIndex++;
		}
	}

	function printSubString() {
		//Start animation on document ready, refresh 70/1000 sec
		setInterval(checkSubStringPosition, 70);
	}

	function resetSubString() {
		$('p').empty();
		subStringIndex = 0;
		printSubString();
	}

	printSubString();

	$('button').click(resetSubString);
});

