import { atom, atomFamily, selector, selectorFamily } from "recoil";


export const todoFamilyAtom = atomFamily({
    key: "todoAtom",
    default: selectorFamily({
        key: "todoAtomSelectorFamily",
        get: (id) => async ({ get }) => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const resJson = res.json();
            return resJson;
        }
    })
})