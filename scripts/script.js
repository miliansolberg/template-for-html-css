// Single line comment

/* Multi
Line
Comment */

// const, let (var - old)
// let can be changed, const is constant

const year = 2003;

let birth = 2003;

birth = 2000;

console.log(year);
console.log(birth);

// String ("example"), Numbers(1,2,3,10.5), Boolean (true/false), null(nothing), undefined (Main data types)

const name = "John"; // string
const age = 30; // number
const rating = 4.5; //number with decimal
const isCool = true; // Boolean
const x = null; // null
const y = undefined; // undefined
let z; // undefined

console.log(typeof age);

// Concatenation

console.log("My name is " + name + " and I am " + age);

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

console.error("error");
console.warn("warning");

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


// forEach, map, filter (Arrays) functional programming

alert("close window");

//////// Mouseevent (onmouseleave, onmouseover etc.)