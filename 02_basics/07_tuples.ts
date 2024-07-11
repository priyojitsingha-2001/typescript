let user:[string,number,boolean]

user=["priyojit",123,true]
// user=[123,"priyojit",true]

let rgb:[number,number,number]=[255,123,112] 

type User=[number,string] // here we are defining a type tuple

const user2:User=[112,"priyojit@gmail.com"]

user2[0]=2 // we can override the values

user2.push("js") // this is a weird behaviour we can insert values using push,pop,shift...

// refer here: https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
