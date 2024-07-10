// Function `addTwo` takes a parameter `num` of type `number` and returns the result of adding 2 to `num`
function addTwo(num: number) {
    return num + 2;
}

// Function `getUpper` takes a parameter `val` of type `string` and returns the uppercase version of `val`
function getUpper(val: string) {
    return val.toUpperCase();
}

// Calls the `addTwo` function with the argument 5, which will return 7
addTwo(5);

// Calls the `getUpper` function with the argument "javascript", which will return "JAVASCRIPT"
getUpper("javascript");

// Declares an arrow function `loginUser` that takes three parameters: `name` of type `string`, `email` of type `string`, and `isPaid` of type `boolean` with a default value of `false`
let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    // Function body is empty
}

// Calls the `loginUser` function with the arguments "Alex" and "alex@gmail.com". `isPaid` will default to `false`
loginUser("Alex", "alex@gmail.com");
