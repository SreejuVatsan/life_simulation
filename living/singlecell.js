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
	}

	uniqueId(){
		// Thanks to: https://stackoverflow.com/a/53389398/13166240
		return ((Math.random()+3*Number.MIN_VALUE)/Math.PI).toString(36).slice(-5);
	}

	getId(){
		return SingleCellEnum.properties[this.type].code + this.uniqueId();
	}

	live(){
		console.log("<SingleCell.live>")
		this.life = true
	}

	die(){
		console.log("<SingleCell.die>")
		this.life = false
	}
	
}

class Creature_1 extends SingleCell{
	constructor(){
		super(SingleCellEnum.CREATURE_1);
	}

}