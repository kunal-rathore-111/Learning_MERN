
//1-> optional value in interface

interface User {
    name: string,
    age: number,
    address?: {
        country: string,
        city: string,
        pincode: number,
    }
}


let user1: User = {
    name: "kunal",
    age: 23,
}
let user2: User = {
    name: "kunal",
    age: 23,
    address: {
        country: "India",
        city: "Mumbai",
        pincode: 230202
    }
}

function isValid(user: User): boolean {
    return user.age > 18;
}

console.log(isValid(user1));
console.log(isValid(user2));



//2-> interface having fucntion

interface Person {
    name: string,
    age: number,
    greet: () => string
}

const mangoMan: Person = {
    name: "Kunal",
    age: 23,
    greet: () => {
        console.log("holla");
        return 'Hi'
    }
}
mangoMan.greet();