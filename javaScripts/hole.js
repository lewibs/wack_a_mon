function Hole(id) {
	//CONSTATNTS
	//this is the low probability
	const lowProp = 1;
	
	//this is the med probability
	const medProp = 5;
	
	//this is the high probability
	const highProp = 20;
	
	//this is the range of numbers that can be generated
	const maxProb = 100;
	
	//this is the value for a dribur hit
	const drilburHit = 3;
	
	//this is the value for a diglet hit
	const diglettHit = 1;
	
	//this is the element
	var el = document.getElementById(id);
	el.ontouchstart = listener;
	el.onclick = listener;
	
	//this is the preset for the hole state
	const hole = new HoleState();
	
	//this is the preset for the peak state
	const peak = new PeakState();
	
	//this is the preset for drilbur state
	const drilbur = new DrilburState();
	
	//this is the preset for the diglett state
	const diglett = new DiglettState();
	
	//this is the hole image
	const holeImg = "images/hole.png"
	
	//this is the peak image
	const peakImg = "images/peak.png"
	
	//this is the diglett image
	const diglettImg = "images/diglett.png"
	
	//this is the drilbur image
	const drilburImg = "images/drilbur.png"
	
	//this is the currentState. initializes as hole state
	var switchState = hole.changeState;
	
	//^^^^^^^^^this must go before this vvvvvvvvvvvv
	
	//this is the intervalHolder var it is used to modify when a state changes
	//setTimeout(function() {var intervalHolder = setInterval(switchState, timeout)}, 2250);
	var intervalHolder = setInterval(switchState, timeout + 2000);

	//this is the listener for the program if something is clicked on it is updated to true until the action is compleated
	var listenerGoBrr = false;
	
	//this is the timeout holder for when something returns back to hole
	var timeoutHolder;

	this.endHole = function() {
		clearInterval(intervalHolder);
	}


	//FUNCTIONS
	function updateHole(img, state) {
		switchState = state.changeState;
		el.src = img;
		clearInterval(intervalHolder);
		clearTimeout(timeoutHolder);
		
		intervalHolder = setInterval(switchState, timeout); //timeout from game.js
		if (img !== holeImg && img !== peakImg) {
			timeourHolder = setTimeout(toHole, timeout);
		}
	}
	
	function toHole() {
		switchState();
		updateHole(holeImg, hole)
		
	}
	
	//this is the wack function it wacks the pokemon
	function wack() {
		switchState();
		switchState = hole.changeState;
		el.src = holeImg;
		clearInterval(intervalHolder);
		intervalHolder = setInterval(switchState, timeout); //timeout from game.js
	}
	
	//this is the listener method it runs when a specific thing happens like something getting wacked and updates the listener to true runs the update state then resets the listener to false
	function listener() {
		listenerGoBrr = true;
		wack();
		listenerGoBrr = false;
	}

	//METHODS
	
	//this gets the id of the hole
	this.id = function() {
		return el.id;
	}
	
	//this gets the source of the file
	this.src = function() {
		return el.src;
	}
	
	this.setSrc = function(src) {
		el.src = src;
	}
	
	//THESE ARE THE STATES
	
	//this is the hole state
	function HoleState() {
		//this has a few options
		//on hit it remains in hole state
		//on high random chance it goes to diglet state
		//on low random chance it goes to drilbur state
		//on medium random chance it goes to peak state
		this.changeState = function() {
			var randomNum = Math.floor(Math.random() * maxProb);
			if (randomNum <= lowProp) {
				updateHole(drilburImg, drilbur);
			} else if (randomNum <= medProp) {
				updateHole(peakImg, peak);
			} else if (randomNum <= highProp) {
				updateHole(diglettImg, diglett);
			}
		}
	}
	
	function PeakState() {
		//this has a few options
		//on hit it does nothing
		//if it does not hit the probability needed to go to diglett state it goes back to hole state
		this.changeState = function() {
			var randomNum = Math.floor(Math.random() * maxProb);

			if (randomNum <= maxProb * 0.40) {
				updateHole(diglettImg, diglett)
			} else {
				updateHole(holeImg, hole)
			}
		}
	}
	
	function DrilburState() {		
		//this is the timeout specifically for drilbur
		//this has a few options
		//on a hit it goes into hole state and updates the user score
		//on a timeout it goes into the hole state
		this.changeState = function() {
			if (listenerGoBrr) {
				updateScore(drilburHit);
			}
		}	
	}
	
	function DiglettState() {
		//this has a few options
		//on a hit it goes into hole state and updates the user score
		//on a timeout it goes into the hole state
		this.changeState = function() {
			if (listenerGoBrr) {
				updateScore(diglettHit);
				updateTimeout();
			}
		}
	}
	
}