const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// First Rule of Tidy Code is Indentation

// This has code smell
// function awfulFunction(){  console.log('cool func right?'); console.log(1+1)};

// awfulFunction();

// Correcting that awfulFunction

// Indentation: Every time we open a curly brace e.g. '{' - we have to: make a new line, and indent that new line one unit of indentation.
// Statements: Every time I make a statement, it should own its own line. A statement is any piece of code that is executable on its own.
// Indentation Rule 2: Any time we end a block of code, we use a '}' closing brace - this will move back one unit of indentation on a new line. Nothing else should be on that line.

// Who can tell me some other linting/tidy code errors with the code below?
// Semi-colons after every statement.
// Functions do not need a semi-colon after them, because they are not a statement.
// Functions should have a space between their definition and their arguments.
// Equally so, there should be a space between the arguments and the opening curly brace.
// Operators should have a space on each side - operators are any symbol which takes two values and performs an operation on them. In this case: addition.

// Isnt this quicker to analyze and to debug if something was wrong?

// function awfulFunction () {
//   console.log('cool func right?');
//   console.log(1 + 1);
// }

// awfulFunction();

// one unit of indentation
// spaces vs tabs

// What do you mean spaces vs tabs? Arent tabs just a series of spaces?

// I just manually wrote the secret tab character
// console.log('\thi');

// Tabs are environment specific.
// Tabs are whatever the current thing you're working in deems it to be.
// If youre in Microsoft Word: 5 spaces.
// If youre in notepad: 3 spaces
// If you're on the inter: 4 spaces

// The pro of tabs: 
// You can customize them. Tabs are something that on your computer you can define what they look like. Sometimes, that might mean 4 spaces. Other times you might be insane and say thats 16 spaces. It really doesnt matter. The point is this, a big PRO is that tabs are whatever you want them to be. So if you someone writes their code using tabs - and they send you their code - their code will look the way you want it to look because you have customized tabs. Everyone gets to see code they way they like to see code.

// The con of tabs:
// If you send someone your code, they can see it in a very different way then the way you wrote it. Thats their choice mind you - but you may have intended for them to look at EXACTLY the same code.

// Spaces
// Its a darn space. You know what it is. Its the size of the widest character in the current font you are using. Thats the size of a space. Thats also referred to as an EM (nerd knowledge). The widest possible character in the current font.

// Pro: A space is a space. Nobodys computer is interpreting a space differently. It doesnt matter if youre on the space station, linux, windows, mac, a smartwatch, a tablet. Its the same.

// Con: People cant customize how your code looks.

// Eliot, I get it, spaces, tabs theyre different which should I use?

// I cant tell you! I would start a blood feud that would end in a game of thrones style death for me. So I absolutely cannot tell you which you should use. But I can provide evidence that may help you decide.

// Regardless of space vs tabs most people agree to a range here:
// Most people like their spaces or tabs to be in the range of a width of 2-4 spaces per indent.
// Most people dont do odd numbers so 3 is out, so I really mean 2 or 4.

// Fake Microsoft XP source code

/*
  None of us understand how this works. Its BLACK MAGIC. Do not touch, or everything will break.
*/
// What is this name?
// var laknsdagsd796 = () => Math.random() * Math.floor(Infinity) * alkshdkajbsd();

// Variable Naming
// Why is it important to name your variables in a descriptive way?
// Well, theres a famous saying amongst programmers:

// const famousSaying = 'Treat your code as if the person who is going to next work on it, and maintain it, is a serial killer who knows your address, social security number, and family.';

const birthday = new Date();
const futureDate = new Date();

futureDate.setFullYear(2800);
// I was trying to figure if your birthday was before a certain moment.

const isBirthdayBeforeDate = (bday, otherMoment) => {
  return birthday < otherMoment;
};

console.log(isBirthdayBeforeDate(birthday, futureDate));

// There is no length of variable name, nor function name, that is too long if what it is doing is attemptng to best describe your code.
