//this is the js for the game

//this is used for the timeout for when something pops up
var timeout = 1000;


function startGame() {
	document.getElementById("game").style.display = "";
	document.getElementById("start").style.display = "none";
	document.getElementsByClassName("headerGame")[0].style.display = "initial"; //turns on the time
	document.getElementsByClassName("headerGame")[1].style.display = "initial"; //turns on the current score
	
	holes = getHoles("hole");
}

//this is used to get an array of holes
function getHoles(className) {
	var holes = document.getElementsByClassName(className);
	var holesObj = [];
	
	for (var i = 0; i < holes.length; i++) {
		holesObj[i] = new Hole(i);
	}
	
	return holesObj;
}