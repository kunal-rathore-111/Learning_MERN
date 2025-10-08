"use strict";
//1-> optional value in interface
Object.defineProperty(exports, "__esModule", { value: true });
let user1 = {
    name: "kunal",
    age: 23,
};
let user2 = {
    name: "kunal",
    age: 23,
    address: {
        country: "India",
        city: "Mumbai",
        pincode: 230202
    }
};
function isValid(user) {
    return user.age > 18;
}
console.log(isValid(user1));
console.log(isValid(user2));
const mangoMan = {
    name: "Kunal",
    age: 23,
    greet: () => {
        console.log("holla");
        return 'Hi';
    }
};
mangoMan.greet();
//# sourceMappingURL=1.js.map