// A type alias in TypeScript is a way to create a new name for an existing type, making complex types easier to use and understand.

// Defines a type alias `User` with properties `name` of type `string`, `email` of type `string`, and `isActive` of type `boolean`
type User = {
    name: string,
    email: string,
    isActive: boolean
}

// Function `createUser` takes a parameter `user` of type `User` and returns an object of type `User`
function createUser(user: User): User {
    return user; // Returns the `user` object
}

// Calls the `createUser` function with an object that matches the `User` type
createUser({ name: "priyojit", email: "priyojitsingha@gmail.com", isActive: true });
