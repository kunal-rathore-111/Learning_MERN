/* ## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
 */









let a = 0;
let i = 0;

function print() {

    console.clear();
    console.log(a);
    a++;
    setTimeout(print, 1000);

}

print();




























































// (Hint: setTimeout)