
// self aysnc function
const fs = require("fs");

// function kunal(onDone) {
//     fs.readFile("class3_1.txt", "utf-8", function (err, data) {
//         onDone(data);
//     });
// }

// function onDone(data) {
//     console.log(data);
// }

// kunal(onDone);


// function using promise


// function kunal() {
//     let p = new Promise(function (resolve) {
//         setTimeout(function () { resolve("hi there") }, 1000);
//     });
//     return p;
// }

// function af(p) {
//     console.log(p);
// }

// kunal().then(af);


// using async await


function kunal() {
    return new Promise(function (resolve) {
        fs.readFile("class3_1.txt", "utf-8", function (err, data) {
            resolve(data);
        });
    });
}

async function main() {
    let p = await kunal();
    console.log(p);
}

main();