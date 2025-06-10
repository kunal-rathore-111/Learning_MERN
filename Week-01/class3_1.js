
// async vs sync functions


// sync function in which thread execute the function then move next eg -> function sum() is sync function
// async function in which thread move to the next and then when required call the function  eg setTimeout() is async function

function sum(m = 1000) {
    let a = 0;
    for (let i = 0; i < m; i++) {
        a += i;
    }
    console.log(a);
}

setTimeout(sum, 1000);   // call the function after 1sec till go to next line of code 

console.log("hii");




// async function provided by js -> setTimeout, fs.readFile -> to read file from filesystem


const fs = require("fs");
// fs is a filesystem library

fs.readFile("class3_1.txt", "utf-8", function (err, data) {
    console.log(data);
})

console.log("holla");
let a = 0;
for (let i = 0; i < 10000; i++) {
    a += i;
}

console.log(a);
console.log("holla2");





// real use of call back functions like setTimeout, readFile is in async 
