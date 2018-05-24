const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Primitives
// Primitives are every single thing in Javascript except for Objetcs
// Youre slowly learning that the term 'object' refers to a LOT of things
// Arrays are objects
// Objects are objects
// Functions are objects
// Dates are objects
// Theres a wide variety of objects.

// With primitives its kind of the things we might describe as 'simple' - or - 'building blocks'

// string
// number
// boolean
// undefined
// null
// ES6: Symbols

// "Primitives are immutable" - Eliot

// This isnt allowed because PHILOSOPHICALLY SPEAKING: True is always true.
// 2 is always 2.
// Universal truths try to hold true in code.

// Any value that cant be two things but always has to be one, is a primitive.

// true = false;

let aNum = 5;

aNum = 'not 5';

// I just changed 5.

// No (unanimous)

// I changed aNum
// What really is aNum?

// Lets circle back to that question.

let aStr = 'something is ';
let anotherNum = 10;

anotherNum = aStr + anotherNum;
// console.log(anotherNum);

// I have not changed any inherient values of a primitive even when I do this. Concatenation is not us changing primitives, it is us building a new value and storing somewhere.
// That there are a lot of complex rules around what happens when we try to put two immutable values together. Coercion.
// This is all worth thinking about, because a lot of those rules have to do with this policy of immutability.

// Objects
// We know objects are stored at variables
// We also know objects can comprise themselves of a variety of different values
// Are objects also immutable?

let someObj = {
  Monique: 'Razer Headphones',
  Bianca: 'UBS Shirt',
};

// console.log(someObj);

someObj.Tony = 'White Headphones';

// console.log(someObj);

someObj.Monique = false;

// console.log(someObj);

delete someObj.Bianca;

// console.log(someObj);

// I am not reassing anything - I am ALWAYS referencing the same thing which is called 'someObj'

// So we now know that Objects are not immutable. And, that we can ALWAYS access their present values by using the same name. In this case someObj.

// We can store the values of primitives before reassigning the variable they originally lived in:

let someThing = 'hi';
let otherThing = someThing;

someThing = 'bye';

// console.log(someThing);
// console.log(otherThing);

// Left hand vs right hand
// We can reassing a left hand thing to a new right hand thing without affecting the right hand side.
// Here we change the left hand of something to another value ('bye') - but otherThings right hand side continued to look at 'hi' with no problems.

// What really is assignment?

// Pointers/References

// When we declare a variable what we learned during my scope lesson is that left hand sides of operations are us asking for memory.

// When we say:

// let someMemory;

// Even if we put nothing after it, and have no assignment, we have asked for memory none the less.
// Memory is not magic. Memory is a real place in the real world on your very real computer. A specific place.

// That place is called a memory address.

// let someMemory;

// Javascript says ok, you want memory for a thing, and you want me to always know where that memory is by the name 'someMemory'. Let me go get you some memory.

let someMemory = '0x120978123';

// Ok then at a later time we say:

someMemory = 'pancakes';

// Whats really happening here is that javascript is making an association.

// let someMemory = '0x120978123';
// At...
// '0x120978123' = 'pancakes';

// let someMemory => '0x120978123' => 'pancakes';
// when you ask for someMemory the variable it comes right back around
// you <= someMemory <= '0x120978123' <= 'pancakes'

// In lower level languages, this is exactly what we do. We have to actually declare what specific space on a computer. And remember it.
// Thats what languages like C and Assembly do. Theyres no abstraction.
// In high level languages (javascript) - our language does all this for us, because well, do you want to do that?

// Weve spoken about primitives being immutable.

// Well lets think about immutability for a second

// how many 1's are there in existence?
// how many true's are there in existence?

// 1 of each

// Its no different to computers.

// On your computer right now there is 1 very specific location that understands what '1' is. Just 1 thats it.

// It begs the following question:

let oneOne = 1;
let twoOne = 1;

// 1 is not two different things, and we all agree it exists only once on each computer
// But it DOES EXIST SOMEWHERE.

// 0x0 = 0
// 0x1 = 1

// oneOne => 0x123 => 0x1
// twoOne => 0x124 => 0x1

twoOne = 2;

// oneOne => 0x123 => 0x1
// OLD
// twoOne => 0x124 => 0x1
// NEW
// twoOne => 0x124 => 0x2

// Every single primitive exists in one place. true exists in one place. false exists in one place. etc, etc.
// When we assign variables we are telling them where to look for certain things.

// Now, everything is pretty good right now... Until some ass said he wanted objects.
// Now this whole process got a whole lot more complicated.

// Were learning that computers are really just lots of different memory addresses looking at other memory addresses (pretty boring), if thats the case, then what are objects?

// Objects, are groups of memory addresses that point at any other memory address.

// const firstObj = {
//   name: 'first obj',
// };

// firstObj => 0x128 => (no longer points to some known value like 1, we now point to the unknown value we just created)
// What do we call a value we just created to point at another memory address? A variable. Were creating variables within variables.

// firstObj => 0x128 (first obj address) => 0x129 ({ name: 'first obj' }) => 0x130 (name) => 0x131 ('first obj')

// Just a memory address, has no real value implicitly
// const someObj = {};

// Theres no limit to this. We can point at addresses for thousands and thousands of times in a row. What we call a memory address that points at another memory address that IS NOT AN IMPLICIT VALUE: a reference
// References are what we call locations that point at locations

// Why are objects not immutable?
// firstObj => 0x128 (first obj address) => 0x129 ({ name: 'first obj' }) => 0x130 (name) => 0x131 ('first obj')
let firstObj = {
  name: 'first obj',
};

firstObj.name = 'bob';
// firstObj => 0x128 (first obj address) => 0x129 ({ name: 'first obj' }) => 0x130 (name) => 0x132 ('bob')
// console.log(firstObj.name);
// Above works because its the same address as before i reassigned it

// Below will not because i break the chain
// firstObj => 0x128 (first obj address) => 0x133 ({ notName: 'not bob' })
firstObj = { notName: 'not bob' };
// console.log(firstObj.notName);

// Everything has felt super abstract so far... how does this affect me?

// Slice

// what even is slice?
// We were taught that slice is a way to copy arrays.

// const someArray = [1, 2, 3, 4, 5];
// // This is the same array
// // const anotherArray = someArray;
// // Below is a copy
// const anotherArray = someArray.slice();

// someArray[2] = 'UH OH!!!!!!!';
// // someArray => 0x1 => 0x3 => thatArray
// // anotherArray => 0x2 => 0x1 => 0x3 => thatArray
// // In short, both variables are looking AT THE EXACT SAME THING.
// // When i mutate either one of them, both show it, because both are the same thing.

// console.log(someArray);
// console.log(anotherArray);

// // Why was slice our saving grace?

// // Lets write slice.

const mySlice = (anArr) => {
  // Line 251
  // I declared an entirely new place in memory, which means that this CANT POSSIBLY BE THE OTHER ORIGINAL ARRAYS PLACE IN MEMORY
  const copyArray = [];

  for (let i = 0; i < anArr.length; ++i) {
    // Go through the array, take each of its elements, and store references to those in this new place in memory.
    const currentElem = anArr[i];

    // I am just pushing in every element. We have to trust that those elements are not references to other references. They have to be values.
    copyArray.push(currentElem);
  }

  // I then return this new place
  return copyArray;
};

const innerReference = ['scary stuff'];
const someArray = [1, 2, innerReference, 4, 5];
// This is the same array
// someArray => 0x1 => 0x3 => thatArray
// anotherArray => 0x2 => 0x1 => 0x3 => thatArray
// In short, both variables are looking AT THE EXACT SAME THING.
// When i mutate either one of them, both show it, because both are the same thing.
// const anotherArray = someArray;
// Below is a copy
// someArray => 0x1 => 0x3 => thatArray
// anotherArray => 0x2 => 0x4 => copyOfthatArray
const anotherArray = mySlice(someArray);

anotherArray[1] = 'UH OH!!!!!!!';
innerReference.push('yes it is');

// console.log(someArray);
// console.log(anotherArray);

// Slice isnt always a save. Its only a save in one very specific condition...
// That every element within that array is a primitive.

// References are not A BAD THING.
// This is desired behavior. We want to as programmers be able to refer to the same thing in two different places. Thats not an undesired ability. Right?

// The thing with references is that they can be hard to keep track of. References are something that will absolutely one hundred percent become the #1 source of errors on large projects. Because you never know how many things are impacted when you change a single thing that lots of things are looking at.

// We can think of the sun as a giant reference. If one of us damaged the sun, we would all feel the implications of that.
// If your stapler runs out of staples, a lot less people are impacted by that reference right?

// References are just a way for us to communicate between various places in a codebase, its a good thing when used with thought, and a terrifying thing when accidentally used without realizing it.

// References and Functions

// References dont just go away when we pass them into a function.

const modifyAThing = (aThing) => {
  aThing.modification = true;
};

const aObj = {
  name: 'obj',
};

modifyAThing(aObj);

// console.log(aObj);
// mutation - unintended side effects to data outside where we thought it would happen

const modifyAPrimitive = (aPrim) => {
  aPrim = 'liesss!';
}

const somePrim = 5;

modifyAPrimitive(somePrim);

// console.log(somePrim);









// What is object equality?

const objOne = { one: 1 };
const objTwo = { one: 1 };

// console.log(objOne === objTwo);
// If objects are just references, how do we compare equality between references?
// The answer is actually pretty easy to understand. Objects are only equal to each other if they point to the same memory address. A reference is only equal to itself in other words.

// console.log(objOne === objOne);

const objThree = objOne;

console.log(objThree === objOne);
