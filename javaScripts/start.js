//on load start flashing the start text
window.onload = startMenu;


//this method is the main start method it starts all the mobile content on the start
function startMenu() {
	//start menu music
	musicMenu = new Audio("sounds/LittlerootTown8Bit.mp3");
	musicMenu.play();
	
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
			console.log("run?");
			if (holes[i].src === "images/diglett.png") {
				holes[i].src = "images/hole.png";
				//there is a diglet and the random should not run
				run = false;
			} else if (holes[i].src === "images/peak.png") {
				
				random = Math.floor(Math.random() * 2);
				
				if (random === 0) {
					holes[i].src = "images/diglett.png";
					run = false;
				} else if (random === 1) {
					holes[i].src = "images/hole.png";
				}
				
				//there is a peaking diglet and the random should not run
				run = false;
			}
		}
		
		if (run) {
			var random = Math.floor(Math.random() * 3);
			holes[random].src = "images/peak.png";
		}
	}
	
	//this causes the click anywhere to start text to blink
	function blinkStart() {
	   var f = document.getElementById('clickStart');
	   setInterval(function() {
		  f.style.display = (f.style.display == 'none' ? '' : 'none');
	   }, 850);
	}	
}
