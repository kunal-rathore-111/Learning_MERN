

// my own async function
// const fs = require("fs");

const { promises } = require("dns");
const { resolve } = require("path");

// function kunal(onDone) {
//     fs.readFile("class3_1.txt", "utf-8", function (err, data) {
//         onDone(data);
//     });
// }

// function onDone(data) {
//     console.log(data);
// }

// kunal(onDone);


// async function using promises better way (promises are syntactical sugar )
// const fs = require("fs");

// function kunal() {
//     console.log("inside kunal");

//     return new Promise(function (resolve) {
//         console.log("inside promise");

//         fs.readFile("class3_1.txt", "utf-8",
//             function (err, data) {
//                 console.log("inside readfile function");

//                 resolve(data);
//             });
//     });
// }

// function ondone(data) {
//     console.log("inside on done");
//     console.log(data);
// }

// kunal().then(ondone);



// promise is a class which make async callback function more readable

// var d = new Promise(function (resolve) {
//     setTimeout(function () { resolve('foo') }, 1000);
// });

// console.log(d);


// function callBack() {
//     console.log(d);
// }

// d.then(callBack);



// again

var p = new Promise(function (resolve) {
    resolve("hi there");
});


p.then(function () {
    console.log(p);
})


// try

function kunal() {
    let r = new Promise(function (resolve) {
        setTimeout(resolve, 2000);
    });
    return r;
}

let x = kunal();
x.then(function () {
    console.log('meow');
})