const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));


// Problem Statement
// We want a tool in our toolbelt for all problemsets. Thats what programming (or atleast being a good programmer) is all about.
// So lets try to solve a problem:

// logArray
// Given an array of arrays and primitives, log all primitives, and if you run into an array log all the primitives within it.

const testArray = [
  1,
  2,
  [
    3,
    4,
  ],
  5,
  [
    6,
    7,
    [
      8,
      [

      ]
    ],
  ],
];

// const logArray = (anArray) => {
//   // loop over the outermost collection
//   anArray.forEach((elem) => {
//     // inspect each element looking at if it is an array or not
//     if (Array.isArray(elem)) {
//       // If it is,
//       // loop through that array logging everything
//       elem.forEach((innerElem) => {
//         if (Array.isArray(innerElem)) {
//           innerElem.forEach(superInnerElem => console.log(superInnerElem));
//         } else {
//           console.log(innerElem);
//         }
//       });
//       // If its not,
//     } else {
//       // Just log the primitive
//       console.log(elem);
//     }
//   });
// };

// const logArray = (anArr) => {
//   anArr.forEach((elem) => {
//     if (Array.isArray(elem)) {
//       logArray(elem);
//     } else {
//       console.log(elem);
//     }
//   });
// };

// logArray(testArray);

// How do we gracefully handle collections of an unknown size? Or problems of unknown difficulty?
// Can we write one function that can deal with any number of arrays within arrays?

// Yes: A recursive function

// Stacks

// Stacks are what we call a FILO structure.
// FILO: First In Last Out
// Stacks of Pancakes
// When we make pancakes what we do is we make a pancake at a time, we throw a complete pancake on a place, then we make another one. But when we finish cooking the next pancake, that means that it goes on top of the first pancake that was finished. You might not think about this, but that means that the last pancake made, is the first one consumed. When we later go to eat the pancakes we grab pancakes from the top, not the bottom. Thats what the last pancake is always a soggy mess.

const sayHello = () => {
  console.log('Hi!');
}

const sayWhatsUp = () => {
  console.log('Whats up!');
}

const sayGreeting = () => {
  sayHello();
  sayWhatsUp();
}

const sayGoodbye = () => {
  console.log('Bye!');
}

const converse = () => {
  sayGreeting();
  sayGoodbye();
}

// sayHello
// sayGreeting
// converse();

// Function calls can simulate loops...
// function countdown (num) {
//   console.log(num);
// }

// countdown(5);
// countdown(4);
// countdown(3);
// countdown(2);
// countdown(1);

// Initialization - Start
// Condition - End
// Update - How do I get closer to the end?

// This does not have an end.
// Infinite Loop
// Were using memory.
// Our computer is going to run out of memory.

// We have to introduce any missing piece of iteration. In recursion we call that piece 'The Base Case'
// The base case is defined as: The one condition during which we do not call the function again.

// base cases often define when the functions calling the current function get to resume.

const countdown = (num) => {
  if (num >= 1) {
    countdown(num - 1);
  }
  console.log(num);
};

countdown(5);



