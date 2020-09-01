let creatures = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for(let i=0; i < 50; i++){
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