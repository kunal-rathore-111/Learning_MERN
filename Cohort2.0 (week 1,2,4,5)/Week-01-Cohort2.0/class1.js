
console.log("Ram");  // <- print

// console.log(a);      <-will give error


// Variables (let, var, const)  -> VALUE can be changed

// var ->  original, const -> constant no change in value later, let -> value can be changed later

var a = 1;

console.log(a);

a = 2;
console.log(a);

let b = 4;
console.log(b);

// const c = 5;
// c = 7;            give error 
// console.log(c);


// strings, no, booleans

let firstName = "Kunal";
let age = 13;
let isMarried = false;

console.log("name is- " + firstName + " and age is- " + age);


// if else
if (isMarried == true) {
    console.log(firstName + " is married");
}
else {
    console.log(firstName + " is not married");
}


// loops

// add all no. till 1 to 100
let ans = 0;


for (let i = 1; i <= 100; i++) {
    ans = ans + i;
}
console.log(ans);


// que.

/* 1> Write a program to greet a person given their first and last name 
   2> Write a program to greet a person based on their gender (if-else)
   3> Write a program that counts from 0 to 1000 and prints (for loop)
*/

console.log("\n");
// Arrays
const personArray = ["harkirat", "kunal", "someone"];

for (let i = 0; i < personArray.length; i++) {
    console.log(personArray[i] + " ");
}


console.log("\n");

const ages = [15, 16, 13, 14, 12, 16, 18];

// que.
// 1> print even ages
for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 == 0) {
        console.log(ages[i]);
    }
}


// que.

// 2> Write a program to print biggest no. of an array


//Object

const users = [
    {
        firstName: "harkirat",
        age: 14,
    },
    {
        firstName: "kunal",
        age: 12,
    },
]

for (let i = 0; i < users.length; i++) {
    if (users[i]["age"] <= 12) {
        console.log(users[i]["firstName"] + " ");
    }
}



// que.
// 3> Write a program that prints all the male people's first name given a complex object

const users1 = [
    {
        firstName: "kunal",
        gender: "male",
    },
    {
        firstName: "amit",
        gender: "male",

    },
    {
        firstName: "ranu",
        gender: "female",
    }
]


for (let j = 0; j < users1.length; j++) {
    if (users1[j]["gender"] == "male") {
        console.log("\n" + users1[j]["firstName"] + " ");
    }
}


// que
// 4> write a program to reverse all the elements of an array


// functions

// 1> write a function to finds the sum of two numbers

function findSum(a, b) {
    return a + b;
}

const ans1 = findSum(1, 5);
console.log(ans1);


// function callbacks (passing function as argument to another function)

function sum(num1, num2, func1) {
    let result = num1 + num2;
    func1(result);
}

function displayResult(data) {
    console.log("Result is- " + data);
}

function displayResultPassive(data) {
    console.log("Result's was- " + data);
}

// you are only allowed to call one function after this
// how will you display result of sum

sum(1, 2, displayResultPassive);


// this was the function callbacks


// now exercise on function call back


function checkAndPrint(a, b, func2) {
    const ans4 = func2(a, b);  // will call another function and store the returned value in ans4

    console.log(ans4);
}

function sum1(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

checkAndPrint(3, 5, sub);



// setTimeOut a predefined function

function greet() {
    console.log('namaste');
}


function greetAlien() {
    console.log('hello alieen');
}


setTimeout(greetAlien, 4 * 1000);  //this function will call greetAlien function after a 4 sec (4000miliseconds) 
// and that was also call back


// setInterval function

setInterval(greet, 1 * 1000);


