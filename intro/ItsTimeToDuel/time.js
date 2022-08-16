class Card{
    constructor(name,cost){
        this.name= name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name , cost, power, res){
        super(name,cost);
        this.power=power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power
    }
}

class Effect extends Card{
    constructor(name ,cost, text,stat,magnitude){
        super(name,cost);
        this.text= text;
        this.stat= stat;
        this.magnitude= magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat=="resilience"){
                target.res +=this.magnitude
            }else{
                target.power +=this.magnitude
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
    

}
//instance unit
var red = new Unit("Red Belt Ninja", 3,3,4);
var black = new Unit("Black Belt Ninja", 4,5,4);
console.log(red)
console.log(black)


//instance effect
var effect1 = new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience", +3)
var effect2 = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience", -2)
var effect3 = new Effect("Pair Programming",3,"increase target's power by 2","power", +2)

//Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
effect1.play(red)
console.log(red)

//Make an instance of "Unhandled Promise Rejection" and play iton "Red Belt Ninja"
effect2.play(red)
console.log(red)

//Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
effect3.play(red)
console.log(red)

//"Red Belt Ninja" uses the attack method on "Black Belt Ninja"
red.attack(black)
console.log(black)
