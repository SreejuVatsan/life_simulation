let creatures = [];

function setup() {
	console.log("Width: " + windowWidth + " - Height: " + windowHeight)
	createCanvas(windowWidth, windowHeight);
	for(let i=0; i < 15; i++){
		append(creatures, new Creature_1());
	}
}

function draw() {
	background(235,100,100);
	// console.log(creatures)
	for(let i = 0; i < creatures.length; i++){
		creatures[i].live();
	}
}