

// implementing class by interface

interface People {
    name: string;
    age: number;
}

class Manager implements People {

    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log('hi');
    }
}

const Manager1 = new Manager("Kunal", 34);

Manager1.greet();