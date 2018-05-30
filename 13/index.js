const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);







const flatArray = [1, 2, 3, 4, 5];

// running the code in the function body the amount of times that flatArray has elements
// grabbing each element

// Dimensions of iteration
// x/y 
// x represents width
// y represents depth

// We use for loops to traverse an x axis.
// We can nest for loops to add axis.
// We can actually use recursion to go over the y axis almost all the time in a better way.
// You have always seen added axis as being eventually filled with primitives, well this is where i want to redefine what y axis means to me - y axis infers depth of properties, so we can think about layer 1 being the first layer we have access to properties in
// so in flatArray flatArray[0] is y 1 - if i said flatArray[0][0] I now think of y 2
// This 'property depth' is best traversed using recursion, but! anytime we need to traverse a flat structure, the best tool still remains a for loop. I do not want you replacing for loops with recursion everywhere, i want you to use your brain and strategically use recursion where it makes the most sense.

for (let i = 0; i < flatArray.length; ++i) {
  // We just grabbed an element
  const currentElem = flatArray[i];

  // console.log(currentElem);
}

const deepArray = [
  1,
  2,
  3,
  [
    4,
    5,
    6,
    [
      7,
      8,
      9,
    ],
    10,
  ],
  11,
  12,
];

const logDeepArray = (arr) => {
  for (let i = 0; i < arr.length; ++i) {
    const currentElem = arr[i];

    // Does this element have depth?
    if (Array.isArray(currentElem)) {
      // Anytime there is depth, we prefer recursion.
      logDeepArray(currentElem);
    } else {
      // Use our normal strategy in a for loop.
      console.log(currentElem);
    }
  }
};

// logDeepArray(deepArray);

const sumDeepArray = (deepArray) => {
  let sum = 0;

  for (let i = 0; i < deepArray.length; ++i) {
    const currentElem = deepArray[i];

    if (Array.isArray(currentElem)) {
      // We need to go higher and find all the numbers at that plane
      sum += sumDeepArray(currentElem);
    } else {
      // its just a number
      sum += currentElem;
    }
  }

  return sum;
};

// c(sumDeepArray(deepArray));

const deepObj = {
  a: 10,
  b: 7,
  c: {
    d: 9,
    e: {
      f: 11,
    },
    g: 1,
  },
  h: 2,
};

const sumDeepObj = (dObj) => {
  let sum = 0;

  for (let key in dObj) {
    const value = dObj[key];

    if (Array.isArray(value)) {

    } else if (typeof value === 'object') {
      // recursive case
      sum += sumDeepObj(value);
    } else {
      // normal loop case
      sum += value;
    }
  }

  return sum;
};

// c(sumDeepObj(deepObj));

// Warning
// c(typeof []);
