function end() {
	setTimeout(function() {musicGame.pause()}, 1000);
	hideStats();
	endHoles();
	setTimeout(showHighscores, 1000);
	//$(".userScore").load("test.txt", currentScoreGame, function() {alert("yo")});
	
	blinkInput();
	document.getElementById("finalButton").onclick = finalButton;
}

function hideHoles(className) {
	var holes = document.getElementsByClassName(className);
	
	for (var i = 0; i < holes.length; i++) {
		holes[i].src = "images/hole.png";
	}
}

function hideStats() {
	document.getElementsByClassName("gameStats")[0].style.visibility = "hidden";
	document.getElementsByClassName("gameStats")[1].style.visibility = "hidden";
}

function showHighscores() {
	document.getElementById("end").style.display = "initial";
	document.getElementsByClassName("highScoreChart")[0].style.display = "initial";
	document.getElementsByClassName("userScore")[0].innerHTML = currentScoreGame;
	document.getElementsByClassName("userScore")[1].innerHTML = currentScoreGame;
}

function endHoles() {
	for (var i = 0; i < holes.length; i++) {
		holes[i].endHole();
	}
}

function finalButton() {
	var input = document.getElementById('userInput').value;
	var warning = document.getElementById('warning');
	
	if (input === "") {
		warning.style.visibility = "visible";
		warning.innerHTML = "ENTER INITIALS";
	} else if ( !validInit(input) ) {
		warning.style.visibility = "visible";
		warning.innerHTML = "INITIALS MUST BE THREE CHARACTERS";
	} else {
		location.reload();
	}
	
	function validInit(str) {
		var letter;
		if (str.length === 3) {
			
			for (var i = 0; i < 3; i++) {
				letter = str.charCodeAt(i);
				
				if (!((letter > 64 && letter < 91)||(letter > 96 && letter < 123)||(letter > 127 && letter < 155)||(letter > 159 && letter < 166))) {
					return false;
				}
				
			}
			
			return true;
			
		} else {
			return false;
		}
	}
}

//this causes the click anywhere to start text to blink
	function blinkInput() {
	   var f = document.getElementById('userInput');
	   setInterval(function() {
		  if (f.placeholder == "") {
			  f.placeholder = "|";
		  } else {
			  f.placeholder = "";
		  }
	   }, 850);
	}	