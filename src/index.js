// javascript characters one letter a, n, i
// common js variable names (key = dictionary keys, i = numbered indexes, x = iterable, y, z))
// use meaningful variable names for global/important variables
// use short variable names on local variables for code optimization and less bugs (faster website)
// reduce unused javascript
// defer offscreen images for faster loading
// JS bundlers (Vite >>> webpack) will optimize code for you and minify code (remove spaces, new lines, etc)
// therefore, use meaningful variable names for most variables
// avoid infinite loops
// avoid using var, use let or const
// avoid using global variables
// avoid using eval()
// avoid using with()

// JS is a loosely typed language
// JS is a dynamically typed language
// JS is a weakly typed language
// JS is a interpreted language
// JS is a compiled language
// JS is a multi-paradigm language
// JS is a functional language
// JS is a prototype based language
// JS is a single threaded language
// JS is a synchronous language
// JS is a asynchronous language
// JS is a event driven language

// import react from "react"; // modules are reusable pieces of code that can be exported from one program and imported for use in another program
// import reactDOM from "react-dom";
// import './styles/styles.scss'
// import functionExample from "./index.js";
// import {addTwo, checkConsistentOutput} from './index.js';
// import { object } from "webidl-conversions";
// import { example } from "yargs";
// require = require("esm")(module/*, options*/)
// module.exports = require("./main.js")


const javascript = true;
const reactnumber = 12;
const node = "cool";


// CONDITIONALS
// ternary operator

// javascript
  // ? console.log("I am a JavaScript developer")
  // : console.log("I am a Java developer");

// if else / else if

if (react >= 12) {
  console.log("I am a React developer");
} else if (react < 12) {
  console.log("I am a Vue developer");
} else {
  console.log("I am a SolidJS developer");
}

// switch

switch (node) {
  case "advanced":
    console.log("NodeJS is advanced");
    break;
  case "best":
    console.log("NodeJS is the best");
    break;
  case "cool":
    console.log("NodeJS is cool");
    break;
  default:
    console.log("NodeJS is not cool");
}

// FUNCTIONS

const functionExample1 = (a, b) => {
  return a * b;
};
console.log(functionExample1(2, 3)); // 6

// ARRAYS - lists that store data
const foods = ["apples", "oranges", "pears, 10, true"];

// Nested arrays - array within an array
const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]

// Array methods
// .push, .pop, .join(), .slice(), .splice(), .shift(), .unshift(), .concat(

foods[3] = "grapes";
foods.push("mangos");
foods.unshift("strawberries");
foods.pop();

console.log(Array.isArray(foods));
console.log(foods.indexOf("oranges"));
console.log(foods);
console.log(foods[1]);

// callback functions

const addTwo1 = (num) => {
  return num + 2;
};

const checkConsistentOutput1 = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  return checkA === checkB ? func(val) : "inconsistent results";
};

console.log(checkConsistentOutput1(addTwo1, 10));

// LOOPS

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Looping through array

const vacationSpots = ["Bali", "Paris", "Tulum"];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

// Nested loops

const bobsFollowers = ["Jake", "Kyle", "Robert", "Shaq"];
const tinasFollowers = ["Mina", "Kyle", "Shaq"];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let y = 0; y < tinasFollowers.length; y++) {
    if (bobsFollowers[i] === tinasFollowers[y]) {
      mutualFollowers.push(tinasFollowers[y]);
    }
  }
}

// while loops (infinite loop, watch out!)
/* let currentCard = ['king'];
while (currentCard !== 'spade') {
  const card = currentCard[Math.floor(Math.random() * 4)];
  console.log(currentCard); 
} */

// do while loops - will always run at least once
let cupsOfSugarNeeded = 0;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded + " cups was added!");
} while (cupsAdded < cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Break Keyword for loops
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}

console.log("And if you don't know, now you know.");

//for...of loops (ES6) & break + continue
// In the example above, we iterated through an array in reverse! You would not be able to use a for...of loop to do the same thing.
// However, with a regular for loop, you have access to indices of the elements, determine a stopping condition, and the ability to set a counter.
// Keep these factors in mind when deciding what loop is right for your circumstance.
const fruits = ["oranges", "apples", "grapes"];

for (const fruit of fruits) {
  console.log(fruit);
}

const strangeBirds = [
  "Shoebill",
  "Cockatrice",
  "Basan",
  "Terrorbird",
  "Parotia",
  "Kakapo",
];

for (const bird of strangeBirds) {
  if (bird === "Basan") {
    break;
  }
  console.log(bird);
}

const strangeFliers = [
  "Shoebill",
  "Cockatrice",
  "Basan",
  "Cow",
  "Terrorbird",
  "Parotia",
  "Kakapo",
];

for (const bird of strangeFliers) {
  if (bird === "Cow") {
    continue;
  }
  console.log(bird);
}

// for...in loops (ES6) - used to iterate over objects
// for (let crewMember in spaceship.crew) {
// console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
// }

// OBJECTS - key value pairs
let spaceShip = {
  "Fuel Type": "Turbo Fuel",
  color: "red",
};

// dot notation && bracket notation
spaceShip.color; // returns 'red'
spaceShip["Fuel Type"]; // returns 'Turbo Fuel'

// property assignment
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

spaceship.color = "glorious gold";
spaceship.numEngines = 8;

delete spaceship["Secret Mission"];

// methods
// methods are actions we can perform. They are stored in properties as function definitions.

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};
alienShip.retreat();
alienShip.takeOff();

// Template String

console.log("My name is ${name} and I am ${age}");

const eg = "Hello World";

console.log(eg.length);
console.log(eg.toUpperCase);
console.log(eg.toLowerCase);
console.log(eg.substring(0, 5));
console.log(eg.substring(0, 5).toUpperCase());

/* function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

*/

//Object literals

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person.hobbies);

const {
  firstName,
  lastName,
  address: { city },
} = person;

console.log(city);

person.email = "john@gmail.com";

console.log(person);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];

console.log(todos);

console.log(todos[1].text);

// ES6 forEach, map, filter (Arrays) functional programming
// Events (onmouseleave, onmouseover etc.)
// Use as little global variables as possible to avoid scope pollution / variable collision

// a callback function is a function passed as an argument into another function.

// Higher order functions
const higherOrderFunc = (param) => {
  param();
  return `I just invoked ${param.name} as a callback function!`;
};

const anotherFunc = () => {
  return "I'm being invoked by the higher-order function!";
};

higherOrderFunc(anotherFunc);

// Iterators (.forEach, .map, .filter)
// Iterators are methods called on arrays to manipulate elements and return values.

const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

artists.forEach((artist) => {
  console.log(artist + " is one of my favorite artists.");
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareNumbers);

const things = ["desk", "chair", 5, "backpack", 3.14, 100];

const onlyNumbers = things.filter((thing) => {
  return typeof thing === "number";
});

console.log(onlyNumbers);

// findIndex()
const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex((num) => {
  return num < 10;
});

// reduce()
const numberss = [1, 2, 4, 10];
 
const summedNums = numberss.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
 
console.log(summedNums); // Output: 117

// regular expressions
// Regular expressions are patterns used to match character combinations in strings.

// .test()
const myString = "Hello, World!";
const myRegex = /Hello/;
const result = myRegex.test(myString);

// object methods

// classes
class Surgeon {   // Create Class
  constructor(name, department) {   //Constructor
    this._name = name;    //Method
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;    // Class Method
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular'); //Create new class instance
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name); // Method Calls
console.log(surgeonRomero.takeVacationDays(3));
console.log(surgeonRomero.remainingVacationDays);


class Nurse extends HospitalEmployee {  // Inheritance
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications; // Setter
  }
}

  const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']); // Create new class instance
console.log(nurseOlynyk._certifications); // Getter

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  static generateName() {     // Static Method
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 

console.log(Animal.generateName()); // returns a name


// error handling
// built in runtime errors (ReferenceError, TypeError, SyntaxError, RangeError, URIError, EvalError)


// custom errors (Error keyword, code will run after) 

console.log(error('Your password is too short.'));

// try...catch
try {
  throw Error('This error will get caught');
} catch (e) {
  console.log(e);
}

// throw error

//throw error ('user not found'); // Code will not run after throw error


// Javascript testing (Mocha, TDD, Manual testing, Automated testing, etc.)

// Manually testing (npm start, npm test, npm run build, etc.)


// describe and it blocks (Mocha)

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
}

// Async
// asynchronous programming is a programming paradigm that enables
//  a program to do more than one thing at the same time.

// write a async function
async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve
      ("I love You !!"); }, 3000);
  });

  console.log(await myPromise);
}

// asynchronous callback functions, setTimeout(), setInterval(), requestAnimationFrame(), etc.
//  this prevents any blocking, and allows other code to be run in the meantime.

async function myFunction() {
  setTimeout(function(){ alert("I love You !!"); }, 3000);
}

//  async (Promises) 
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
}

const orderSunglasses = () => {
  return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();

console.log(orderPromise);



// async (promises and .then w/full best practices) 
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};


checkInventory(order)
    .then((resolvedValueArray) => {
       return processPayment(resolvedValueArray);
    })
            .then((resolvedValueArray) => {
               return shipOrder(resolvedValueArray);
            })
                    .then((successMessage) => {
                        console.log(successMessage); 
                    });


const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.'); 
const  checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);



// (await, async, .finally, fetch etc.)
write an async function

async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve
      ("I love You !!"); }, 3000);
  });

  console.log(await myPromise);
}

function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

withConstructor(0)  // This returns a promise without async keyword
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});

// Write your code below:
async function withAsync(num) { // This returns a promise with async keyword
  if (num === 0) {
    return 'zero';
} else {
  return 'not zero';
  }
}

async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
    console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner()



async function usingTryCatch() { // complete asynchronous function with async await, try catch
  try {
    let resolveValue = await asyncFunction('thing that will fail');
    let secondValue = await secondAsyncFunction(resolveValue);
  } catch (err) {
    // Catches any errors in the try block
    console.log(err);
  }
 }
  
 usingTryCatch();

 // API (Application Programming Interface)
//  API requests are asynchronous requests that fetch data from an external source. We got Browser API's and 3rd party API's

  fetch('https://api-to-call.com/endpoint').then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    return jsonResponse;
  });


// REST API (Representational State Transfer) 
//  REST API's are a set of rules that developers follow when they create their API.
//  REST API's are designed to make it easier for systems to communicate with each other. They are lightweight and fast.
// restful api's are stateless, client-server, cacheable, layered system, code on demand (optional), uniform interface

const express = require('express')
const app = express()
const port = 3000

app.get('/data/:id', (req, res) => {
  // retrieve data with id
  const data = retrieveData(req.params.id)
  if (data) {
    res.json(data)
  } else {
    res.status(404).send('Data not found')
  }
})

app.put('/data/:id', (req, res) => {
  // update data with id
  const data = req.body
  if (updateData(req.params.id, data)) {
    res.send('Data updated')
  } else {
    res.status(500).send('Error updating data')
  }
})

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})

// JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write.
//  It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999.
// JSON is a text format that is completely language independent but uses conventions that are
//  familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.
//  These properties make JSON an ideal data-interchange language.

const json = '{"result":true, "count":42}'; // JSON Parse example (turns JSON into a JS object)
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42


const object1 = { // JSON Stringifty example (turns JS object into JSON)
  a: 'somestring',
  b: 42,
  c: false
};

console.log(JSON.stringify(object1));
// expected output: "{"a":"somestring","b":42,"c":false}"

// JS Destructuring
// Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

let object = {
  name: "Nishant",
  age: 24, 
  height: '20 meters',
  weight: '70 KG'
}

let { name, salary, weight } = object;

console.log(name)
console.log(salary)
console.log(weight)


// How to Use Object Destructuring with Functions

let object = {
  name: "Nishant",
  age: 24, 
  salary: 300,
  height: '20 meters',
  weight: '70 KG'
}

function printData({name, age, salary, height, weight}){
  console.log(name, age, salary, height, weight)
}

printData(object)

// Spread Operator (ES6) (...) (destructuring)
// the spread operator allows an iterable such as an
//  array expression or string to be expanded in places
//  where zero or more arguments (for function calls) or elements
//  (for array literals) are expected, or an object expression to be expanded in places
//  where zero or more key-value pairs (for object literals) are expected.

let object1 = {
  firstName: "Nishant",
  age: 24, 
  salary: 300,
}

let object2 = {
  lastName: "Kumar",
  height: '20 meters',
  weight: '70 KG'
}

let object3 = {...object1, ...object2}
console.log(object3);

// Copy Arrays

let array1 = [1, 2, 3, 4, 5]
let array2 = [...array1]
console.log(array2);

// how to use spread operator with functions

let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8, 9, 10]

function addNumbers(a, b, c, d, e, f, g, h, i, j){
  return a + b + c + d + e + f + g + h + i + j
}

console.log(addNumbers(...array1, ...array2))


// Rest Operator (ES6) (...)

function addNumbers(...args){
  console.log(args)
}

addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Learn and understand the concepts such as Hoisting, 
// Event Bubbling, Scope, Prototype, Shadow DOM and strict.