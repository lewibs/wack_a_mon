function Hole(id) {
	//CONSTATNTS
	//this is the low probability
	const low = 1;
	
	//this is the med probability
	const med = 15;
	
	//this is the high probability
	const high = 30;
	
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
	
	//FIELDS
	//this is the currentState. initializes as hole state
	this.switchState = hole.changeState;

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
			console.log(randomNum);
			randomNum = 5;
			if (randomNum <= low) {
				this.switchState = drilbur.changeState;
				this.setSrc("images/drilbur.png");
			} else if (randomNum <= med) {
				this.setSrc("images/diglettPeak.png");
				peak.toPeakState();
			} else if (randomNum <= high) {
				this.switchState = diglett.changeState;
				this.setSrc("images/diglett.png");
			}
		}
	}
	
	function PeakState() {
		//this is used for when the state is changed into this
		this.toPeakState = function() {
			this.switchState = peak.changeState;
		}
		
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
			console.log(stateName);
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
			console.log(stateName);
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
			console.log(stateName);
		}
	}
	
}