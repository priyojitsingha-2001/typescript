// Declares a variable `score` that can be either a `string` or a `number`
let score: string | number = 33

// Assigns a new number value to `score`
score = 44

// Assigns a new string value to `score`
score = "55"

// Defines a type alias `User` with properties `name` and `id`
type User = {
    name: string,
    id: number
}

// Defines a type alias `Admin` with properties `name` and `id`
type Admin = {
    name: string,
    id: number
}

// Declares a variable `priyojit` that can be of type `User` or `Admin`
let priyojit: User | Admin = {
    name: "priyojit",
    id: 123
}

// Function `getDbId` takes a parameter `id` that can be a `number` or `string` and logs it to the console
function getDbId(id: number | string) {
    // Making some API calls
    console.log(`DB id is ${id}`);
}

// Calls `getDbId` with a number
getDbId(355)

// Calls `getDbId` with a string
getDbId("545")

// Function `getId` takes a parameter `id` that can be a `number` or `string`
function getId(id: number | string) {
    // Uncommenting the next line would cause an error because `toLowerCase` is a method for strings, not numbers
    // id.toLowerCase()

    // Checks if `id` is a string
    if (typeof id == "string") {
        id.toLowerCase() // Converts `id` to lowercase if it's a string
    }
}
