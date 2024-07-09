// Declares a variable `greetings` with the type `string` and initializes it with "Hello World"
let greetings: string = "Hello World";

// Declares a variable `mynum` without specifying the type, so TypeScript infers it as `number`
let mynum = 9;

// This line will cause an error because `toUpperCase` is a method for strings, not numbers
// mynum.toUpperCase(); // Uncommenting this will result in a TypeScript error

console.log(greetings);

// Number

let userId: Number = 334466;

// boolean

let isLoggedIn: boolean=false;

// type inference
let value="Hello"; // here we don't need to use colons to define types, it is infered from the assigned value

