
import { atom, selector } from "recoil";


export const counterAtom = atom({
    key: "counter",
    default: 0
});

export const evenSelector = selector({
    key: "evenSelectorCount",
    get: ({ get }) => {
        const counter = get(counterAtom);
        return counter % 2 === 0;
    }
})

