//this is the js for the game

//this is used for the timeout for when something pops up
var timeout = 2000;

//this is the timelimit for the game
var timeGame = 60000;
		
//this is the current score
var currentScoreGame = 0;

//game music
var musicGame = new Audio("sounds/PokemonTheme8Bit.mp3");

//this is the value for one second
const oneSecond = 1000;

function startGame() {
	musicMenu.pause();
	musicGame.play();
	window.onclick = null; //used to make sure that clicking does not restart the game
	timeHTML = document.getElementById("time");
	scoreHTML = document.getElementById("currentScore");
	highScoreHTML = document.getElementById("highScore");
	
	//SETUP
	document.getElementById("game").style.display = "";
	document.getElementById("start").style.display = "none";
	
	document.getElementById("homeHighScoreBox").style.display = "none"; //turns off the homescreen highscore
	document.getElementsByClassName("gameStats")[0].style.visibility = "visible";
	document.getElementsByClassName("gameStats")[1].style.visibility = "visible";
	
	//ANIMATION HERE
	holes = startAnimation();
	
	//end
	setTimeout(end, timeGame);
}

//FUNCTIONS
function startAnimation() {
	var holes = getHoles("hole");
	countDown();
	return holes;
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

//this is used to update the score by a specific value
function updateScore(value) {
	currentScoreGame += value;
	document.getElementById("currentScore").innerHTML = currentScoreGame;
}

//this is used to update the time and reduce how long the pokemon stay up
function updateTimeout() {
	timeout /= 1.043;
}

function countDown() {
	three();
	two();
	one();
	go();
	
	function three() {
		var img = document.getElementsByClassName("countDown");
			
		img[1].style.display = "initial";
		
		setTimeout(function() {
			img[1].style.display = "none";
		}, 1000);
	}
	
	function two() {
		var img = document.getElementsByClassName("countDown");
		
		setTimeout(function() {
			img[2].style.display = "initial";
		}, 1000);
		
		setTimeout(function() {
			img[2].style.display = "none";
		}, 2000);
	}
	
	function one() {
		var img = document.getElementsByClassName("countDown");
		
		setTimeout(function() {
			img[3].style.display = "initial";
		}, 2000);
		
		setTimeout(function() {
			img[3].style.display = "none";
		}, 3000);
	}
	
	function go() {
		var img = document.getElementsByClassName("countDown");
		
		setTimeout(function() {
			img[4].style.display = "initial";
		}, 3000);
		
		setTimeout(function() {
			img[4].style.display = "none";
		}, 4000);
	}
}





