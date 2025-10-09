"use strict";
// Types-> types are simillar but they don't provide fucntionality of implimenting classes as interface provides,
// and it provides union and intersection, which in interface not possible
Object.defineProperty(exports, "__esModule", { value: true });
function filterUsers(UsersData) {
    const ans = [];
    for (let i = 0; i < UsersData.length; i++) {
        if (UsersData[i]?.age > 18) {
            ans.push(UsersData[i]);
        }
    }
    return ans;
}
const UsersData = [
    { name: 'kunal', age: 43, address: [{ city: 'dewas', pincode: 2142 }] },
    { name: 'dew', age: 13, address: [{ city: 'dewas', pincode: 2142 }] },
    { name: 'erw', age: 23, address: [{ city: 'dewas', pincode: 2142 }] },
    { name: 'qweerw', age: 63 },
];
const ans = filterUsers(UsersData);
console.log(ans);
//# sourceMappingURL=1.js.map