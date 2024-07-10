// Declares a constant object `User` with properties `name`, `email`, and `isActive`
const User = {
    name: "Priyojit",
    email: "priyojitsingha@gmail.com",
    isActive: true
};

// Function `createUser` takes an object with properties `name` of type `string` and `isPaid` of type `boolean`
// The function body is empty and does not perform any operations
function createUser({ name: string, isPaid: boolean }) {}

// Declares a variable `newUser` as an object with properties `name`, `isPaid`, and `email`
let newUser = { name: "priyojit", isPaid: false, email: "priyojitsingha@gmail.com" };

// Calls the `createUser` function with the `newUser` object as an argument
createUser(newUser);

// Uncommenting the next line would result in a TypeScript error because the `email` property is not expected by `createUser`
// createUser({name: "priyojit", isPaid: false, email: "priyojitsingha@gmail.com"})

// Function `createCourse` returns an object with properties `name` of type `string` and `price` of type `number`
function createCourse(): { name: string, price: number } {
    return { name: "reactjs", price: 399 };
}
