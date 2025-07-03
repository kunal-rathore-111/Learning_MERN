

// time related functions


let currentDate = new Date(); // currentDate is an object and new Date() is a predefined class

console.log(currentDate.getDate());
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getFullYear());


// calculate time taken to calculate sum of 0 to 100000

function calculate() {
    let a = 0;
    for (let i = 0; i < 10000000; i++) {
        a = a + i;
    }
    return a;
}


const beforeCalculateTime = new Date();
const beforeCalTimeinMs = beforeCalculateTime.getTime();       //gives the time from 1900 till now in ms

console.log(calculate());

const afterCalculateTime = new Date();
const afterCalTimeinMs = afterCalculateTime.getTime();

console.log('time take in ms is- ' + (afterCalTimeinMs - beforeCalTimeinMs));




// print the current time using set interval

function printTime() {
    console.log(new Date().getTime());
}

setInterval(printTime, 1000);