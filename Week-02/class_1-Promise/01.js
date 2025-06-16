

// simple callback function to calculate sum of a and b either square or cube


function square(a) {
    return a * a;
}

function cube(b) {
    return b * b * b;
}

function sumofSomething(a, b, func1) {
    let ans1 = func1(a);
    let ans2 = func1(b);
    return ans1 + ans2;
}


let ans = sumofSomething(2, 2, cube);
console.log(ans);



// Async functions -> executes the function and move to next task like reading file in behind or setTimeout function


function print() {
    console.log("hm");  // will run at end
}

setTimeout(print, 3000);

for (let i = 0; i < 100000; i++) { console.log(i); }
console.log('completed');