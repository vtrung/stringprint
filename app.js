
$(document).ready(function() {
	var CURRENT_STRING_TO_PRINT = "Is this what you want, Brian?!\nCause this is what I built\n";
	var stringIndex = 0;
	
	//Print partial string to 'p' tag in html. index, end position of substring
	function printStringIndex(string, index){
		var letter = string.substring(0,index);
		$('p').text(letter + "_");
	}

	function checkSubStringPosition() {
		//run until whole string has been printed
		if(stringIndex < CURRENT_STRING_TO_PRINT.length) {
			printStringIndex(CURRENT_STRING_TO_PRINT, stringIndex);
			stringIndex++;
		}
	}

	function printSubString() {
		//Start animation on document ready, refresh 70/1000 sec
		setInterval(checkSubStringPosition, 70);
	}

	function resetSubString() {
		$('p').empty();
		stringIndex = 0;
		var customStringValue = $("input").val();
		if (customStringValue !== "") {
			CURRENT_STRING_TO_PRINT = customStringValue
			$("input").val("");
		}
		// reset interval thread
		clearInterval(printSubString);
	}

	printSubString();

	$('button').click(resetSubString);
});

