/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/


function sum(n) {
    let ans = 0;

    for (let i = 0; i <= n; i++) {
        ans += i;
    }
    return ans;
}

function calculateTime(n) {

    const t1 = new Date();
    const bT = t1.getTime();

    sum(n);
    const t2 = new Date();
    const aT = t2.getTime();
    console.log(aT + " " + bT);
    let acctualTime = aT - bT;
    return acctualTime / 1000;
}


console.log(calculateTime(10000000));