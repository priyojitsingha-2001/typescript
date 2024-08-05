const score: Array<Number> = [];
const names: Array<String> = [];

function identityOne(val: boolean | number): boolean | number | string {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

// function identityThree<Type>(val: Type): Type {
//     return val;
// }

function identityThree<T>(val: T): T {
    return val;
}