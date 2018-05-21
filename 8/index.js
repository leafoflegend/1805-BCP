const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);



var Tony = {
  hasHeadphones: true,
  hasBed: true,
  drapesOpen: true,
  sayHello: function (otherPerson) {
    console.log(`Hi, ${otherPerson}!`);
  },
};

// console.log
// array.split()

// Tony.sayHello('Bianca');

const anArray = [1, 2, 3];

// console.log(anArray.slice(1));

// What is the data that we are referring to?
// [1, 2, 3] -> anArray's contents

function doIHaveIPodHeadphones () {
  console.log('Do I have IPod Headphones: ', this.hasIPodHeadphones);
}

// Is the value of 'this'. This enables us to refer to different values without rewriting functions. It enables us to look at entirely different objects in different ways, based on 'where' the function is run.

const Stacy = {
  hasIPodHeadphones: true,
  tellIfIHaveIPodHeadphones: doIHaveIPodHeadphones,
};

const Monique = {
  hasIPodHeadphones: false,
  tellIfIHaveIPodHeadphones: doIHaveIPodHeadphones,
};

// Stacy.tellIfIHaveIPodHeadphones();
// Monique.tellIfIHaveIPodHeadphones();

// DRY - Dont Repeat Yourself.
// I just wrote the same function twice with one tiny difference. Dont do that. Be lazy.

// Does anArray.slice say 'anArray' inside of its .slice?
// How would it know the name that we gave it?

// What is 'this'?
// Very few people know.
// But, for today lets ask a more refined question:
// What does 'this' mean in an object?

// Within an object, 'this' is referring to whatever the enclosing curly braces are around an object.

function returnThis () {
  return this;
}

const someObj = {
  someValue: 'this value',
  // WONT WORK
  // readValue: () => {
  //   console.log(this.someValue);
  // },
  // WILL WORK
  readValue: function () {
    console.log(this.someValue);
  },
  returnMe: returnThis,
};

const anotherObj = {
  someValue: 'another value',
  returnMe: returnThis,
};

// c(someObj.returnMe().someValue);
// c(anotherObj.returnMe().someValue);

// someObj.readValue();

// This is the first time you are ever seeing arrow functions behave differently, and for good reason.
// Arrow Functions: They were made specifically to solve how confusing THIS is. That is their purpose in life. It is a great purpose. But when we PURPOSEFULLY intend to use THIS. We have to use the function declaration. That is how we access THIS the same way.
// Arrow functions are superior, and you should try to avoid using THIS within good reason. For the purposes of todays scary lecture, lets take ourselves back to 2015 and pretend that we dont have arrow functions.

const someArray = [1, 2, 3];

// c(someArray.slice(1));

// Prototypes
// Prototypes: A secret way to access 'this' from somewhere else.
// console.log(Array.prototype.slice);

// Bind
// Bind is a function that takes one argument - 'this'. Whatever you give it, will be that functions this.

// function returnThis () {
//   return this;
// }

const newReturnThis = returnThis.bind({ crazyRight: true });

console.log(newReturnThis());
