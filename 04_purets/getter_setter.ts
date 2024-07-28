// Define a class called 'Person'
class Person {
    // Private properties _firstName and _lastName
    private _firstName: string;
    private _lastName: string;

    // Constructor to initialize the properties
    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Getter for 'firstName'
    // Allows reading the private property _firstName
    public get firstName(): string {
        return this._firstName;
    }

    // Setter for 'firstName'
    // Allows modifying the private property _firstName
    public set firstName(value: string) {
        // Adding a condition to validate the input
        if (value.length > 0) {
            this._firstName = value;
        } else {
            console.error('First name cannot be empty.');
        }
    }

    // Getter for 'lastName'
    public get lastName(): string {
        return this._lastName;
    }

    // Setter for 'lastName'
    public set lastName(value: string) {
        // Adding a condition to validate the input
        if (value.length > 0) {
            this._lastName = value;
        } else {
            console.error('Last name cannot be empty.');
        }
    }

    // Method to get the full name
    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

// Create an instance of the Person class
const person = new Person('John', 'Doe');

// Use the getter to read the first name
console.log(person.firstName); // Output: John

// Use the setter to modify the first name
person.firstName = 'Jane';
console.log(person.firstName); // Output: Jane

// Use the getter to read the last name
console.log(person.lastName); // Output: Doe

// Use the setter to modify the last name
person.lastName = 'Smith';
console.log(person.lastName); // Output: Smith

// Get the full name using the method
console.log(person.getFullName()); // Output: Jane Smith

// Try to set an empty first name (will trigger an error)
person.firstName = ''; // Output: First name cannot be empty.
