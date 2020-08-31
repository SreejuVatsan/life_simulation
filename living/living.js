
class Living{
	constructor(){
		this.life;
		this.movement;
	}

	isAlive(){
		return this.life ? true : false;
	}

	live(){
		this.life = true
	}

	die(){
		this.life = false
	}

	move(){};
}