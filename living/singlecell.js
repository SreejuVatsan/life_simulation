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
		this.xoffset = random(0, width);
		this.yoffset = random(0, height);
		this.x = 0;
		this.y = 0;
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
		this.width = 20;
		this.height = 10;
	}

	appear(x, y){
		ellipse(x, y, this.width, this.height)
	}

	move(){
		this.xoffset += 0.0006;
		this.yoffset += 0.0006;
		// console.log("offset: " + this.offset)
		this.x = noise(this.xoffset) * width;
		this.y = noise(this.yoffset) * height;
		// console.log("X: " + this.x + " --- Y: " + this.y);
		this.appear(this.x, this.y);
	}

	live(){
		if (this.life){
			// console.log("<" + this.id +".live>")
			this.move();
			if(int(random(0,1000)) == 11){
				this.die();
			}
		}
		
	}


}
