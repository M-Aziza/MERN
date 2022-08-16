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


class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.wisdom=10;
        this.health = 200;
        this.speed = 10;
        this.strength=10;
    }
    speakWisdom(){
        console.log(`wisdom = ${this.wisdom}`);
        const drink = super.drinkSake();
        console.log(`What one programmer can do in one month, two programmers can do in two months.`)
    }

}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
