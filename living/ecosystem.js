class Ecosystem{
	constructor(limit){
		this.creature_1 = [];
		this.limit = limit;
	}

	sustain(){
		this.creature_1_thrive();
	}

	creature_1_thrive(){
		if(this.creature_1.length < this.limit){
			this.addCreature(this.creature_1);
		}
		for (var i = this.creature_1.length - 1; i >= 0; i--) {
			let c = this.creature_1[i];
			if(c.isAlive()){
				c.live();
			}
			else{
				this.removeCreature(i, this.creature_1);
			}
			
		}
	}
	addCreature(creature_list){
		creature_list.push(new Creature_1());
	}
	removeCreature(index, creature_list){
		creature_list.splice(index, 1);
	}
}
