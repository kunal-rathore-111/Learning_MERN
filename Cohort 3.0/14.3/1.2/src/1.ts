

// records -> cleaner way to deal with objects in ts

/* bad way- 

 interface Users {
    name: string,
    age: number
}

type UsersWithID = {
    [key: string]: Users;
}

const users: UsersWithID = {
    'id1': { name: "kunal", age: 2 },
    'id2': { name: "eroie", age: 12 },
} */


// good way
interface Users {
    name: string,
    age: number
}

const users1: Record<string, Users> = {  // id, Users
    'id1': { name: "kunal", age: 2 },
    'id2': { name: "eroie", age: 12 },
}


// 2)- Map

const users2 = new Map<string, Users>();
// bad- users2.['id'] = {some data in object format}
users2.set("id3", { name: "kunal", age: 32 });

// to get value
const data = users2.get('id3');
console.log(data);

//3) Exclude- to exclude some variables 

type GODofWAR = 'scroll' | 'click';

type versionRagnorok = Exclude<GODofWAR, 'scroll'>;


const hakunaMATTATA = (e: versionRagnorok) => {
    console.log("HAKUNA - MATAATTA");
}

hakunaMATTATA("click");
// hakunaMATTATA("scroll");



// zod type inferece -> the schema we define in zod can also be used as type, see 1.3 folder for better understanding
