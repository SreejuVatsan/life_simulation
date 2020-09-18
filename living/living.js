
class Living{
	static age;
	static movement;
	static position;
	static velocity;
	static acceleration;

	constructor(){
		this.life;
		// this.movement;
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