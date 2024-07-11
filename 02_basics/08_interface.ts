// In TypeScript, an interface is a way to define the structure of an object. It specifies the types of properties and methods that an object can have, without actually implementing those properties or methods. Interfaces are used for type-checking in TypeScript, ensuring that objects adhere to a specific structure.


// here is an example of inteface
interface User {
    readonly dbId: number
    userId: number,
    email: string,
    googleId?: string,
    startTrial:()=>string,
    // startTrail():string //another way of defining function that returns string
    // getCoupon(coupon:string):number another example of a fuction
}

// here we are creating a user of type user interface
const priyojit: User = {
    dbId: 11,
    email: "priyojit@google.com",
    userId: 221122,
    startTrial:()=>{
        return "trial started"
    }
}

priyojit.email="priyojit@gmail.com"
// priyojit.dbId=00