class User{
    readonly city:string="Naihati";
    constructor(public email:string,public name:string){

    }
}

const newuser=new User("p@p","priyojit");

// the general way of defining a class
// class User{
//     public name:string;
//     public email:string;
//     readonly city:string="Naihati";
//     constructor(name:string,email:string){
//         this.name=name;
//         this.email=email;
//     }
// }