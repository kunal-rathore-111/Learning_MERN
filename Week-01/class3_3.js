


// Async await syntax (it callback and use promise)

// await do same thing as the .then do and the callback do but await is easier and easily understable


function kunal() {
    let p = new Promise(function (resolve) {

        setTimeout(function () { resolve("hi there") }, 1000);
    });
    return p;
}

async function main() {
    let v = await kunal();

    console.log(v);


}

main();

console.log("after main");