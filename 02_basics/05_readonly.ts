// Defines a type alias `User` with properties including a readonly `_id`, optional `creditCardDetails`, and other required properties
type User = {
    readonly _id: string, // "readonly" keyword indicates this property is immutable after initial assignment
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number // `?` indicates this property is optional
}

// Creates an object `myUser` of type `User`
let myUser: User = {
    _id: "123",
    name: "priyojit",
    email: "priyojitsingha@gmail.com",
    isActive: true
}

// Defines type alias `cardNumber` with a `cardnumber` property
type cardNumber = {
    cardnumber: string
}

// Defines type alias `cardDate` with a `cardDate` property
type cardDate = {
    cardDate: string
}

// Defines type alias `cardDetails` by intersecting `cardNumber` and `cardDate` and adding a `cvv` property
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

// Modifies the `isActive` property of `myUser`
myUser.isActive = false

// Uncommenting the next line would result in a TypeScript error because `_id` is readonly
// myUser._id = "124"
