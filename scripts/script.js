const javascript = true;
const react = 12;
const node = 'cool';

// conditionals
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

//functions

const functionExample = (a, b) => {
  return a * b;
}
console.log(functionExample(2, 3)); // 6

// loops

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Template String

console.log("My name is ${name} and I am ${age}");

const eg = "Hello World";

console.log(eg.length);
console.log(eg.toUpperCase);
console.log(eg.toLowerCase);
console.log(eg.substring(0, 5));
console.log(eg.substring(0, 5).toUpperCase());

//Arrays - variables that hold multiple values
//Array methods

// create an array


const numbers = new Array(1, 2, 3, 4, 5);

console.log(numbers);

const fruits = ["apples", "oranges", "pears, 10, true"];
fruits[3] = "grapes";
fruits.push("mangos");
fruits.unshift("strawberries");
fruits.pop();

console.log(Array.isArray(fruits));

console.log(fruits.indexOf("oranges"));

console.log(fruits);
console.log(fruits[1]);

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