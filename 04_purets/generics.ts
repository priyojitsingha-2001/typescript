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

function getSearchProducts<T>(products:T[]):T{
    // do some database operation
    const myIndex=3;
    return products[myIndex];
}

const getMoreSearchProdcts = <T>(products:T[]):T=>{
    // do some database operation
    const myIndex=5;
    return products[myIndex];
}