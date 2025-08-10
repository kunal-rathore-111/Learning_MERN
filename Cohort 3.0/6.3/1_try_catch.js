

//  Try catch -> throwing and catching in js

function findLength(name) {
    return name.length;
}
try {
    const l = findLength();
    console.log(l);
}
catch (e) {
    console.log("error " + e);
}
console.log("hi");