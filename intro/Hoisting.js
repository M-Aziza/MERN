// // GIVEN
// console.log(example);
// var example = "I'm the example!";
// // AFTER HOISTING BY THE INTERPRETER
// // var example;
// console.log(example); // logs undefined
// // example = "I'm the example!";

// console.log(example);
// let example = "I'm the example!";    
// // AFTER HOISTING BY THE INTERPRETER
// console.log(example); // logs undefined
// ReferenceError: example is not defined



console.log(hello);                                   
var hello = 'world';  
// AFTER HOISTING BY THE INTERPRETER
// console.log(hello);   // logs world 


var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// AFTER HOISTING BY THE INTERPRETER
// magnet

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// super cool


var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER

// chicken
// half-chicken



// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// AFTER HOISTING BY THE INTERPRETER
// error
// TypeError: mean is not a function


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
// rock
// r&b
// disco


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
// san jose
// seattle
// burbank
// san jose



console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// AFTER HOISTING BY THE INTERPRETER
// { name: 'Chicago', students: 65, hiring: true }
// TypeError: Assignment to constant variable.