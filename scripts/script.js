// javascript characters one letter a, n, i
// common js variable names (key = dictionary keys, i = numbered indexes, x = iterable, y, z))
// use meaningful variable names for global/important variables
// use short variable names on local variables for code optimization and less bugs (faster website)
// JS bundlers will optimize code for you (webpack, parcel, rollup) and minify code (remove spaces, new lines, etc)
// therefore, use meaningful variable names for most variables
// avoid infinite loops
// avoid using var, use let or const
// avoid using global variables
// avoid using eval()
// avoid using with()

// use camelCase for variable names
// use PascalCase for class names
// use snake_case for file names
// use kebab-case for html/css ids and classes

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

const javascript = true;
const react = 12;
const node = 'cool';

// CONDITIONALS
// ternary operator

javascript ? console.log("I am a JavaScript developer") : console.log("I am a Java developer");

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
  case 'advanced':
    console.log("NodeJS is advanced");
    break;
  case 'best':
    console.log("NodeJS is the best");
    break;
    case 'cool':
    console.log("NodeJS is cool");
    break;
  default:
    console.log("NodeJS is not cool");
}

// FUNCTIONS

const functionExample = (a, b) => {
  return a * b;
}
console.log(functionExample(2, 3)); // 6

// ARRAYS - lists that store data
const fruits = ["apples", "oranges", "pears, 10, true"];

// Nested arrays - array within an array
const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]

// Array methods 
// .push, .pop, .join(), .slice(), .splice(), .shift(), .unshift(), .concat(

fruits[3] = "grapes";
fruits.push("mangos");
fruits.unshift("strawberries");
fruits.pop();

console.log(Array.isArray(fruits));
console.log(fruits.indexOf("oranges"));
console.log(fruits);
console.log(fruits[1]);


// LOOPS

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Looping through array

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for(let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

// Nested loops

const bobsFollowers = ['Jake', 'Kyle', 'Robert', 'Shaq'];
const tinasFollowers = ['Mina', 'Kyle', 'Shaq'];
const mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++) {
  for(let y = 0; y < tinasFollowers.length; y++) {
  if (bobsFollowers[i] === tinasFollowers[y]) {
    mutualFollowers.push(tinasFollowers[y]);
    }
  }
}

// while loops
let currentCard = 'de';
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// do while loops - will always run at least once
let cupsOfSugarNeeded = 0;
let cupsAdded = 0;

do {
  cupsAdded++;
    console.log(cupsAdded + ' cups was added!');
} while (cupsAdded < cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Break Keyword for loops
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");



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
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA"
  }
}

console.log(person.hobbies);

const { firstName, lastName, address: { city } } = person;

console.log(city);

person.email = "john@gmail.com";

console.log(person);

const todos = [
  {
    id: 1,
    text: "Take out trash" ,
    isCompleted: true
  },
  {
    id: 2,
    text: "Meeting with boss" ,
    isCompleted: true
  },
  {
    id: 3,
    text: "Dentist appt" ,
    isCompleted: false
  }
];

console.log(todos);

console.log(todos[1].text);

// ES6 forEach, map, filter (Arrays) functional programming
// Events (onmouseleave, onmouseover etc.)
// Use as little global variables as possible to avoid scope pollution / variable collision

// web manifest 
window.__remixManifest = {
  "version": "d36b817a",
  "entry": {
      "module": "/build/entry.client-EUITTQHJ.js",
      "imports": ["/build/_shared/chunk-ZDRGQH5V.js", "/build/_shared/chunk-VK3NTCPL.js", "/build/_shared/chunk-ZPHV5ZYN.js", "/build/_shared/chunk-EQWCKCTW.js", "/build/_shared/chunk-X3FSQJCZ.js", "/build/_shared/chunk-WJC7M44Z.js", "/build/_shared/chunk-6VRK4GPR.js"]
  },
  "routes": {
      "root": {
          "id": "root",
          "path": "",
          "module": "/build/root-RRU5ZYWW.js",
          "imports": ["/build/_shared/chunk-3AOXMHAT.js", "/build/_shared/chunk-LIM32NTY.js", "/build/_shared/chunk-ENZWTUWY.js", "/build/_shared/chunk-VBYTPGLN.js", "/build/_shared/chunk-X6PRMLGM.js", "/build/_shared/chunk-R3N3MVI7.js"],
          "hasAction": false,
          "hasLoader": true,
          "hasCatchBoundary": true,
          "hasErrorBoundary": false
      },
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
