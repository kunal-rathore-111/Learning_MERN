"use strict";
// implementing class by interface
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('hi');
    }
}
const Manager1 = new Manager("Kunal", 34);
Manager1.greet();
//# sourceMappingURL=1.js.map