let SingleCellEnum = {
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
		this.scale = 0
		this.phase = random(0,1000);
		// console.log("X: " + this.x + " --- Y: " + this.y);
	}

	shape(){
		push();
		translate(this.position.x, this.position.y);
		beginShape();
  		// noFill();
  		// noStroke();
  		for(let a = 0; a < TWO_PI; a+=1.1){
    		let x_offset = map(cos(a - this.phase), -1, 1, 0, 2);
    		let y_offset = map(sin(a + this.phase), -1, 1, 0, 2);
    		let r = map(noise(x_offset, y_offset), 0, 1, 10, 40);
    		let x = r * cos(a) * this.scale;
    		let y = r * sin(a) * this.scale;
    		vertex(x, y);
  		}
  		endShape(CLOSE);
  		pop();
  		this.phase += 0.005
  		if(this.scale <= 1) {
  			this.scale += 0.2;
  		}
	}

	appear(){
		this.shape();
	}

	move(){
		this.acceleration = p5.Vector.random2D();
		this.acceleration.setMag(cos(this.phase) * 0.1);
		this.velocity.add(this.acceleration);
		this.velocity.limit(noise(this.phase));
		this.position.add(this.velocity);
		// console.log(this.id + " - Xoffset: " + this.xoffset + " Yoffset: " + this.yoffset)
		this.appear();
	}

	live(){
		if (this.life){
			if((int(random(0,1000)) == 1) || (this.max_life < 0)){
				this.die();
			}
		}
		this.move();
		this.max_life -= random(0.001, 0.009);
	}

}
