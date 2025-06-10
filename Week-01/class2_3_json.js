

// JSON.parse() or JSON.stringify <- to convert string into object or vice versa


let str = '{"name": "kunal", "age": "14", "gender": "male" }';    // string format should be like that

const users = JSON.parse(str);

console.log(users["name"]);


// again,
let str1 = '{"name": "k", "age":"13", "isEligible": "false"}';

const users1 = JSON.parse(str1);
console.log(users1["isEligible"]);



// stringify  <- convert object into string format

const users2 = [{ name: "linda", age: 32, gender: "female" },
{ name: "venom", age: 23, gender: "male" }];     // array of objects

let str2 = JSON.stringify(users2);

console.log(str2);




// math function

console.log(Math.random());

console.log(Math.floor(2.3)); // near smaller int
console.log(Math.ceil(2.3));  // near greates int



// objects 