
//  .length <- function gives the length of string 

let str = 'kunal al al';
console.log(str.length);

// .indexOf('target')  <- gives the index 0f target occuring in the string  

function indexFind(str, target) {
    console.log('Index is- ' + str.indexOf(target));
    console.log('lastIndex is- ' + str.lastIndexOf(target));
}

let target = 'al';
indexFind(str, target);


// slice  <= function to get substring 
const value = 'something';
let ans = value.slice(2, 5);
let ans2 = value.substr(2, 5);
console.log(ans);
console.log(ans2);



// replace 

str = 'hello w,orld';

console.log(str.replace('worl   ', 'duniya'));


// split  <= convert string into an array of words

let ans3 = str.split(',');
console.log(ans3);



// trim <= remove extra spaces in a string of begining and end

str = '      hello    ';

console.log(str.trim());


// to upper   <=  convert all in upper case

console.log(str.toUpperCase());
console.log(str.toLowerCase());


// parseInt()  <= convert string into Integer

console.log(parseInt('23'));
console.log(parseInt('45px'));
console.log(parseInt('wer 45px'));

console.log(parseFloat('2.1'));




// array push pop

let arr = [1, 2, 4, 5];
arr.push(7);
console.log(arr);
arr.pop();
console.log(arr);


// shift unshift in array

arr.shift();     //pop from front
console.log(arr);
arr.unshift(11); // push in front of array
console.log(arr);


// concate array  (merge two array)

arr = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log(arr.concat(arr2));


// forEach
console.log();
function prinT(st) {
    console.log(st);
}

arr2.forEach(prinT);


// objects and classes

class Animal {
    constructor(name, legcount, voice) {
        this.name = name;
        this.letcount = legcount;
        this.voice = voice;
    }

    static myType() {
        console.log('animal');  // this function doesn't need any object to get call class can directly call static functions
    }

    speak() {
        console.log('hi this speaks ' + this.voice);
    }
}


let dog = new Animal('dog', 4, 'bhow bhow');
let cat = new Animal('cat', 4, 'meow meow');

dog.speak();
cat.speak();


Animal.myType();