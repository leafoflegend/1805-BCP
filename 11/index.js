const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);


const ourFirstClosure = () => {
  return () => {
    console.log('hi');
  };
};

// someVal is actually a reference to the function called functionThatLogsHi.
const someVal = ourFirstClosure();

// someVal();

// What problem does this solve?

// The only tools that exist to programmers are things that solve problems. So anytime we use or do something we should ask ourself the following question: 'What is the problem statement that this is the solution too?'

// Are going to spend today figuring that out.

// Scope
// Scope is created traditionally by the curly braces around a functions body. When we write a function - we encapsulate (some people think about it as privatizing) data that is only accessible to the function.

const privateNumber = () => {
  // Scope is in here. This is a different scope that nothing outside of this function can look into too.
  const privNum = 5;

  return privNum;
};

privateNumber();

// console.log(privNum);

// Closure: Closure is the ability to abuse both higher order functions and scope simultaneously to create a very funky tool.

// Were going to write really basic banking software.
// Criteria:
// 1. We can create accounts in peoples names
// 2. People have balances
// 3. They can withdraw and deposit money if they have a PIN that they set when they created their account.
// 4. Nobody including the user, can modify their money except if they deposit or withdraw by the banks standards.

let bankAccount = {
  name: '',
  pin: '',
  amount: 0,
  // Deposit doesnt seem to verify anything
  // Lets pretend it actually verified cash or checks - is there a way besides deposit to give yourself money?
  deposit: function (depAmount, privPin) {
    console.log(this.pin);

    if (privPin === this.pin) {
      this.amount += depAmount;
      console.log('New balance is: ', this.amount);
    } else console.log('Auth failed');
  },
  withdraw: function (withAmount, privPin) {
    if (privPin === this.pin) {
      if (this.amount > withAmount) {
        this.amount -= withAmount;
        console.log('Withdraw successful, new balance is: ', this.amount);
      } else {
        console.log('Withdraw failed.');
      }
    } else console.log('Auth failed');
  },
};

// bankAccount.pin = '1234';

// bankAccount.deposit(1000, '1234');
// bankAccount.withdraw(100, '1234');

// Yeah we could just do the below...
// bankAccount.amount = 10000000000000000000000000000000000000000000000000000000000;

// Do we currently have a tool that would EVER prevent us from doing something like above?
// How would you currently protect your object from another programmer trying to modify it?

// Scope - change it so that its untouchable to the scope of the other programmer
// The issue with scope right now is that it seems single use

function makeBankAccount () {
  let bankAccount = {
    name: '',
    pin: '',
    amount: 0,
    // Deposit doesnt seem to verify anything
    // Lets pretend it actually verified cash or checks - is there a way besides deposit to give yourself money?
    deposit: function (depAmount, privPin) {
      console.log(this.pin);
  
      if (privPin === this.pin) {
        this.amount += depAmount;
        console.log('New balance is: ', this.amount);
      } else console.log('Auth failed');
    },
    withdraw: function (withAmount, privPin) {
      if (privPin === this.pin) {
        if (this.amount > withAmount) {
          this.amount -= withAmount;
          console.log('Withdraw successful, new balance is: ', this.amount);
        } else {
          console.log('Withdraw failed.');
        }
      } else console.log('Auth failed');
    },
  };

  return bankAccount;
}

// console.log(makeBankAccount.amount);

const tonysAccount = makeBankAccount();

tonysAccount.amount = 99999999999;

// console.log(tonysAccount);

// Closure is how we truly protect and privatize data.
// In OOP (Object Oriented Programming) there is a concept of something called 'encapsulation' which you have heard me mention a few times. This refers to the practice of hiding data within things - and that data is only accessible through 'methods'. You know what methods are: Pre Defined behaviors attached to an object. Heres what Im suggesting:
// Closure is a way for us to privatize data, and FURTHERMORE, to explain in advance the ways in which you are allowed to interact with that data.

// A bank says: I have private data, it is the amount of money you have.
// I will allow you to interact with your money in three defined ways:
// 1. Withdraw
// 2. Deposit
// 3. Transfer

// Does a bank say: "You can modify the number of moneys you have"
// Its a really common problem to have data that users should not be allowed to touch except in ways that we have defined in advance.

// Closure Bank Account

const createAccount = (name, pin) => {
  let amount = 0;

  const nextAccount = {
    name: name,
    pin, pin,
    withdraw: (withAmount, privPin) => {
      if (pin === privPin && withAmount < amount) {
        amount -= withAmount;
        console.log(`Withdraw of $${withAmount} successful! New balance: $${amount}`);
      } else console.log('Cannot withdraw at this time.');
    },
    deposit: (depAmount, privPin) => {
      if (pin === privPin) {
        amount += depAmount;
        console.log(`Deposit of $${depAmount} successful! New balance: $${amount}`);
      } else console.log('Invalid pin.');
    },
    getBalance: (getPin) => {
      if (pin === getPin) console.log(`Current balance: $${amount}`);
      else console.log('Invalid pin.');
    },
  };

  return nextAccount;
};

const theTonyAccount = createAccount('Tony', '1234');

// theTonyAccount.deposit(1000, '1234');
// theTonyAccount.withdraw(750, '1234');
// theTonyAccount.getBalance('1234');

// console.log(theTonyAccount.amount);
theTonyAccount.amount = 1000000000000000000000;

// theTonyAccount.getBalance('1234');

// the amount is hidden in createAccounts scope. But... how are we accessing it? That seems to break all the rules of scope that we know.

// Anything that once had access to data in a scope - always has access to data in a scope.
const createCounter = () => {
  let count = 0;

  return () => {
    ++count;
    console.log(`The current count is: ${count}`);
  };
};

const firstCounter = createCounter();

// firstCounter();
// firstCounter();
// firstCounter();

// c(firstCounter.amount);

// References
// Garbage Collection

// References are just a place in memory. When we know about a place, we can always go there and look at whatevers there. Scope works because the places that exist inside of a scope are not references that a available to look at outside the scope.
// But heres what we did above: We had the reference available - and then - we returned that reference out of the function. So now, its available outside of that function. BUT! Only in a predefined way. In this case incrementing by 1 and logging it.

// Can we change the counter? Sure, but only by 1.

// Weve spoken about references, weve spoken about closure: What happens to all this memory when we dont need it anymore?
// Lucky you, in Javascript, we dont actively deal with this. We trust Javascript to 'Garbage Collect' as the code runs. What I mean is exactly what it sounds like: Javascript is constantly looking at what is needed and isnt anymore. Anything it deems 'Garbage' it will delete from memory and give back to your computer. It will say "I dont need this place anymore, can you save it for me for later.";

// Javascript has really one core rule about how Garbage colleciton works:
// "If there are any references to that place left in the code that is left to run, I will keep it. If there are no more references to that reference, I will delete it."

// this is why closure works. Closure is us abusing a ton of systems. We make a reference to a place. Javascript wants to delete it when the function ends. BUT! We return a function from that function that is still looking at that reference. Because of that, javascript doesnt think its garbage, something is still looking at that place. So, it stays intact, and our weird child function that came out of another function continues to get to use that place even THOUGH EVERY OTHER PIECE OF JAVASCRIPT LOGIC AND LAW STATES THAT THE MEMORY SHOULD HAVE DISSAPEARED AND SHOULD NOT BE ACCESSIBLE.

// Really using Higher Order Functions right now - this is both a callback, and closure being used at the same time.
const curryFunc = (aFunc, firstArg) => {
  return (secondArg) => {
    return aFunc(firstArg, secondArg);
  };
};

const addTwoNums = (a, b) => a + b;

const partialAdd = curryFunc(addTwoNums, 1);

// console.log(partialAdd);

// console.log(partialAdd(10));


// Callbacks
// forEach -> forEach doesnt return anything - it just runs a for loop. But, some higher order functions do return things.

// Map
// Map is a higher order array method that takes an array and a callback and whatever you return in each callback, it will put in a NEW array the same position as the current element. It eventually returns the whole new array.

const testArray = [1, 2, 3, 4, 5];

// console.log(testArray.map((elem) => elem * 2));
// console.log(testArray);

// Filter
// Filter is another array method, this time, it takes a callback, if the callback returns true - that element stays in the array being created. If it returns false, it is FILTERED out of the new array being created.

// console.log(testArray.filter((elem) => Math.random() * 50 > 25));
// console.log(testArray);

// Reduce
// Reduce has a special place in peoples hearts: It is a way to take any array and turn it into anything. I am not kidding. This function is absurdly powerful. Reduction is the name of the process in which we inspect a collection of values to build a new value. We call it reducing because in theory we should be taking a collection and 'reducing' it to a single value. But people are assholes and we now know that collections are themselves a value - so you can also reduce a collection into another collection. Mind blown.

console.log(testArray.reduce((sum, elem) => sum + elem, 0));
console.log(testArray);
