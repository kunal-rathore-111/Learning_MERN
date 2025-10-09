
// Types-> types are simillar but they don't provide fucntionality of implimenting classes as interface provides,
// and it provides union and intersection, which in interface not possible

type rectangle = {
    height: string,
    width: string
}

const rectangle: rectangle = {
    height: "32",
    width: "23",
}


//  arrays in TypeScript

interface Address {
    city: string;
    pincode: number;
}
interface Users {
    name: string;
    age: number;
    address?: Address[];
}

function filterUsers(UsersData: Users[]) {

    const ans = [];
    for (let i = 0; i < UsersData.length; i++) {
        if (UsersData[i]?.age > 18) {
            ans.push(UsersData[i]);
        }
    }
    return ans;
}

const UsersData: Users[] = [
    { name: 'kunal', age: 43, address: [{ city: 'dewas', pincode: 2142 }], },
    { name: 'dew', age: 13, address: [{ city: 'dewas', pincode: 2142 }] },
    { name: 'erw', age: 23, address: [{ city: 'dewas', pincode: 2142 }] },
    { name: 'qweerw', age: 63 },
]

const ans = filterUsers(UsersData);

console.log(ans);


