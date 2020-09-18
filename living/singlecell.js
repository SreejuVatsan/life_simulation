var SingleCellEnum = {
  CREATURE_1: 1,
  CREATURE_2: 2,
  properties: {
    1: {name: "Creature_1", code: "C1", max_life: 10},
    2: {name: "Creature_2", code: "C2", max_life: 20},
  }
};

class SingleCell extends Living{
	constructor(type){
		super();
		this.type = type
		this.id = this.getId();
		this.name = SingleCellEnum.properties[this.type].name;
		this.max_life = SingleCellEnum.properties[this.type].max_life;

		this.position = new createVector(random(0, width), random(0, height));
		// this.position = new createVector(width/2, height/2);
		this.velocity = new createVector(0, 0);
		this.acceleration = new createVector(0, 0);
		
		// console.log("X: " + this.x + " --- Y: " + this.y);
	}

	uniqueId(){
		// Thanks to: https://stackoverflow.com/a/53389398/13166240
		return ((Math.random()+3*Number.MIN_VALUE)/Math.PI).toString(36).slice(-5);
	}

	getId(){
		return SingleCellEnum.properties[this.type].code + this.uniqueId();
	}

	die(){
		console.log("<SingleCell.die>")
		this.life = false
	}
	
}

class Creature_1 extends SingleCell{
	constructor(){
		super(SingleCellEnum.CREATURE_1);
	
		this.phase = random(0,1000);
		// console.log("X: " + this.x + " --- Y: " + this.y);
	}

	shape(){
		
		beginShape();
		push();
		translate(this.position.x, this.position.y);
  		// noFill();
  		// noStroke();
  		for(let a = 0; a < TWO_PI; a+=1.1){
    		let x_offset = map(cos(a - this.phase), -1, 1, 0, 2);
    		let y_offset = map(sin(a + this.phase), -1, 1, 0, 2);
    		let r = map(noise(x_offset, y_offset), 0, 1, 10, 40);
    		let x = r * cos(a);
    		let y = r * sin(a);
    		vertex(x, y);
  		}
  		endShape(CLOSE);
  		pop();
  		this.phase += 0.005
	}

	appear(){
		this.shape();
	}

	move(){
		this.acceleration = p5.Vector.random2D();
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.velocity.limit(3);
		// console.log(this.id + " - Xoffset: " + this.xoffset + " Yoffset: " + this.yoffset)
		this.appear();
	}

	live(){
		if (this.life){
			// console.log("<" + this.id +".live>")
			this.move();
			if(int(random(0,20000)) == 11){
				this.die();
			}
		}
		
	}


}
