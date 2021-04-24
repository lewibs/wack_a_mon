function Hole(id) {
	//CONSTATNTS
	//this is the low probability
	const lowProp = 1;
	
	//this is the med probability
	const medProp = 15;
	
	//this is the high probability
	const highProp = 30;
	
	//this is the range of numbers that can be generated
	const maxProb = 100;
	
	//this is the element
	var el = document.getElementById(id);
	
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
	
	//this is the running var it is used to modify when a state changes
	var running = setInterval(switchState, timeout);

	//FUNCTIONS
	function updateHole(img, state) {
		switchState = state.changeState;
		el.src = img;
		clearInterval(running);
		running = setInterval(switchState, timeout); //timeout from game.js
	}

	//METHODS
	this.updateTime = function() {
		timeout /= 1.1;
	}
	
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
		//this is the name of the state;
		var stateName = "hole";
		
		//this gets the state name
		this.getName = function() {
			return stateName;
		}
		
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
			} else {
				updateHole(holeImg, hole);
			}
		}
	}
	
	function PeakState() {
		
		//this is the name of the state;
		var stateName = "peak";
		
		//this gets the state name
		this.getName = function() {
			return stateName;
		}
		
		//this has a few options
		//on hit it does nothing
		//if it does not hit the probability needed to go to diglett state it goes back to hole state
		this.changeState = function() {
			var randomNum = Math.floor(Math.random() * maxProb);
			if (randomNum <= highProp) {
				updateHole(diglettImg, diglett)
			} else {

			}
		}
	}
	
	function DrilburState() {
		//this is the name of the state;
		var stateName = "drilbur";
		
		//this gets the state name
		this.getName = function() {
			return stateName;
		}
		
		//this is the timeout specifically for drilbur
		//this has a few options
		//on a hit it goes into hole state and updates the user score
		//on a timeout it goes into the hole state
		this.changeState = function() {
			var drilburTimeout = timeout / 2;
		}
		
		
	}
	
	function DiglettState() {
		//this is the name of the state;
		var stateName = "diglett";
		
		//this gets the state name
		this.getName = function() {
			return stateName;
		}
		
		//this has a few options
		//on a hit it goes into hole state and updates the user score
		//on a timeout it goes into the hole state
		this.changeState = function() {
		}
	}
	
}