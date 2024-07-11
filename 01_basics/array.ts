const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number)[] = [1, "2", 3]

// in ts you can even assign strict values as types 
let pi: 3.14 = 3.14

// now you cannot chnage pi to anything else
// pi=3.145

// you can use this in combination with unions
let color: "blue" | "green" | "black" = "blue"