class Ninja{

    constructor(name){
        this.name=name;
        this.health = 0;
        this.speed = 3;
        this.strength=3;
    }

    sayName() {
        console.log(this.name)
    }
    showStats(){
        console.log(`Ninja name ${this.name} , Heath ${this.health} , The Speed ${this.speed} , and the Strength ${this.strength}`)
    }
    drinkSake(){
        this.health  +=10;
        console.log(`Ninja name ${this.name} , Heath ${this.health} , The Speed ${this.speed} , and the Strength ${this.strength}`)
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();