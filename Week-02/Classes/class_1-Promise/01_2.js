
// async function ex
/*
let a = 1;
console.log(a);


const fs = require("fs");

fs.readFile("read.txt", "utf-8", function (err, data) {
    console.log(data);
});

setTimeout(function () { console.log('Hi') }, 2000);

console.log("hogyaa");
 */


// async function ex (all async will publish after all sync function and first come first serve try on loupe website)
/*
console.log(a);



setTimeout(function () { console.log('Hii') }, 5000);
setTimeout(function () { console.log('Hi') }, 3000);

console.log("hogyaa");
 */



// nested async     <- should try on loupe 
/* let a = 'k';
console.log(a);

setTimeout(function () {

    console.log("hi");

    setTimeout(function () {

        console.log("hi from inside");

    }, 3000);

}, 5000);

for (let i = 0; i < 5; i++) {
    console.log(i);
} */



// promise

/* const p = new Promise(function (resolve) {
    setTimeout(resolve, 1000);
});

console.log("holla");

console.log(p);

console.log("hii"); */

// 2nd
/* 

const p = new Promise(function (resolve) {
    resolve("hi there")
});

p.then(function (para) { console.log(para) });


 */


// 3rd
/* function getPromises() {
    let p1 = new Promise(function (resolve) { resolve("hi1"); });
    let p2 = new Promise(function (resolve) { resolve("hi2"); });

    return [p1, p2]; // returns array 

}


const x = getPromises();

x[0].then(function (para) { console.log(para); });
x[1].then(function (para) { console.log(para); });
 */


// 4th

console.log("start");

function promisifiedTimeout() {

    console.log("in promisified");

    return new Promise(function (resolve) {
        console.log("in promise");
        setTimeout(function () { resolve("I am exausted") }, 2000);
    });
    console.log("exited promise");
}

console.log("exited promisified");


promisifiedTimeout().then(function (value) {
    console.log("in calling promisified");
    console.log(value);
})
console.log("exited promisified call");


// call back gives callback hell so promise helps it gives promise channing and "async await"

