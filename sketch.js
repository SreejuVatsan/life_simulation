var c1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	c1 = new Creature_1();
	// c1.live();
	// console.log(c1.id);
	// console.log(c1.life);
	// c1.die();
	// console.log(c1.life);
}

function draw() {
	background(235,100,100);
	c1.live();

}