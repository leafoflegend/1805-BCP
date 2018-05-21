const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);








// let someVar = 'a value';

// console.log(someVar);

// Does this work? - YES

// function logSomeVar () {
//   console.log(someVar);
// }

// logSomeVar();

// Does this work? - YES

// function logAVar () {
//   let aVar = 'a var';

//   console.log(aVar);
// }

// logAVar();

// Does this work? - YES

// function oneFunc () {
//   let aVar = 'a var'; // doesnt return the variable

//   return aVar;
// }

// oneFunc(); // store a var here

// function twoFunc () {
//   console.log(aVar); // then we refer to it here
// }

// twoFunc();

// This is the first problem in which there are multiple scopes.
// Every single function you write in javascript creates its own scope. Anything that happens inside a function cannot be seen or used from anywhere outside that function.
// Think about the curly braces of a function body as a wall. (Were going to change it from a wall to something else in a little).

// What is the purpose of this?
// We want to be able to contain data to areas where it is pertinent. Data should be able to be ENCAPSULATED and kept in areas where it is used, and not be able to be referred to outside of those areas.
// Encapsulation is a big deal for best practices. The simple version is like you would hopefully keep your apartment/house. We keep food in a kitchen. We keep vacuums in a closet. We keep a car in a driveway. Why?
// The organization of data helps us structure our code in a way where we dont have collisions amongst responsibilites. Lets say we have two functions. One is supposed to store a name and log it out. Another, is always supposed to say the same name no matter what you give it.

// let name = 'Eliot';

// function sayPassedInName (/* name */) {
//   console.log(name);
  // runtime: Hey compiler do you know anything about a variable called name?
  // compiler: No, it doesnt seem to be in your function body.
  // runtime: Can you check the next scope?
  // With arg uncommented:
  // compiler: Oh, it looks like you have an argument that goes by that name.
  // runtime: Ok, can you give that to me?
  // With arg commented:
  // compiler: Oh, its not an argument that youre being given.
  // runtime: aww shucks, well, can you look anywhere else?
  // Earlier, I called a functions boundary a wall - that wasnt a great term, its more like a one way mirror that you can always look out of from the inside, but never into from the outside.
  // compiler: It looks like youre running inside of a file where there is a variable called name at the 'root' level. (Root is not the highest level, but it is the highest level that YOU THE PROGRAMMER can directly manipulate)
  // runtime: Ok, well this programmer must be referring to that, so ill take that please.
  // compiler: ok, here it is.

  // Computers try their best to be as non-greedy as possible. The ideal solution for this computer was to look as close as possible. Like we would as a lazy person. It then had to have 4 follow up conversations to eventually arrive at something.

  // What if it doesnt find the thing youre looking for?
  // One option is a reference error: This happens when we are READING a value.
  // What about if we try to WRITE a value outside our scope?
// }

// function saySameName () {
//   console.log(name);
// }

// sayPassedInName('Stacy');
// saySameName();

// I purposefully caused whats called a 'namespace collision'. This is extremely common with certain variable names: 'name' certainly being amont them. Who can think others? 
// Value?
// sum?
// string?
// num?

// We want the ability to reuse the same name in different contexts. So, to have this we need to be able to have these names live inside of some special dare i say: 'scope'

// Writing Values to Other Scopes

// let sum = 0;

// function setToOne () {
// // let / var / const

//   sum = 1;

//   console.log(sum);
// }

// setToOne();

// We just interacted with the Global Scope.

// Dont use the global scope. You have no idea what the implications of putting something there are.

// There have been 5ish acceptable times in Javascript history someone has used the global scope, all 5 of those things are a pretty big deal:
// React - The most popular web framework of the 21st century
// Angular - Googles version of that
// jQuery - The thing that made the internet work the way you know
// window - The thing that stores all your data
// document - The literal object referring the the webpage youre on

// A: Did a lot of research and made sure the name they chose wasnt being used by any other thing
// B: Built things that changed the fabric of the internet as we know it.

// Using the global scope is just a really easy way to lose track of where anything is.

// ES6: Block Scope

// So, it used to be true that the only way scope was created was when we created a new function. That is not the case anymore.

// You've been using a word I told you was the same as var. let
// Its not. The reason is simple: It is the magic word that introduces block scope. What do you mean block scope?

// Example:

// Write a function that returns an array of functions that log the index they are in in the array
// So given arrayLogger(5) - I would get an array === [f(0), f(1), f(2), f(3), f(4)] - where if i called any index i would get the proper console.log

// function arrayLogger (ceiling) {
//   let arrayOfFuncs = [];

//   for (let i = 0; i < ceiling; ++i) {
//     arrayOfFuncs.push(function () {
//       console.log(i);
//     })
//   }

//   return arrayOfFuncs;
// }

// let funcArray = arrayLogger(5);

// console.log(funcArray);
// funcArray[0]();
// funcArray[1]();
// funcArray[2]();
// funcArray[3]();

// Block Scope means that anytime we say let - it creates an entirely new scope inside of whatever curly braces its within or that it infers to be within (as in the case above with a for loops curly brace);

// if (true) {
//   let thing = 'thing';
// }

// console.log(thing);

// The thing I am always afraid of teaching ES6 craziness like this early on, is that a lot of what ES6 does is make your guys/girls lives easier by not having to think about weird problems people who have written javascript for a long time have hated and wanted to fix. Let is us fixing those so that you dont have to think about these. This was always what we wanted var to do. Var should have always been encapsulated within whatever curly braces it exists within.

// TLDR: Even if you dont entirely see the value here, use it anyway, the value exists and you cant lose using let.








// Functions and Hoisting
// We all want to believe that code is run top down, left to right. We have to declare things before we refer to them.
// This is often seen as a large large mistake and issue in Javascript. People from other languages think this is complete stupidity, and they might be right, its hard to tell.

// Function Declaration
// This is a function.
// This works because of hoisting.
// saySomething();

// function saySomething () {
//   console.log('hi');
// }

// // Function Expression
// // This is a variable that is storing a function.
// // This does not work.
// // sayAnotherThing();

// let sayAnotherThing = function () {
//   console.log('hi');
// }

// saySomething();
// sayAnotherThing();

// I shouldnt of gotten undefined. I shouldve gotten a reference error. It doesnt exist.
// Hoisting
// In Computer Science there are two parts to a write operation. In Javascript we conceal one of those from you.
// If you wanted to buy a blow up mattress what would the steps you take be?
// Research - Look up prices, details, etc.
//   - What are some really important things to think about when doing research here?
//   - Return policy
//   - Size of mattress
//   - Comfort
//   - Does it have a pump to blow it up?
// Decide - Whether to buy it or not?

// Creating a Pointer - This is your computer asking for a place to store a future thing.
// You looking up the size of the mattress and figuring out if it fits in your closet. And which closet.
// All the other things occur too: Computers do lots more on top of this, computers think about how close this data is to things of similar types - e.g. like you using a closet that already has bedding stuff, return policy: they also look to see how easy it is to clear that area of this memory should it be needed, and lastly: it will actually check to see if any methods need to be associated (e.g. does it have any additional functions like being pumped)
// Memory is the big one: Do I have the memory - and can I put this there?
// Declare the Reference for a Pointer - What do I want to put there?
// let someVar = 'a thing' -> 'a thing' is you declaring a reference for4 that pointer. That is you saying: "I want to store this value at that place you saved for me."
// Generally in High Level Programming Languages we consider this very important that we dont as programmers get bogged down in whats called 'memory management'
// This brings us to how we break that down in JS:

// console.log(someValue);

// Below there are also two pieces
// var someValue - is what we call a 'left hand operation'
// = 'some value' - is what we call a 'right hand operation'
// Whats the difference? Well, we just learned. Variables arent really entirely for you. the 'left hand operation' is us asking the computer to reserve memory for us somewhere to put something LATER. We then give that place a name so that we and the computer can communicate about where that place is. Here that name is 'someValue'.
// So Javascript goes and asks your computer for memory, its 2018 so your computer has tons of memory and gleefully hands over a large swatch for this variable. (back in the day this wasnt the case)
// The question now is: "When does javascript do that?"
// It does not do this at runtime. Runtime is when your code is running. Instead, Javascript outthought you. IT does ANY LEFT HAND OPERATION ON A FIRST PASS OVER YOUR CODE BEFORE IT RUNS IT. E.G. THAT MEMORY IS ALREADY RESERVED FOR YOU BEFORE YOUR CODE RUNS.

// Why is this undefined and not a reference error?
// Because someValue does already exist. It just doesnt have any value yet.
// Right hand operations occur during runtime.
// console.log(someValue);

// var someValue = 'some value';

// Where is the left hand side in that function? The whole function is the left hand side.
// Thats what the function word does. Function is a reserved word to force javascript to interpret the entire function as a left hand side operation during the first pass.

// crazyFunc();

// function crazyFunc () {
//   console.log('Crazy right?');
// }

// otherCrazyFunc();
// console.log(otherCrazyFunc);

// var otherCrazyFunc = function () {
//   console.log('Starting to make sense?');
// }

// undefined()

// Whats the point?

// He regrets it. Hoisting is a really weird pattern - that you HAVE TO UNDERSTAND WHY IT HAPPENS but you dont need to use. Hoisting throws off the syntax checker in our head that wants to believe that code occurs in order. Thats a really bad practice right? Anytime we start messing with 'easy to understand' code we are making our own life, and other programmers lives worse. So, Im not telling you not to use hoisting, but you should understand that it can be hard to read code where functions are declared on line 1500 and used on line 10. A programmer jumping into your code is going to be overwhelmed.

// Why didnt we talk about arrow functions? Theres nothing to talk about - same rules as a function expression because: they have a left side.

let rootScope = 'root';

globalScope = 'global';
