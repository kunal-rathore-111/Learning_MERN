// recap
/* interface User {
    username: string,
    age: number,
}

function sumOfAge(User1: User, User2: User) {
    return User1?.age + User2?.age;
}

const User1: User = {
    username: "Kunal",
    age: 23,
}

const User2: User = {
    username: "Shinchan",
    age: -1,
}
const result = sumOfAge(User1, User2);
console.log(result); */


// "Pick" -> to pick some specific values from interface or type
//let's we have a interface for db 

interface User {
    name: string,
    age: number,
    email: string,
    password: string
}

// and you need to create db function to update only the name ,age and password
// so our function looks like
interface updateProps {
    name: string,
    age: number,
    password: string,
}
function update(updateProps: updateProps) {
    // db call etc
}

// so yes this is good but what if I change the User object's age from number to string then need to change two places which may have inconsistency,
// so therefore we can 'pick' the required variabels in 'type'

type updatePropss = Pick<User, 'name' | 'age' | 'password'>

// then function will be

function updateData(updatePropss: updatePropss) {
    console.log(`Data updated ${updatePropss.name} ${updatePropss.password} ${updatePropss.age}`);
}

const User1: updatePropss = {
    name: "Kunal",
    age: 23,
    password: 'yt'
}
updateData(User1);


// 2) Partial -> makes poperties as optional which are picked 

type newUpdatePropss = Partial<updatePropss>;
// eg
const User2: newUpdatePropss = {
    name: "kunal" // no error eve if object is empty cause of partiall
}

//3) ReadOnly-> makes the interface or type as read only, means when once initailzed make it constant
//eg

interface Person {
    readonly name: string,
    age: string,
}
const P1: Person = {
    name: "Kunal",
    age: "23",
}
// it will gave error because of 'readonly'-
// P1.name = "Shinchan";     

