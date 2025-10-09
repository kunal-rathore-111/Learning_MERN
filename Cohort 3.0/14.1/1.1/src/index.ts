// interface and types

//interface (for assigning types to object)
interface UserType {
    name: string,
    age: number | string
}

// object creation
let user: UserType = {
    name: "Kunal",
    age: 3
}

function greet(user: UserType): void {
    console.log("Hi " + user.name + " your age is " + user.age);
}

greet(user);


//types gives union functionality

type users = {
    name: string,
    age: number | string
}

function welcome(user: users) {
    console.log(user.name);
}

welcome({ name: 'kunal', age: 40 });
welcome({ name: 'kunal', age: '40' });


type stringORnumber = string | number;

let userAge1: stringORnumber = '3';
let userAge2: stringORnumber = 2;

interface departmentType {
    name: string,
    department: string,
}
type interseciton = users & departmentType;  // her enow if I use intersection in any function i need to pass name,age and department too

