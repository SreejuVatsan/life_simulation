let ecosystem ;

function setup() {
	console.log("Width: " + windowWidth + " - Height: " + windowHeight)
	createCanvas(windowWidth, windowHeight);
	ecosystem = new Ecosystem(5);
}

function draw() {
	background(235,100,100);
	ecosystem.thrive();
}