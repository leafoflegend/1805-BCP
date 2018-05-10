const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// While Loops
// While loops are actually what a for loop is made of.

// let i = 0; === Initialization: Where do I begin the sequence of code? In almost all cases, 0 is a great representation of beginnings.
// i < 10; === Condition: What has to happen for us to stop repeating this sequence of code? This is a little more dynamic in nature, and can change from for loop to for loop.
// i++ === Update: How do I get closer to the condition that ends the repetition of this sequence? THIS HAS TO GET US CLOSER. Otherwise, we get an Infinite Loop.
// for (let i = 0; i < 10; ++i) {
//   // Optional: Loop Body === This is the code we repeat every time.
//   // If we dont include a loop body, why are we looping?
//   console.log(i);
// }

// These three tenants are true of looping (Iteration) in all programming languages. You cannot iterate without all three.
// This is true even of more complex forms of iteration, such as recursion, or things like machine learning. You will always need these three things.
// Initialization
// Condition
// Update

// So While, obviously needs the same three things.

// The while loop syntax doesnt FORCE US to include all three of the above things. Thats up to us to remember to do.
// Initialization
// let i = 0;

// Condition
// while (i < 10) {
//   // Update
//   i++;
//   console.log(i);
// }

// A while loop is what we call 'unopinionated'. That means that it does not try to force you to write logic any specific way.
// While only cares about the condition. You can do whatever you want with the rest.

// Why even use a while loop?
// While has some moments where it can make a lot of sense, and most of them involve whats called a boolean switch - that means that it runs as long as some variable is true, and we dont really have a finite definition of when it will be false.
// For loops are great at finite ends - we know it runs 10 times. Or we know it runs to the end of an array. While is different in that its common use case is to use it when we have no idea when something ends.

// While loops have one special power:
// Do While
// Do while says the following: Regardless of condition I promise to run ONE TIME.

// do {
//   console.log('Hello');
// } while (false);

// For Loops

// What are fors? 
// Fors are a guided pattern for how to use a while loop. "Under the hood" for loops are just using "while" internally. You just never see it. For is like the lines on the ground at the subway station that lead you to the doors and away from getting hit by a train. They dont need to be there for you to understand where a train is, but none the less time has taught us that for some reason people will fall int the tracks more if the line isnt there.

// for takes three arguments seperated by semicolons.

// for (init; condition; update) {
//   body;
// }

// For isnt hyper-opinionated in the sense that it has no restrictions about what you can pass in for each argument.

// A for loop is only as good as the practices that it is suggesting we use, and that we actually use.
// let i = 0;

// for (true; Math.random() * 10 > i; true) {
//   ++i;
//   console.log('I am running');
// }

// That being said - DONT DO THAT. Please follow best practices.

// Initialization is almost always i = 0; I mean, 99% of the time.
// Condition should be < then some number. Sometimes, there are reasons this might not work. But for the most part you can always define a number that represents the amount of iterations that you should take.
// Update: As long as its moving i in the right direction it doesnt matter. Dont be crazy, because remember that often times we use i to inspect elements.

// let someArray = [1, 2, 3, 4, 5];

// for (let pizzapies = 0; pizzapies < someArray.length; ++pizzapies) {
//   let currentElement = someArray[pizzapies];

//   console.log(currentElement);
// }

// i is what we use for the outermost loop
// q is what we use for the next loop in
// j is what we use for the third loop in

// Use for loops to iterate through strings

// let someString = 'Tony Boetto';

// for (let i = 0; i < someString.length; ++i) {
//   let currentLetter = someString[i];

//   console.log(currentLetter);
// }

// When we use someVar[x] -> were using something called bracket notation. This will be important going into objects next week. For now just understand that it allows you to access an index of a string or array. Indexes are 0 based in all programming languages (e.g. programming languages start counting from 0, not 1). Well cover bracket notation a lot more in depth going forward.

// The Two Magic Words:

// Continue
// Continue is a word reserved for a loop body which after being stated does the following:
// It skips the current iteration in the for loop.

// I want to skip odd numbers of iteration.
// for (let i = 0; i < 10; ++i) {
//   if (i % 2 === 1) {
//     continue;
//   }

//   console.log(i);
// }

// Who can guess why I dont like this?
// Its unclear. -> We have a for loop that itself defines what it should be iterating on. The for loop body adding logic to that is confusing.
// It has no value. Any form of continue - could also be done by better logic.
// Lets redo the above.

// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }

// Continue is useless and confusing.
// If you can show me a time where it genuinely provides value - I will venmo you $20

// Break
// Break is the second magic word reserved for for loop bodies.
// When we say break inside a for loop it means:
// Stop executing this for loop entirely.

// Lets have a loop that cant go past 5.

// for (let i = 0; i < 10; ++i) {
//   if (i > 5) break;

//   console.log(i);
// }

// Again, better thought out logic should have you never have to do this:

// for (let i = 0; i <= 5; ++i) {
//   console.log(i);
// }

// But eliot, what if I had a dynamic ceiling - e.g. sometimes the ceiling was 5 other times it was 10, etc.

// Functions

// function dynamicLoopCeiling (ceiling) {
//   for (let i = 0; i < 100; ++i) {
//     if (i > ceiling) return ceiling;

//     console.log(i);
//   }
// }

// dynamicLoopCeiling(9);

// Break and Continue are things you should know in case you run into them. Not so that you can use them. Those are two very different reasons to understand something.
// I know if I put aluminum foil in the microwave that it makes pretty sparks. That doesnt mean i should do it, it is useful knowledge in case i see a drunk or idiotic friend about to do it.




