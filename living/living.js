
class Living{
	constructor(){
		this.life;
		this.movement;
		this.birth();
	}

	isAlive(){
		return this.life ? true : false;
	}

	birth(){
		this.life = true;
	}

	die(){
		this.life = false;
	}

	// Abstract methods.
	live(){}
	eat(){}
	evolve(){}
}