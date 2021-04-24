//on load start flashing the start text
window.onload = startMenu;

//this method is the main start method it starts all the mobile content on the start
function startMenu() {
	blinkStart();
	setInterval(cycleHoles, 800);
	
	//this randomly switches the hole to show new diglett position never will have more then 1
	function cycleHoles() {
		var holes = document.getElementsByClassName("startHole");
		var run = true;
		var random;
		
		for (var i = 0; i < holes.length; i++) {
			
			if (holes[i].src === "file:///C:/Users/eewzp/Documents/GitHub/wack_a_mon/images/diglett.png") {
				holes[i].src = "images/hole.png";
				//there is a diglet and the random should not run
				run = false;
			} else if (holes[i].src === "file:///C:/Users/eewzp/Documents/GitHub/wack_a_mon/images/diglettPeak.png") {
				
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
			holes[random].src = "images/diglettPeak.png";
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
