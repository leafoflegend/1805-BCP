const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

const anArray = [1, 2, 3, 4, 5];

// anArray.forEach(function (elem) {
//   console.log(elem);
// });

// I just ran a for loop. But how?

// Functions are just objects. Theyre not some special thing.

function stupidFunction () {
  console.log('hi');
}

// stupidFunction();

stupidFunction.howStupid = 'very';

// console.log(stupidFunction.howStupid);

// Yeah this below thing doesnt work.
// const someObj = {};

// someObj();

// First Class Objects
// Its a normal object that the Javascript developers (the people who made javascript) gave one special property outside of the normal abilities of objects.
// That thing is called 'callable'. We can refer to functions as callable objects. All that really means is that we can invoke a function and expect it to do some pre-defined behavior.

// What can you guys tell me about objects?
// Made of key value pairs
// So are functions - one key: value pair being defintion, and the stuff you write
// and another being a key saying callable, and the value being true
// Equality of objects is not dependent on their internals - it is dependent on their reference.
// Functions only have equality if they are the same reference.
// Methods: functions can belong to objects
// And we see this with things like slice, etc. This is further evidence that functions are just objects because the only things we can place as values on keys are objects and primitives.
// Functions can take objects as arguments. We can pass objects into functions.

// Parameter vs arguments



// Functions can take objects as arguments. We can pass objects into functions.
// Functions are objects.
// Functions can take functions as arguments.

// You didnt say aFunc() on line 63 - Thats correct, I am not trying to call aFunc, I am trying to pass it in as a reference (e.g. an argument).
function callAFunction (aFunc) {
  // On line 64, the function we named theFunction is being called by a different name... aFunc - yes hyou are right. But we do the same thing with everything we pass into any function. We might have aNum = 5; Then a function call sum(someNum) - and now aNum is REFERRED to as someNum. The name does not have to be the same between a parameter and the original reference.
  aFunc();
}

function theFunction () {
  console.log('Hey I Ran!');
}

// callAFunction(theFunction);

// Higher Order Function: A higher order function is any function that is passed another function, or that returns out of it a function.
// We call it 'Higher Order' because we can think of one function as being above the other, e.g. the function that receives a function is greater then the function it receives.

const funcArray = [];

const dumbFunc = () => {
  console.log('Dumb func ran!');
}

funcArray.push(dumbFunc);
funcArray.push(dumbFunc);
funcArray.push(dumbFunc);

// I now have an array with three references to the same function.

// console.log(funcArray);

// dumbFunc === funcArray[1]();

const objWithDumbFunc = {
  dumbFunc: dumbFunc,
};

// objWithDumbFunc.dumbFunc();

// We can place functions anywhere that we would place any other thing.

// What do higher order functions do for us?
// We remember DRY hopefully? Dont repeat yourself. Well higher order functions are a way for us to pass around logic we already wrote to work in many many places. It also allows us to use functions in much more diverse ways.

// Given an array of random values, tell me whether any value is a certain value.

const doesValueExistInArray = (anArray, searchTerm) => {
  for (let i = 0; i < anArray.length; ++i) {
    const currentElem = anArray[i];

    if (currentElem === searchTerm) return true;
  }

  return false;
};

// Given an array of random values, tell me whether any value passes some arbitrary test.

const doesValuePassTest = (anArray, test) => {
  for (let i = 0; i < anArray.length; ++i) {
    const currentElem = anArray[i];

    const resultOfTest = test(currentElem);

    if (resultOfTest === true) return true;
  }

  return false;
};

// Pro: Its very DRY: we rewrite very little code, and our code feels organized.
// Pro: Seperation of Concern: Lets deal with iteration in one place, and testing in another. When we dont have overlap between them, its much easier to debug our code. We can deal with a bad test in the test function, and failing iteration in the iteration function. This makes it a lot easier for us to fix our code when it breaks (as it always will).

// Con: Theres a lot of trust in the consumer of a higher order function. There are some implicit rules that may not be so clear here. For example: The test function has to return true or false. If we return something else (in the case above specifically) then this whole thing breaks. How do we make sure that we - or in a less ideal world - another programmer - always uses this function the right way?
// The Implicit Contract: That programmers have to build things certain ways to interact with each other.

const testArray = [1, 'a', {}, [], new Date(), function () {}];

// I want to know if there is a function in this array.

const isAFunction = (aVal) => {
  return typeof aVal === 'function';
}

const isANumberOver0 = (aVal) => {
  return typeof aVal === 'number' && aVal > 0;
}

// console.log(doesValuePassTest(testArray, isANumberOver0));

// Callback
// Callbacks are the name most people use because it refers to why most of us use them.
// There is a historical context for why higher order functions exist that Id love to talk about.

// What is the internet?
// Different address that hold different content that people can access different ways
// Its a bunch of different computer communicating data.
// Servers and clients.
// Theres a bunch of computers and we all trust each others computers to deliver certain information.
// When you go to facebook.com you expect mark zucks computers out in san fran to deliver some baby photos to you
// EXPECT
// Most of us tend to trust that when we go to a page we get it.
// The internet is weirdly a system of trust. There are no promises. A site could not be there, or not deliver, or probably more relevant to you - it could just go very slowly.

// This is where callbacks from.

// How do we deal with uncertainity in programming?
// All the code weve ever written in this class runs on our computer and relies on no trust system. We write it, it works.
// But the game changes when code we write has to talk to someone else over the internet. Heres an example:
// Im your phone, you double tap on an instagram photo of people you know at EDC. You want to see that heart appear, BUT the code for that heart is only gonna make it appear if instagram.com says 'I saw you like that photo and ive registered it for all your friends to know that you like that photo'

// How might we write that in code?

// function likeThatPhoto () {
//   window.fetch('https://instagram.com/myfriend/edcphoto?i_love_it');
// }

// You dont have service.
// Webpage is down.
// Session ran out, and youre logged out.
// Your friend took down the photo so theyres nothing to like.
// Maybe you missed that double tap moment.

// You need to handle all of these situations.

// How do we describe in code what to do in each of these situations?
// We have to describe to a function, what behaviors it should take when something happens.
// That is a higher order function. The only way we as programmers know how to define behavior in advance is with a function, right? Thats what functions do. Theyre just predefined behaviors.

function likeThatPhoto () {
  const successFunction = () => {
    console.log('( :');
  }

  const rejectFunction = () => {
    console.log('Oh no! You didnt like the photo something failed.');
  }

  window.fetch('https://instagram.com/myfriend/edcphoto?i_love_it', successFunction, rejectFunction);
  // successFunction is - what do i do if instagram.com says that everything went well?
  // rejectFunction is - what do i do if my phone, or instagram.com says that something went wrong?
}

// Why is it called a callback?

// Lets talk about what call back means in english. You call your friend, they dont answer, so...
// You leave a voicemail - "hey i need to talk to you i need you to you, call me back"
// We already know what we want to talk them about

// Option 1:
// They call you back.
// Option 1a... etc
// They dont reach you.
// We have predefined behavior for what were going to do when they call us back.

// Option 2:
// Theyre a dick and they dont call you back.
// We know what were going to do if they dont call us back - hopefully move on with our life because theyre not worth our time - but angry facebook statuses are fine too.

// Lets write a function that does something in 1 second after i call it.

function doSomethingLater (theLaterThing) {
  setTimeout(theLaterThing, 1000);
}

const theLaterFunc = () => console.log('I ran a second later!');

// doSomethingLater(theLaterFunc);

// We need a way to express how to do things later. And how to deal with uncertainity. And the only way we can do that, is by planning our behaviors in advance and giving those behaviors to things that will need them later.

// Were done with the meta.

// Arguments vs Parameters non-sequitar;

// Parameters are what we name the placeholders for future arguments.
// Arguments are the actual values that get moved through a function.

// const addTwoNums = (numOne, numTwo) => {
//   return numOne + numTwo;
// }

// c(addTwoNums(1, 1));

// function whatAreArguments () {
//   console.log(arguments);
// }

// whatAreArguments(1, 2);

// Whats a really simple way to make your life easier starting today?
// You know all those pesky for loops that you write 10 times a class? Why keep writing em?

// What if we could use a higher order function to do loops for us?

function myForEach (anArr, callback) {
  for (let i = 0; i < anArr.length; ++i) {
    const currentElem = anArr[i];
    
    callback(currentElem, i);
  }
}

const forEachArray = [1, 2, 3, 4, 5];

// let sum = 0;
// myForEach(forEachArray, (elem) => sum += elem);

// console.log(sum);

forEachArray.forEach((elem, i) => {
  console.log('Elem: ', elem);
  console.log('Index: ', i);
  console.log(chalk.red('--------------'));
});