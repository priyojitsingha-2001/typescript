// Function `getValue` takes a parameter `myVal` of type `number` and returns a `string` or `boolean`
function getValue(myVal: number): string | boolean {
    if (myVal < 5) {
        return true; // Returns `true` if `myVal` is less than 5
    }
    return "200 OK"; // Returns "200 OK" otherwise
}

// Arrow function `getHello` takes a parameter `s` of type `string` and returns an empty string
const getHello = (s: string): string => {
    return "";
}

// Declares an array `heros` with three string elements: "thor", "spiderman", and "ironman"
// Uncommenting the next line would declare an array `heros` with three number elements: 1, 2, 3
const heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3]

// Uses the `map` method to iterate over the `heros` array and returns a new array with formatted strings
heros.map((hero) => {
    return `Hero is ${hero}`;
});

// Function `consoleError` takes a parameter `errmsg` of type `string` and logs it to the console
// The return type is `void`, indicating that this function does not return any value
function consoleError(errmsg: string): void {
    console.log(errmsg);
}

// Function `handleError` takes a parameter `errmsg` of type `string` and throws an error with the given message
// The return type is `never`, indicating that this function never successfully returns a value (it always throws an error)
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}