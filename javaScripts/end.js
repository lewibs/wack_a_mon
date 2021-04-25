function end() {
	hideStats();
	endHoles();
	setTimeout(showHighscores, 1000);
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
	document.getElementsByClassName("highScoreChart")[0].style.display = "initial";
	document.getElementById("yourScore").innerHTML = currentScoreGame;
}

function endHoles() {
	for (var i = 0; i < holes.length; i++) {
		holes[i].endHole();
	}
}