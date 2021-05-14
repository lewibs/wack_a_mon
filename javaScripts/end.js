//GlobalVariable
var topTenScores; //if you wanna hack the game and give yourself a highscore this would be the place to do it;

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

//this populates the hoghscore char
function populateScores() {
	
	$(function(){
		
		var $topTen = $("#topTen");
		
		$.ajax({
			type: "GET",
			url: "data/highScores.json",
			dataType: "json",
			success: function(highScores) {
				topTenScores = highScores;
				
				if (topTenScores.length === 0) { //if there are no scores it loads this one and lets the current user be the first score
					    console.log("yup");
						$topTen.append("<input type='text' id='userInput' class='topTenItem' placeholder='|'><div class='topTenItem userScore'>" + currentScoreGame + "</div>");
				} else if (topTenScores.length === 1) {
					if (currentScoreGame > topTenScores) {
						$topTen.append("<div class='topTenItem'>" + topTenScores[0].name + "</div>" + "<div class='topTenItem'>" + topTenScores[0].score + "</div>");
						$topTen.append("<input type='text' id='userInput' class='topTenItem' placeholder='|'><div class='topTenItem userScore'>" + currentScoreGame + "</div>");
					} else {
						$topTen.append("<input type='text' id='userInput' class='topTenItem' placeholder='|'><div class='topTenItem userScore'>" + currentScoreGame + "</div>");
						$topTen.append("<div class='topTenItem'>" + topTenScores[0].name + "</div>" + "<div class='topTenItem'>" + topTenScores[0].score + "</div>");
					}	
				} else {	
					for (var i = 0; i < topTenScores.length; i++) {
						if (currentScoreGame > topTenScores[i].score) { 
							//move the list down and go in the slot of i
							//check the name and score
							var front = topTenScores.splice(i);
						}
					}
					
					//add currentScoreGame to the correct spot in topTenScores with the name "addPlayerName"
					//go through all the elements and if it says add player name in name then give the user input html instead of the highscore html
					//stop at 10 and remove the 11th (once you get the player name add it to the correct spot in the list and then you can post that)
					
					//$.each(highScores, function(i, score) {
    	            //   $topTen.append("<div class='topTenItem'>" + score.name + "</div>" + "<div class='topTenItem'>" + score.score + "</div>");
    				//});
				}
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
