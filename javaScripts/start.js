//cahnge
//on load start flashing the start text
window.onload = startMenu;

//start menu music
var musicMenu = new Audio("http://wackamon.lewibs.com/sounds/LittlerootTown8Bit.mp3");


//this method is the main start method it starts all the mobile content on the start
function startMenu() {
	
    musicMenu.play();
    
    
    var diglettImg = "http://wackamon.lewibs.com/images/diglett.png";
    var holeImg = "http://wackamon.lewibs.com/images/hole.png";
    var peakImg = "http://wackamon.lewibs.com/images/peak.png";
	
	//listener for starting click
	window.onclick = startGame;
	
	blinkStart();
	setInterval(cycleHoles, 800);
	
	//this randomly switches the hole to show new diglett position never will have more then 1
	function cycleHoles() {
		var holes = document.getElementsByClassName("startHole");
		var run = true;
		var random;
		
		for (var i = 0; i < holes.length; i++) {
			if (holes[i].src === diglettImg) {
				holes[i].src = holeImg;
				//there is a diglet and the random should not run
				run = false;
			} else if (holes[i].src === peakImg) {
				
				random = Math.floor(Math.random() * 2);
				
				if (random === 0) {
					holes[i].src = diglettImg;
					run = false;
				} else if (random === 1) {
					holes[i].src = holeImg;
				}
				
				//there is a peaking diglet and the random should not run
				run = false;
			}
		}
		
		if (run) {
			var random = Math.floor(Math.random() * 3);
			holes[random].src = peakImg;
		}
	}
	
	//this causes the click anywhere to start text to blink
	function blinkStart() {
	   var f = document.getElementById('clickStart');
	   setInterval(function() {
		  f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	   }, 850);
	}	
}