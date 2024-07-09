// Declares a variable `greetings` with the type `string` and initializes it with "Hello World"
let greetings: string = "Hello World";

// Declares a variable `mynum` without specifying the type, so TypeScript infers it as `number`
let mynum = 9;

// This line will cause an error because `toUpperCase` is a method for strings, not numbers
// mynum.toUpperCase(); // Uncommenting this will result in a TypeScript error

console.log(greetings);

// Declares a variable `userId` with the type `Number` and initializes it with 334466
let userId: Number = 334466;

// Declares a variable `isLoggedIn` with the type `boolean` and initializes it with `false`
let isLoggedIn: boolean = false;

// Declares a variable `value` without specifying the type. TypeScript infers it as `string` from the assigned value "Hello"
let value = "Hello"; // here we don't need to use colons to define types, it is inferred from the assigned value

// Declares a variable `hero` with the type `string`, but does not initialize it yet
let hero: string;

// Declares a function `getHero` that returns `any` type (inferred), and currently returns `false`
function getHero() {
    return false;
}

// Assigns the return value of `getHero()` to `hero`. This will cause a type error because `hero` is expected to be a `string`
// hero = getHero(); // TypeScript will give an error here because `getHero` returns a `boolean`, not a `string`
