function end() {
	setTimeout(function() {musicGame.pause()}, 1000);
	hideStats();
	endHoles();
	setTimeout(showHighscores, 1000);
	
	blinkInput();
	document.getElementById("finalButton").onclick = finalButton;
}

function hideHoles(className) {
	var holes = document.getElementsByClassName(className);
	
	for (var i = 0; i < holes.length; i++) {
		holes[i].src = "images/hole.png";
	}
}

//this changes the games hide stats visibility to not be visible
function hideStats() {
	document.getElementsByClassName("gameStats")[0].style.visibility = "hidden";
	document.getElementsByClassName("gameStats")[1].style.visibility = "hidden";
}


//this shows the highscores
function showHighscores() {
	document.getElementById("end").style.display = "initial";
	document.getElementsByClassName("highScoreChart")[0].style.display = "initial";
	document.getElementsByClassName("userScore")[0].innerHTML = currentScoreGame;
	document.getElementsByClassName("userScore")[1].innerHTML = currentScoreGame;
	populateScores();
}

//this makes the holes stop running
function endHoles() {
	for (var i = 0; i < holes.length; i++) {
		holes[i].endHole();
	}
}

//this is the functionality for the button that resets the game
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
	
	//this checks if the string is valid for username
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

//this causes the placeholder in the text input to blink
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

//this populates the hoghscore chart
function populateScores() {
	
	$(function(){
		
		var $highScores = $("#topTen");
		
		$.ajax({
			type: "GET",
			url: "data/highScores.json",
			dataType: "json",
			success: function(highScores) {
				$.each(highScores, function(i, score) {
					$highScores.append("<div class='topTenItem'>" + score.name + "</div>" + "<div class='topTenItem'>" + score.score + "</div>");
				});
			}
	
		}).fail(function ( jqXHR, textStatus, errorThrown ) {
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);
		});
	});
}

//this is used to replace class names
(function ($) {
    $.fn.replaceClass = function (pFromClass, pToClass) {
        return this.removeClass(pFromClass).addClass(pToClass);
    };
}(jQuery));